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

// faut-il remettre la key dans l obj ?
export const SOURCETYPEMAP = [
  ["twitter", { icon: <FaTwitter size={SIZE} />, bgcolor: color.source_blue }],
  ["blogs", { icon: <ImBlog size={SIZE} />, bgcolor: color.source_dark }],
  ["forums", { icon: <MdForum size={SIZE} />, bgcolor: color.source_green }],
]

// export const SOURCETYPEMAP = [
//   ["twitter", "twitterIcon"],
//   ["blogs", "blogsIcon"],
//   ["forums", "forumsIcon"],
// ]
