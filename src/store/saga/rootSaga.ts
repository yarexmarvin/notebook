import { all } from "@redux-saga/core/effects";
import { fetchNotesWatcher } from "./notes/noteGetSaga";
import { setNotesWatcher } from "./notes/notesSetSaga";


export function* rootWatcher(){
    yield all([fetchNotesWatcher(), setNotesWatcher()])
}