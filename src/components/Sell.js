import { useState } from "react";
import { useHistory } from "react-router-dom";

const Sell = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    function sendOffer(e) {
        e.preventDefault();

        fetch('https://spaceninjas-c47a5-default-rtdb.europe-west1.firebasedatabase.app/ninjas.json', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify([title, price, description, Math.trunc(Math.random() * (99999 - 6) + 6)])
        })
        .then(() => {
            history.push('/');
        }); 
    }

    return (
        <div className="makeOffer">
            <label>Name:</label>
            <input type="textfield" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Price:</label>
            <input type="textfield" required value={price} onChange={(e) => setPrice(e.target.value)} />
            <label>Description:</label>
            <input type="textfield" required value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={sendOffer}>Make Offer!</button>
        </div>
    );
}
 
export default Sell;