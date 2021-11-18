import { getAuth } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged( async (user) => {
            if( user?.uid ){
                dispatch( login( user.uid , user.displayName ) );
                setIsLoggedIn(true);
                dispatch( startLoadingNotes(user.uid) );
                
            }else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [ dispatch, checking ] );

    if ( checking ){
        return ( <h1>Waite...</h1> )
    }

    return (
        <Router>
            <div>

                <Switch>

                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticate={isLoggedIn} />
                    <PrivateRouter exact path="/" component={ JournalScreen } isAuthenticate={isLoggedIn} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
