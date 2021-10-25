import { all } from "@redux-saga/core/effects";
import { fetchNotesWatcher } from "./noteSaga";


export function* rootWatcher(){
    yield all([fetchNotesWatcher()])
}