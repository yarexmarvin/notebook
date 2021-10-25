import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { addNoteActionCreator, fetchNotesActionCreator, postNotesActionCreator } from './store/action-creators/notesActionCreators';
import { INote } from './types/note';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NoteList from './components/NotesList';
import NotePage from './components/NotePage';

import { ChakraProvider } from "@chakra-ui/react"

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
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={'/'} exact>
              <ChakraProvider>
                <NoteList notes={notes} chooseNote={setNote} />
              </ChakraProvider>
            </Route>
            <Route path={'/note'} exact>
              <NotePage note={note} notes={notes} updateNote={setNote}/>
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
