import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { addNoteActionCreator, fetchNotesActionCreator, postNotesActionCreator } from './store/action-creators/notesActionCreators';
import { INote } from './types/note';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import NoteList from './components/NotesList';
import NotePage from './components/NotePage';

import { ChakraProvider } from "@chakra-ui/react"
import NoteForm from './components/NoteForm';

function App() {

  const notes = useTypedSelector(state => state.notes);
  const dispatch = useDispatch();
  console.log(notes)

  useEffect(() => {
    dispatch(fetchNotesActionCreator());
  }, [])

  useEffect(() => {
    dispatch(postNotesActionCreator(notes))
  }, [notes])

  const [note, setNote] = useState<INote>(notes[0]);




  return (
    <div className="App">
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <div>
          <Switch>
            <Route path={'/'} exact>
              <ChakraProvider>
                <NoteList notes={notes} chooseNote={setNote} />
              </ChakraProvider>
            </Route>
            <Route path={'/note'} exact>
              <ChakraProvider>
                <NotePage note={note} notes={notes} updateNote={setNote} />
              </ChakraProvider>
            </Route>
            <Route path={'/form'} exact>
              <ChakraProvider>
                <NoteForm />
              </ChakraProvider>
            </Route>
          </Switch>
        </div>
      {/* </BrowserRouter> */}

    </div>
  );
}

export default App;
