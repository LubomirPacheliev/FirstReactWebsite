import useFetch from "../useFetch";
import MarketLists from "./MarketLists";

const Market = () => {
    const [ninjas, isPending] = useFetch('https://spaceninjas-c47a5-default-rtdb.europe-west1.firebasedatabase.app/ninjas.json');

    console.log(ninjas);

    return (
        <div>
            {isPending && (<div>LOADING</div>)}
            {ninjas && <MarketLists ninjas={ninjas}/> }
        </div>
    );
}
 
export default Market;