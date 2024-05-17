import { useEffect, useState } from "react";

export function useFetchCollections() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:3000/api/collections")
      .then((res) => {
        setIsLoading(false)
        if (res.ok) {
          return res.json();
        } else throw new Error(res.statusText);
      })
      .then((data) => setData(data[0]))
      .catch((error) => console.error(error.message));
  }, []);
  return { data,isLoading};
}
