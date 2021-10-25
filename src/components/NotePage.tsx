import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router"
import { updateNoteActionCreator } from "../store/action-creators/notesActionCreators";
import { INote } from "../types/note"

interface INotePage {
    note: INote;
    notes: INote[];
    updateNote: React.Dispatch<React.SetStateAction<INote>>
}

const NotePage: React.FC<INotePage> = ({ note, notes, updateNote }) => {

    const [edit, setEdit] = useState('');
    const [value, setValue] = useState('')


    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])


    const editForm = <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} onBlur={saveChanges} />
        <button onClick={saveChanges}>save changes</button>
    </div>

    function saveChanges() {

        let payload = {
            note: { ...note, [edit]: value },
            index: notes.findIndex(x => x.id === note.id)
        }

        dispatch(updateNoteActionCreator(payload));

        updateNote({ ...note, [edit]: value })

        setEdit('')
        setValue('')

    }

    return <div>

        {note ?
            <div>
                {/* header */}
                < div >
                    {
                        edit === 'title' ? editForm
                            :
                            <div onClick={() => { setEdit('title'); setValue(note.title) }}>
                                {note.title}
                            </div>

                    }

                    :
                </div>

                {/* body  */}
                <div>
                    {edit === 'text' ? editForm
                        :
                        <div onClick={() => { setEdit('text'); setValue(note.text) }}>
                            {note.text}
                        </div>
                    }
                </div>
            </div>
            : 'there is no note'}
    </div >
}

export default NotePage