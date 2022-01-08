import axios from "axios";

const BASIC_URL_API = "https://www.thesportsdb.com/api";

export const axiosGetImages = () => {
  return axios
    .get(`${BASIC_URL_API}/v1/json/2/all_sports.php`)
    .then((response) => response)
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
