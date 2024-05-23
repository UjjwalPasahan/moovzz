import axios from "axios";


const getData = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODQ3MGU5ODM5Njc2YWIwYzU3ZGE2Y2U3ZWUxMTMyZCIsInN1YiI6IjY2NDhlN2QyYzk4ZTAxZDNjZDU0MDRjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kCtqsKCc9En1ao2f6ArWcFcKwj17Z9Qyx-N48IffaQg'
      }
})

export default getData;