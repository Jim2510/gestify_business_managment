import { useEffect, useState } from "react"

export function useFetchData1Sales() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/api/piedata')
    .then(response => {
        console.log(response)
        setLoading(false);
        if(response.ok) {
            return response.json()
        }else {
            throw new Error(response.statusText);
        }
    }).then(order => {
        setData(order)
    }).catch(error => {
        console.log(error);
    })

    }, []);

return {data, loading};
}