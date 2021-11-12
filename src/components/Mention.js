import React from "react"
import { format } from "date-fns"
import { Img } from "react-image"
import PropTypes from "prop-types"

const EmptyIcon = () => {
  return <div className="icon icon_empty" />
}

const Mention = ({
  title,
  description,
  source,
  date,
  img_url,
  clickable_url,
}) => {
  return (
    <div
      className="mention"
      onClick={() => window.open(clickable_url, "_blank")}
    >
      <div className="icon_container">
        <Img
          src={img_url}
          alt="icon"
          className="icon"
          // The "unloader" prop displays an EmptyIcon component, grey circle, if the img url sends a 404. If you remove the prop, the image component will not be rendered and there will be a blank space instead.
          unloader={<EmptyIcon />}
        />
      </div>
      <div className="textblock">
        <div className="two-cols">
          <span className="source">{source}</span>
          <span className="date">{format(new Date(date), "do LLL")}</span>
        </div>
        <span className="title hide">{title}</span>
        <span>{description.substring(0, 70)}</span>
      </div>
    </div>
  )
}

export default Mention

Mention.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.string,
  img_url: PropTypes.string,
  clickable_url: PropTypes.string,
}
