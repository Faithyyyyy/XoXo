import { useQuery } from "react-query";
import axios from "axios";

const fetchData = () => {
  return axios.get("https://fakestoreapi.com/products");
};

export const useAsync = () => {
  return useQuery("Products-data", fetchData, {
    refetchOnWindowFocus: false,
  });
};
