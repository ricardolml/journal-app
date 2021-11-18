import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.note);
    
    const noteDate = moment(active.date);
    const handleSave = () => {
        dispatch( startSaveNote( active ) ); 
    }

    const handlePictureClic = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if( file ){
            dispatch( startUploading(file)  );
        }
    }

    return (
        <div className="notes__appBar">
            <span>{ noteDate.format('MMMM Do YYYY') }</span>
            <input id="fileSelector" type='file' style={ { display: 'none' } } onChange={handleFileChange} name='file' />
            <div>
                <button className="btn" onClick={handlePictureClic}  >
                    Picture
                </button>
                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
