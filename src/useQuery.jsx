// import { useEffect, useState } from "react";
// import axios from "axios";?
// function useAsync(url) {
//   const [data, setData] = useState([]);
//   const [Ispending, setIsPending] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async () => {
//       try {
//         const response = await axios.get(url);

//         setData(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//       setIsPending(false);
//     };
//   }, []);
//   return { data, Ispending, error };
// }

// export default useAsync;
import { useQuery } from "react-query";
import axios from "axios";

const fetchData = () => {
  return axios.get("https://fakestoreapiserver.reactbd.com/products");
};

export const useAsync = () => {
  return useQuery("Products-data", fetchData, {
    refetchOnWindowFocus: false,
  });
};
