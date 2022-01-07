import axios from "axios";

const BASIC_URL_API = "https://www.thesportsdb.com/api.php";

export const axiosGet = () => {
  return axios
    .get(`${BASIC_URL_API}`)
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
