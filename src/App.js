import React, { useEffect, useState } from "react"
import Mention from "./components/Mention"
import Loader from "react-js-loader"
import { api } from "./helpers/api"
import PropTypes from "prop-types"

const ContainerMentions = ({ mentions }) => {
  return (
    <div className="container_mentions">
      {mentions.map((mention, i) => (
        <Mention
          title={mention.title}
          description={mention.description_short}
          clickable_url={mention.clickable_url}
          date={mention.created_at}
          key={mention.id}
          img_url={mention.picture_url}
          source_name={mention.source_name}
          source_type={mention.source_type}
          i={i}
        />
      ))}
    </div>
  )
}

ContainerMentions.propTypes = {
  mentions: PropTypes.array,
}

const ContainerLoader = () => {
  return (
    <div className="loader">
      <Loader bgColor="grey" size="100" />
    </div>
  )
}

const ContainerError = () => {
  return (
    <span className="error_message">
      Nous ne nous pouvons récupérer les mentions
    </span>
  )
}

const App = () => {
  const [mentions, setMentions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  // const [mentionsMap, setMentionsMap] = useState(new Map())

  // const updateMap = (k, v) => {
  //   setMentionsMap(mentionsMap.set(k, v))
  // }

  const getMentionsAsync = async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await api.get("/mentions")
      setMentions(res.data.mentions)
      setLoading(false)
      console.log(res)
    } catch (err) {
      console.log(Error(err))
      err.response
        ? console.log("Error : " + err.response.statusText)
        : console.log("Nous ne pouvons récupérer les données")
      setError(true)
    }
  }

  useEffect(() => {
    getMentionsAsync()
    return () => {
      setMentions([])
      setLoading(true)
      setError(false)
    }
  }, [])

  return (
    <div className="App">
      <div className="container">
        {error ? (
          <ContainerError />
        ) : !loading && mentions.length ? (
          <ContainerMentions mentions={mentions} />
        ) : (
          <ContainerLoader />
        )}
        <div className="container_bottom">
          <button onClick={() => getMentionsAsync()}>Refresh</button>
        </div>
      </div>
    </div>
  )
}

export default App
