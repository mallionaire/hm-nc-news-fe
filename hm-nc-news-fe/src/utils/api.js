import axios from "axios";


export const getTopics = () => {
  return axios.get("https://hm-nc-news.herokuapp.com/api/topics")

}