import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { addNoteActionCreator, fetchNotesActionCreator, postNotesActionCreator } from './store/action-creators/notesActionCreators';
import { INote } from './types/note';

function App() {

  const notes = useTypedSelector(state => state.notes);
  const dispatch = useDispatch();
  console.log(notes)

  useEffect(()=>{
    dispatch(fetchNotesActionCreator());
  },[])

  useEffect(()=>{
      dispatch(postNotesActionCreator(notes))
  },[notes])

  function testNote(){
    let note: INote = {
      id: Date.now(),
      title: 'Test Note 1',
      text: 'text text text text text'
    }

    dispatch(addNoteActionCreator(note))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and SAVE to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={testNote}>add new note</button>
      </header>
    </div>
  );
}

export default App;
