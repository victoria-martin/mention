import color from "../helpers/color.json"

import { FaTwitter } from "react-icons/fa"
import { ImBlog } from "react-icons/im"
import { MdForum } from "react-icons/md"

const SIZE = 12

export const SOURCETYPE = [
  {
    type: "twitter",
    bgcolor: color.source_blue,
    icon: <FaTwitter size={SIZE} />,
  },
  {
    type: "blogs",
    bgcolor: color.source_dark,
    icon: <ImBlog size={SIZE} />,
  },
  {
    type: "forums",
    bgcolor: color.source_green,
    icon: <MdForum size={SIZE} />,
  },
]
