import React from "react";
import { useHistory } from "react-router"
import { INote } from "../types/note"
import {Stack, Button} from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { deleteNoteActionCreator } from "../store/action-creators/notesActionCreators";


interface INotesList {
    notes: INote[];
    chooseNote: React.Dispatch<React.SetStateAction<INote>>
}

const NoteList:React.FC<INotesList> = ({notes, chooseNote}) => {
     let history = useHistory();
     let dispatch = useDispatch();

     function showNote(note: INote){
         chooseNote(note)
         history.push('/note')
     }
     const goToForm = () => history.push('/form');
     
    return <div>
     <Stack direction="column" spacing={4} align="center" >
        {notes.length? notes.map((note, index)=>{
            return <div><Button 
            width="sm"
            colorScheme="teal" variant="solid"
            onClick={()=>showNote(note)} 
            key={index}>
                {note.title}
            </Button>
            <Button onClick={()=>dispatch(deleteNoteActionCreator(note.id))}>
                delete
            </Button>
            </div>
        }): 'there is no notes yet'}
    </Stack>
    <button onClick={goToForm}> add a new note</button>
</div>
}

export default NoteList