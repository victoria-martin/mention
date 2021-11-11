import axios from "axios"

const token =
  "ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ"

const account_id = "661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888"

const alert_id = 1214654

export const api = axios.create({
  baseURL: `http://localhost:1234/api/accounts/${account_id}/alerts/${alert_id}`,
  timeOut: 1000,
  headers: {
    "Accept-Version": 1.19,
    Accept: "application/json",
    Authorization: "Bearer " + token,
  },
})
