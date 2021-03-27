import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function register(e) {
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Signed in 
            // var user = userCredential.user;
            history.push('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Code: \n${errorCode} \nMessage: ${errorMessage}`);
        });
    }

    return ( 
        <div className="auth">
            <label>Email</label>
            <input type="textfield" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="textfield" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={register}>Register!</button>
        </div>
    );
}
 
export default Register;