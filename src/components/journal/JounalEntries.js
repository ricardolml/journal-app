import { useSelector } from 'react-redux';
import { JournalEntrie } from './JournalEntrie';

export const JounalEntries = () => {
    
    const { notes } = useSelector(state => state.note);
    return (
        <div className="journal__entries">
            {
                notes.map( note => (
                    <JournalEntrie key={ note.id } {...note} />
                ))
            }
        </div>
    )
}
