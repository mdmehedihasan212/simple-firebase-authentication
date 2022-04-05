import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [users, setUsers] = useState({})
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const googleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUsers(user)
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const githubSingIn = () => {
    signInWithPopup(auth, githubProvider)
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
        <img style={{ 'width': '100px', 'marginTop': '30px' }} src={users.photoURL} alt="" />
        <h3>Name: {users.displayName}</h3>
        <p>E-mail: {users.email ? users.email : 'Undefine'}</p>
        {users.email ?
          <button onClick={handleToSingOut}>Sing out</button> :
          <>
            <button onClick={googleSingIn}>Google sing in</button>
            <button onClick={githubSingIn}>Github log in</button>
          </>
        }
      </div>
    </div>
  );
}

export default App;
