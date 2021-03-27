const MarketLists = (props) => {
    function hire(e) {
        e.preventDefault();
        let hiredKey = e.target.parentElement.value;

        for (const [key, value] of Object.entries(props.ninjas)) {
            //console.log(`CURRID: ${value.id} CURRTYPEID: ${typeof value.id}\nTARGETID: ${hiredKey} TARGETTYPE: ${typeof hiredKey}`);
            if (value.id == hiredKey) {
                fetch('https://spaceninjas-c47a5-default-rtdb.europe-west1.firebasedatabase.app/ninjas/' + value.key + '.json', {
                    method: 'DELETE'
                }).then(() => window.location.reload()).catch(error => {
                    console.log(error);
                });
            }
        }
    }

    return ( 
        <div className="offers">
            <label>Offers:</label>
            <ul>
                {props.ninjas.map(ninja => (
                    <li key={ninja.id} value={Math.trunc(ninja.id)}>
                        <h2>{ninja.name}, {ninja.price}$</h2>
                        <p>{ninja.description}</p>
                        <button onClick={hire}>Hire</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default MarketLists;