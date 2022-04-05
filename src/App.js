import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [users, setUsers] = useState({})
  const provider = new GoogleAuthProvider();

  const handleToSingIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUsers(user)
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleToSingOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {
        setUsers({});
      });
  }

  return (
    <div className="App">
      <div className="users-container">
        <img style={{ 'width': '100px', 'margin-top': '30px' }} src={users.photoURL} alt="" />
        <h3>Name: {users.displayName}</h3>
        <p>E-mail: {users.email}</p>
        {users.email ?
          <button onClick={handleToSingOut}>Sing out</button> :
          <button onClick={handleToSingIn}>Google sing in</button>
        }
      </div>
    </div>
  );
}

export default App;
