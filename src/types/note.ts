

export interface INote {
    id: number;
    title: string;
    text: string;
}

export enum noteActionTypes {
    FETCH_NOTES = 'FETCH_NOTES', 
    SAVE_NOTES = 'SAVE_NOTES',
    SET_NOTES = 'SET_NOTES',
    ADD_NOTE = 'ADD_NOTE',
    UPDATE_NOTE = 'UPDATE_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    CLEAR_NOTELIST = 'CLEAR_NOTELIST'
}

interface FetchNotesAction {
    type: noteActionTypes.FETCH_NOTES
}
export interface SaveNotesAction {
    type: noteActionTypes.SAVE_NOTES;
    payload: INote[];
}

interface setNotesAction {
    type: noteActionTypes.SET_NOTES;
    payload: INote[];
}
interface addNoteAction {
    type: noteActionTypes.ADD_NOTE;
    payload: INote;
}
interface updateNoteAction {
    type: noteActionTypes.UPDATE_NOTE;
    payload: UpdateNotePayload
}
interface deleteNoteAction {
    type: noteActionTypes.DELETE_NOTE;
    payload: number;
}
interface clearNoteListAction {
    type: noteActionTypes.CLEAR_NOTELIST;
}

type UpdateNotePayload = {
    index: number;
    note: INote
}

export type noteAction = setNotesAction
| addNoteAction
| updateNoteAction
| deleteNoteAction
| clearNoteListAction