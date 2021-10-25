import { call, takeEvery } from "@redux-saga/core/effects";
import { noteActionTypes, SaveNotesAction } from "../../../types/note";

 function* setNotes(action: SaveNotesAction){
    console.log('set saga notes =>', action)
    try {
        let data = JSON.stringify(action.payload);
        return localStorage.setItem('notes', data)
    } catch(err: any) {
        throw new Error(err)
    }
}

function* setNotesWorker(action: SaveNotesAction){
    const result:Response = yield call(setNotes, action);
    console.log('changes saved in localStorage')
}

export function* setNotesWatcher(){
    yield takeEvery(noteActionTypes.SAVE_NOTES, setNotesWorker)
}