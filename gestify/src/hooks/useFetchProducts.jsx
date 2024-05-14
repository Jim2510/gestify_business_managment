import { useEffect, useState } from "react";

export function useFetchProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error(res.statusText);
      })
      .then((data) => setData(data))
      .catch((error) => console.error(error.message));
  }, []);
  return { data };
}
