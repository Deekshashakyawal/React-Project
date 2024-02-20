import {Link} from 'react-router-dom';
import { auth } from '../config/firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';

export const Navbar=()=>{
    const [user] =useAuthState(auth);
    const signUserOut= async()=>{
        await signOut(auth);
    };
    return (
        <div>
            <Link to="/">Home</Link>
            <br></br>
            {!user ? (<Link to="/login">Login</Link>):
            (<Link to="/createpost">Create Post</Link>)}

            <div>
                {user && (
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || "error"} height="200" />
                        <br></br>
                        <button onClick={signUserOut}>Sign Out</button>
                    </>
                )}
            </div>
        </div>
    );
};