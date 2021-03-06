import { INote, noteAction, noteActionTypes, updateNoteAction, UpdateNotePayload } from "../../types/note";

export const fetchNotesActionCreator = () => ({type: noteActionTypes.FETCH_NOTES});
export const postNotesActionCreator = (payload: INote[]) => ({type: noteActionTypes.SAVE_NOTES, payload: payload})
export const setNotesActionCreator = (payload: INote[]) => ({type: noteActionTypes.SET_NOTES, payload: payload})
export const addNoteActionCreator = (payload: INote) => ({type: noteActionTypes.ADD_NOTE, payload: payload})
export const updateNoteActionCreator = (payload: UpdateNotePayload) => ({type: noteActionTypes.UPDATE_NOTE, payload: payload})
export const deleteNoteActionCreator = (payload: number) => ({type: noteActionTypes.DELETE_NOTE, payload:payload})