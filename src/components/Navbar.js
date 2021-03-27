import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { useState } from "react";

const Navbar = () => {

    const user = firebase.auth().currentUser;
    const [signedIn, setSignedIn] = useState('');
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setSignedIn(true);
        } else {
          setSignedIn(false);
        }
      });

    function logout() {
        firebase.auth().signOut().then(() => {
            console.log('Logout was successful');
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Code: \n${errorCode} \nMessage: ${errorMessage}`);
          });
    }

    return ( 
        <div className="navbar">
            <h2>SpaceNinjas</h2>
            <Link to="/">Market</Link>
            <Link to="/sell">Sell</Link>
            {!user && <Link to="/login">Login</Link>}
            {user && <Link to="/login" onClick={logout}>Logout</Link>}
        </div>
    );
}
 
export default Navbar;