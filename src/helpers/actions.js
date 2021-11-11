import { api, loadAuthorisationHeader } from "./api"

export const getMentions = () => {
  api
    .get("/mentions")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

// export async function getMentionsAsync() {
//   try {
//     const res = await api.get("/mentions")
//     console.log(res.data)
//     return res.data
//   } catch (err) {
//     alert("Nous ne nous pouvons récupérer les mentions")
//     // console.log(err)
//   }
// }
