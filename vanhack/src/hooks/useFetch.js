import { useEffect, useState } from "react";


export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        async function loadData(){
            setIsLoading(true)
            try{
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }catch(e){
                console.log(e);
            }
            setIsLoading(false);
        }
        loadData();

    }, [url])
    return {
        data,
        isLoading,
    }
}