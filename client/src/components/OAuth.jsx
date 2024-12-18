import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import {app} from '../firebase.js';
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../redux/user/userSlice.js';
import {useNavigate} from 'react-router-dom';

export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const handleGoogleClick = async() => {
        try{
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
          const result =  await signInWithPopup(auth, provider);
          // console.log(result);
          const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
          });
          const data = await res.json();
          // console.log(data);
          dispatch(signInSuccess(data));
          document.getElementById('auth-button').addEventListener('click', () => {
            authWithGoogle();
          });
          navigate('/');
        }catch(error) {
            console.log("could not login with google");
        }
    }

  return (
    <button type='button' id="auth-button" onClick={handleGoogleClick} className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>
      Continue with google
    </button>
  )
}
