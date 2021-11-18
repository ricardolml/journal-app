import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "@firebase/auth";
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

import Swal from 'sweetalert2';
import { noteLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch( startLoading() );
        signInWithEmailAndPassword( auth, email, password)
            .then( ({ user }) => {
                dispatch( login(user.uid, user.displayName));
                dispatch( finishLoading() );
            }).catch(e => {
                dispatch( finishLoading() );
                Swal.fire('Error' , e.message , 'error');
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {

                await updateProfile(user, { displayName: name });
                // console.log(user);
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch(e => {
                console.log(e)
            });
    }
}

export const startGoogle = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const startLogout = () =>{

    return async( dispatch ) => {
        const auth = getAuth();
        await auth.signOut();
        dispatch( logout() );
        dispatch( noteLogout() );
    }

}

export const logout = () => ({
    type : types.logout
})
