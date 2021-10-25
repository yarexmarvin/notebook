import React from "react";
import { useHistory } from "react-router"
import { INote } from "../types/note"
import {Stack, Button} from '@chakra-ui/react'


interface INotesList {
    notes: INote[];
    chooseNote: React.Dispatch<React.SetStateAction<INote>>
}

const NoteList:React.FC<INotesList> = ({notes, chooseNote}) => {
     let history = useHistory();

     function showNote(note: INote){
         chooseNote(note)
         history.push('/note')
     }
     const goToForm = () => history.push('/form')
    return <div>
     <Stack direction="column" spacing={4} align="center" >
        {notes.length? notes.map((note, index)=>{
            return <Button 
            width="sm"
            colorScheme="teal" variant="solid"
            onClick={()=>showNote(note)} 
            key={index}>
                {note.title}
            </Button>
        }): 'there is no notes yet'}
    </Stack>
    <button onClick={goToForm}> add a new note</button>
</div>
}

export default NoteList