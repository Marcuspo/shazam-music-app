import axios from "axios"

const apiSha = axios.create({
  baseURL: "https://shazam.p.rapidapi.com/search",
  method: "GET",
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "34d2ba7a5amsh81b117f8a764ee1p15146ejsn8f2ff91e50be",
  },
})

export default apiSha
