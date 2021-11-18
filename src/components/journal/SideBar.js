import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNotes } from '../../actions/notes';
import { JounalEntries } from './JounalEntries';

export const SideBar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const handleAddNew = () =>{
        dispatch( startNewNotes() );
    }

    return (
        <aside className="journal__sidebar" >
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> { name } </span>
                </h3>

                <button className="btn" onClick={handleLogout} >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry" onClick={handleAddNew} >
                <li className="far fa-calendar-plus fa-5x" ></li>
                <p className="mt-5" >New Entry</p>
            </div>

            <JounalEntries />
        </aside>
    )
}
