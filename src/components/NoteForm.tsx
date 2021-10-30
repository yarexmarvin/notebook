import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addNoteActionCreator } from "../store/action-creators/notesActionCreators";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { ArrowBackIcon} from "@chakra-ui/icons";

import {
    Input,
    Textarea,
    Container,
    Heading,
    Flex,
    Button,
    IconButton,
} from "@chakra-ui/react"



const NoteForm = () => {

    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    const dispatch = useDispatch();

    const history = useHistory();

    function createNote() {

        if (title && text) {
            dispatch(addNoteActionCreator({
                id: Date.now(),
                title: title,
                text: text,
            }))


            setTitle('')
            setText('')

            history.push('/')
        }


    }


    return <Container>
        <Heading color="#285E61" as="h1" size="lg" style={{ textAlign: 'left', margin: '5vh 0 3vh' }} >Add a Note!</Heading>
        <Flex justify='space-around' alignItems='flex-start'>
            <Heading color="#285E61" as="h3" size="md" style={{ textAlign: 'left', width: ' 20vh' }}>Title</Heading>
            <Input value={title} onChange={e => setTitle(e.target.value)} />
        </Flex>

        <Flex margin="1vh 0" justify='space-around'>
            <Heading color="#285E61" as="h3" size="md" style={{ textAlign: 'left', width: ' 20vh' }} >Text</Heading>
            <Textarea resize="vertical" value={text} onChange={e => setText(e.target.value)} />
        </Flex>

        <Flex  width="100%" justifyContent="space-between" margin="1vh 0">
            <IconButton
                aria-label="back to the note list"
                colorScheme="teal"
                icon={<ArrowBackIcon />}
                onClick={() => history.push('/')}
            />
            <Button
                onClick={createNote}
                rightIcon={<PlusSquareIcon />}
            >
                create a note
            </Button>
        </Flex>
    </Container>
}

export default NoteForm