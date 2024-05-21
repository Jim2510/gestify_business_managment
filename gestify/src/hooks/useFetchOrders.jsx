import { useEffect, useState } from "react"

export function useFetchOrders() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/api/orders')
    .then(response => {
        setLoading(false);
        if(response.ok) {
            return response.json()
        }else {
            throw new Error(response.statusText);
        }
    }).then(order => {
        setData(order)
        console.log(order)
    }).catch(error => {
        console.log(error);
    })

    }, []);

return {data, loading};
}