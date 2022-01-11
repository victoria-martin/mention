import React, { useRef, useState } from "react"
import { format } from "date-fns"
import { Img } from "react-image"
import PropTypes from "prop-types"
import { useEffect } from "react/cjs/react.development"
import { SOURCETYPE, SOURCETYPEMAP } from "../constants/source_type"
import Description from "./Description"
const reactStringReplace = require("react-string-replace")

const EmptyIcon = () => {
  return <div className="icon icon_empty" />
}

const SourceIcon = ({ source_type }) => {
  const [sourceTypeData, setSourcetypeData] = useState({})
  const [icon, setIcon] = useState("")
  const [bgcolor, setBgcolor] = useState(null)
  const myMap = new Map(SOURCETYPEMAP)

  // v1 with [SOURCETYPE]
  // useEffect(
  //   () => setSourcetypeData(SOURCETYPE.find((e) => e.type === source_type)),
  //   [source_type]
  // )
  // myMap.set()

  useEffect(() => {
    // console.log(myMap)
    setIcon(myMap.get(source_type)["icon"])
    return () => {
      setBgcolor(null)
      setIcon(null)
    }
  }, [myMap, source_type])

  return (
    <div
      style={{ backgroundColor: myMap.get(source_type)["bgcolor"] }}
      className="source_type"
    >
      {icon}
    </div>
  )
}

const Mention = ({
  title,
  description,
  date,
  img_url,
  clickable_url,
  source_name,
  source_type,
  i,
}) => {
  const [read, setRead] = useState(false)
  const openLink = () => window.open(clickable_url, "_blank")

  const handleRead = () => (!read ? setRead(true) : null)
  const ref = useRef()

  const highlightedText = "mention"

  return (
    <div
      className="mention"
      onClick={() => {
        openLink()
        handleRead()
      }}
    >
      <div className="img_container">
        <div className="icon_container">
          <Img
            src={img_url}
            alt="icon"
            className="icon"
            // The "unloader" prop displays an EmptyIcon component if the img url sends a 404. If you remove the prop, the image component will not be rendered.
            unloader={<EmptyIcon />}
          />
          <SourceIcon source_type={source_type} />
        </div>

        {!read ? <div className="marker_read" /> : null}
      </div>
      <div className="textblock">
        <div className="two-cols">
          <span className="source">{source_name}</span>
          <span className="date">{format(new Date(date), "do LLL")}</span>
        </div>
        <span className="title hide">{title}</span>
        <span className="description" style={{ border: "solid 2px red" }}>
          {/* {reactStringReplace(description, /(mention)/gi, () => (
            <mark>
              <b>mention</b>
            </mark>
          ))} */}
          <Description description={description} index={i} />
        </span>
      </div>
    </div>
  )
}

export default Mention

Mention.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source_name: PropTypes.string,
  source_type: PropTypes.string,
  date: PropTypes.string,
  img_url: PropTypes.string,
  clickable_url: PropTypes.string,
}
