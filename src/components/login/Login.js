import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";
import { useState } from 'react';
import { Context} from '../../App';
import { useContext } from 'react';

const app = initializeApp(firebaseConfig);


function Login() {

    const [loggedInUser,setLoggedInUser]=useContext(Context);

  const [login,setLogin]=useState(false);

  const [userInfo,setUserInfo]=useState({
    name:'',
    email:'',
    password:'',
    errorMsg:'',
    success:false,
    
  })
  const [user,setUser]=useState({
    isSignedIn: false,
    name:'',
    email:'',
    imgUrl:'',
    
  })
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const signOutHandler=()=>{

  signOut(auth).then((res) => {
    console.log(res)
    // Sign-out successful.
    setUser({
      isSignedIn:false,
      name: '',
      email: '',
      
    });

  }).catch((error) => {
    // An error happened.
  });
}

  const buttonHandler=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const user = result.user;
      const {email, displayName}=result.user;
      console.log(result.user)
      setUser({
        isSignedIn:true,
        name: displayName,
        email: email,
        
      });
      
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage)
      // ...
    })

  }

  const handleChange=(event)=> {
    console.log(event.target.name, event.target.value);

    let newUser={...userInfo}
    newUser[event.target.name]=event.target.value;
    setUserInfo(newUser);
  }

  const handleSubmit=(event)=> {
    
    event.preventDefault();
    if(userInfo.email && userInfo.password)
    {
      const auth = getAuth();

      //Log in
      if(!login)
      {

        createUserWithEmailAndPassword(auth, userInfo.email,userInfo.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          let varUser={...userInfo};
          varUser.success=true;
          varUser.errorMsg='User created successfully';
          setUserInfo(varUser);
          setLoggedInUser(user)
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      
          let varUser={...userInfo};
          varUser.success=false;
          varUser.errorMsg=errorMessage;
          setUserInfo(varUser);
      
          console.log(errorMessage);
      
          // ..
        });

      }

      else{

        signInWithEmailAndPassword(auth, userInfo.email,userInfo.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          let varUser={...userInfo};
          varUser.success=true;
          varUser.errorMsg='Log in successful';
          setUserInfo(varUser);


          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          let varUser={...userInfo};
          varUser.success=false;
          varUser.errorMsg=errorMessage;
          setUserInfo(varUser);

        });
      }
    }
  }
const checkBox=()=>{
  console.log('check box');
  setLogin(!login);

}

const fbprovider = new FacebookAuthProvider();
const fbauth = getAuth(app);


const fbSignInHandler=()=>{

signInWithPopup(fbauth, fbprovider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log('user: ',user);
   
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errormessage: ',errorMessage);
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

  });

}
  
  return (
    <div className="App">
        <div>Email : {loggedInUser.email}</div>
      {
        !user.isSignedIn ? <button onClick={()=>buttonHandler()} >Sign In</button>:
        <button onClick={()=>signOutHandler()} >Sign Out</button>
      }

<button  onClick={()=>fbSignInHandler() } >FB log in</button>
      
      {
        user.isSignedIn && 
        <>
        <div>{user.name}</div>
        <div>{user.email}</div>
        
        </> 
      }

      <h1>Own Authentication</h1>

      <form onSubmit={handleSubmit}>

          {/* // toggle */}

<div className="formCheck">
    <input type="checkbox" onChange={()=>checkBox()} className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Log in</label>
  </div>

        {
          !login && 
          <>
          <label>
          Name:<br/>
          <input type="text" name='name'  onChange={handleChange} />
        </label><br/>
          </>

          }
        
    
        <label>
          email:<br/>
          <input type="text" name='email' onChange={handleChange} />
        </label>
        <br/>

        <label>
          password:<br/>
          <input type="text" name='password' onChange={handleChange} />
        </label>
        <br/>



        <input type="submit" name='sub' value="Sbmit" />


      </form>

      {
        userInfo.success && userInfo.errorMsg
      }
      {
        !userInfo.success && userInfo.errorMsg
      }
      


    </div>
  );
}

export default Login;
