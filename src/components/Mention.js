import React, { useState } from "react"
import { format } from "date-fns"
import { Img } from "react-image"
import PropTypes from "prop-types"
import { useEffect } from "react/cjs/react.development"
import { SOURCETYPE } from "../constants/source_type"
import Mark from "mark.js"

const EmptyIcon = () => {
  return <div className="icon icon_empty" />
}

const SourceIcon = ({ source_type }) => {
  const [sourceTypeData, setSourcetypeData] = useState({})

  useEffect(
    () => setSourcetypeData(SOURCETYPE.find((e) => e.type === source_type)),
    [source_type]
  )

  return (
    <div
      style={{ backgroundColor: sourceTypeData.bgcolor }}
      className="source_type"
    >
      {sourceTypeData.icon}
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
}) => {
  const [read, setRead] = useState(false)

  const openLink = () => window.open(clickable_url, "_blank")

  const handleRead = () => (!read ? setRead(true) : null)

  const highlight = () => {
    const highlightedText = "mention"
    const context = document.querySelector(".context")
    const instance = new Mark(context)
    instance.mark(highlightedText)
  }

  useEffect(() => highlight(), [description])

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
        <span className="description context">{description}</span>
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
