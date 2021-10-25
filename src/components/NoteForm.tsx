import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addNoteActionCreator } from "../store/action-creators/notesActionCreators";



const NoteForm = () => {

    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    const dispatch = useDispatch();

    const history = useHistory();

    function createNote() {

        dispatch(addNoteActionCreator({
            id: Date.now(),
            title: title,
            text: text,
        }))


        setTitle('')
        setText('')

        history.push('/')

    }


    return <div>
        <div>
            <span>Title</span>
            <input value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div>
            <span>Text</span>
            <input value={text} onChange={e => setText(e.target.value)} />
        </div>

        <button onClick={createNote}>create note</button>

    </div>
}

export default NoteForm