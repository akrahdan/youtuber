import axios from "axios";
const key = "AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4zc"
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key,
        maxResults: 10,
        part: "snippet"
    }
})