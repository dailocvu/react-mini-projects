import axios from "axios";

//default properties
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 8HzFRvv_Nbpzn3L_P5rAycUpYsBHlgzTVFJXiIdZa_Q",
  },
});
