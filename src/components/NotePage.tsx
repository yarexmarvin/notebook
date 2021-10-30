import React, { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router"
import { deleteNoteActionCreator, updateNoteActionCreator } from "../store/action-creators/notesActionCreators";
import { INote } from "../types/note"
import { DeleteIcon, ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";

import {
    Input,
    Textarea,
    Container,
    Flex,
    Heading,
    Text,
    Box,
    Button,
    IconButton
} from '@chakra-ui/react'


interface INotePage {
    note: INote;
    notes: INote[];
    updateNote: React.Dispatch<React.SetStateAction<INote>>
}

const NotePage: React.FC<INotePage> = ({ note, notes, updateNote }) => {

    const [edit, setEdit] = useState('');
    const [value, setValue] = useState('')
    const [height, setHeight] = useState(0)

    const textRef = useRef<HTMLTextAreaElement>(null);

    const history = useHistory();
    const dispatch = useDispatch();

    function deleteNote() {
        dispatch(deleteNoteActionCreator(note.id))
        history.push('/')
    }

    useEffect(()=>{
        if(edit === 'text'){
            getHeight();
        }
    },[edit])


    const editTitle = <Flex height="10vh" direction='row' alignItems="center">
        <Input
            value={value}
            style={{
                margin: '0 2vw 0 0'
            }}
            onChange={(e) => setValue(e.target.value)}
            onBlur={saveChanges} />
        <Button
            colorScheme="teal"
            variant="outline"
            rightIcon={<CheckIcon />}
            onClick={saveChanges}>
            save
        </Button>
    </Flex>
    const editText = <Flex direction='column'>
        <Textarea
            style={{minHeight: height + 'px'}}
            ref={textRef as React.RefObject<HTMLTextAreaElement>}
            value={value}
            resize="vertical"
            onChange={(e) => setValue(e.target.value)}
            onBlur={saveChanges} />
        <Button
            margin="1vh 0"
            colorScheme="teal"
            variant="outline"
            rightIcon={<CheckIcon />}
            onClick={saveChanges}>
            save
        </Button>
    </Flex>

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

    function getHeight():void{

        if(textRef.current){
            setHeight(textRef.current.scrollHeight + 2)

        }
    }

    console.log(height)
    return <Container>
        {note ?
            <Flex direction="column">
                {/* header */}
                < Box display="flex" justifyContent="flex-start" >
                    {
                        edit === 'title' ? editTitle
                            :
                            <Heading
                                color="#285E61"
                                as="h2"
                                size="xl"
                                style={{
                                    margin: '5vh 0 3vh'
                                }}
                                onClick={() => {
                                    setEdit('title');
                                    setValue(note.title)
                                }}>
                                {note.title}
                            </Heading>

                    }
                </Box>

                {/* body  */}
                <div>
                    {edit === 'text' ? editText
                        :
                        <Text
                            id='NoteBody'
                            
                            onLoad={()=>getHeight()}
                            color="#285E61"
                            onClick={() => {
                                setEdit('text');
                                setValue(note.text)
                            }}>
                            {note.text}
                        </Text>
                    }
                </div>
                <Flex justify="space-between" margin="2vh 0">
                    <IconButton
                        aria-label="back to the note list"
                        colorScheme="teal"
                        icon={<ArrowBackIcon />}
                        onClick={() => history.push('/')}
                    />
                    <IconButton
                        aria-label="delete note"
                        variant="outline"
                        colorScheme="teal"
                        icon={<DeleteIcon />}
                        onClick={deleteNote}
                    />
                </Flex>
            </Flex>
            : 'there is no note'}
    </Container >
}

export default NotePage