import React, { useEffect, useState } from "react"
import { getMentions } from "../helpers/actions"
import { format } from "date-fns"
import { useImage, Img } from "react-image"

const EmptyIcon = () => {
  return <div className="icon icon_empty"></div>
}

const Mention = ({
  title,
  description,
  source,
  date,
  img_url,
  clickable_url,
}) => {
  const [imgError, setImgError] = useState(false)

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
          unloader={<EmptyIcon />}
        />
      </div>
      {/* <MentionIcon img_url={img_url} /> */}

      <div className="textblock">
        <div className="two-cols">
          <span className="source">{source}</span>
          {/* <span className="date">{date}</span> */}
          <span className="date">{format(new Date(date), "do LLL")}</span>
        </div>
        <span className="title hide">{title}</span>
        <span className="description">{description.substring(0, 70)}</span>
      </div>
    </div>
  )
}

export default Mention
