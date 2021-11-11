import React, { useEffect, useState, useCallback } from "react"
import Mention from "./components/Mention"
import Loader from "react-js-loader"
import { api } from "./helpers/api"

const ContainerMentions = ({ mentions }) => {
  return (
    <div className="container_mentions">
      {mentions.map((mention) => (
        <Mention
          title={mention.title}
          description={mention.description_short}
          source={mention.source_url}
          clickable_url={mention.clickable_url}
          date={mention.created_at}
          key={mention.id}
          img_url={mention.picture_url}
        />
      ))}
    </div>
  )
}

const ContainerLoader = () => {
  return (
    <div className="loader">
      <Loader bgColor="grey" size="100" />
      {/* </div> */}
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

  const getMentionsAsync = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await api.get("/mentions")
      console.log(res.data.mentions)
      setMentions(res.data.mentions)
      setLoading(false)
      return res.data
    } catch (err) {
      console.log("Error : " + err.response.statusText)
      setError(true)
    }
  })

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
          // <div className="container_loader">
          <ContainerLoader />
        )}
        {/* refresh button */}
        <div className="container_bottom">
          <button onClick={() => getMentionsAsync()}>Refresh</button>
        </div>
      </div>
    </div>
  )
}

export default App
