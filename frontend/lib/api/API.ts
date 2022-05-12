import axios from "axios";

const post = async (url: string, data: any) => {
  const result = await axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return result;
};

export default { post };
