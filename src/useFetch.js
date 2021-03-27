import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(`THIS IS YOUR DATA ${data}`);
            let parsedData = [];
            for (const [key, value] of Object.entries(data)) {
                parsedData.push({key, name: value[0], price: value[1], description: value[2], id: value[3]});
            }
            setisPending(null);
            setData(parsedData);
        })
        .catch(error => console.log(`Message: ${error.message}`));
    }, []);

    return [data, isPending];
}
 
export default useFetch;