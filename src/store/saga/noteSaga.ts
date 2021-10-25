import {call,put, takeEvery} from 'redux-saga/effects'
import { INote, noteActionTypes } from '../../types/note';
import { setNotesActionCreator } from '../action-creators/notesActionCreators';
import { initialNoteState } from "../reducers/noteReducer";


const fetchNotesFromStorage = () => JSON.parse(localStorage.getItem('notes') || JSON.stringify(initialNoteState));

function* fetchNotesWorker(){
    const data: INote[] = yield call(fetchNotesFromStorage);
    yield put(setNotesActionCreator(data));
    console.log('notes fetched')
}

export function* fetchNotesWatcher(){
    yield takeEvery(noteActionTypes.FETCH_NOTES, fetchNotesWorker)
}