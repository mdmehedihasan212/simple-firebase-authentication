import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleToSingIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  return (
    <div className="App">
      <button onClick={handleToSingIn}>Google sing in</button>
    </div>
  );
}

export default App;
