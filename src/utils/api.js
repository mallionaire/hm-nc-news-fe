import axios from "axios";

// extract all API calls & implement async / await

// export const getTopics = () => {
//   return axios
//     .get("https://hm-nc-news.herokuapp.com/api/topics")
//     .then(({data: {topics}}) => {
//       return topics
//     });
// };

// using async / await
export const getTopics = async () => {
  const response = await axios.get(
    "https://hm-nc-news.herokuapp.com/api/topics"
  );
  return response.data.topics;
};
