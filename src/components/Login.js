import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function login(e) {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
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
            <input className="passField" type="textfield" required value={password} onChange={(e) => {
                setPassword(e.target.value);
                }} />
            <button onClick={login}>Login!</button>
            <Link to="/register">Don't have an account?</Link>
        </div>
    );
}
 
export default Login;