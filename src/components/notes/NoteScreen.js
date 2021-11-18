import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector(state => state.note);

    const [formValues, handleChangeInput , reset ] = useForm(note);

    const activeId = useRef(note.id)

    useEffect(() => {
        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id;
        }
    }, [ note , reset ]);

    useEffect(() => {
        dispatch( activeNote( formValues.id , { ...formValues } ) );
    }, [ formValues, dispatch ])

    const { body, title, id } = formValues;

    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input name='title' onChange={handleChangeInput} value={title}  type="text" placeholder="Some awesome tittle" className="notes__title-input" autoComplete="off" />

                <textarea name='body' onChange={handleChangeInput} value={body} cols="30" rows="10" placeholder="What happened today" className="notes__textarea"></textarea>

                {
                    (note.url)
                    &&
                    (
                        <div className="notes__image">
                            <img src={note.url} alt="Imagen" />
                        </div>
                    )
                }

            </div>

            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
        </div>
    )
}
