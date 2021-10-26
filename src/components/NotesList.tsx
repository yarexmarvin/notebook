import React from "react";
import { useHistory } from "react-router"
import { INote } from "../types/note"
import { Stack, Button, IconButton, Heading } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Container, Box, Flex } from "@chakra-ui/layout";
import { DeleteIcon ,PlusSquareIcon } from '@chakra-ui/icons'
import { useDispatch } from "react-redux";
import { deleteNoteActionCreator } from "../store/action-creators/notesActionCreators";


interface INotesList {
    notes: INote[];
    chooseNote: React.Dispatch<React.SetStateAction<INote>>
}

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "480px",
    lg: "640px",
    xl: "1280",
    "2xl": "1500",
})

const NoteList: React.FC<INotesList> = ({ notes, chooseNote }) => {
    let history = useHistory();
    let dispatch = useDispatch();

    function showNote(note: INote) {
        chooseNote(note)
        history.push('/note')
    }
    const goToForm = () => history.push('/form');

    return <Container width="100%" minHeight="100%" boxSizing="border-box">
        <Heading color="#285E61" as="h1" size="4xl" style={{ textAlign: 'left', margin: '5vh 0 3vh' }} >Notes</Heading>
        <Stack direction="column" spacing={2} align="center" >
            {notes.length ? notes.map((note, index) => {
                return <Flex justifyContent="flex-start" width="100%">
                    <Box
                        width="100%"
                        height="10"
                        bg="teal.500"
                        textAlign="left"
                        display="flex"
                        alignItems="center"
                        color="white"
                        borderRadius="10px"
                        padding="0 6vw"
                        cursor="pointer"
                        _hover={{ backgroundColor: 'rgba(0, 128, 128, 0.4)', color: 'teal.500' }}
                        transition="all 0.15s ease"
                        onClick={() => showNote(note)}
                        key={index}>
                        <Heading as="h5" isTruncated size="md">{note.title}</Heading>
                    </Box>
                </Flex>
            }) : 'there is no notes yet'}
        </Stack>
        <Box 
           
           display="flex"
           justifyContent="flex-end"
           style={{
               margin: '3vh 0',
            }}
           >
            <Button
                colorScheme="teal"
                variant="outline"
                rightIcon={<PlusSquareIcon/>}
                onClick={goToForm}>
                Add
            </Button>
        </Box>
    </Container>
}

export default NoteList