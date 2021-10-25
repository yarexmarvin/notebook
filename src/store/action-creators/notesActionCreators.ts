import { INote, noteActionTypes } from "../../types/note";

export const fetchNotesActionCreator = () => ({type: noteActionTypes.FETCH_NOTES})
export const setNotesActionCreator = (payload: INote[]) => ({type: noteActionTypes.SET_NOTES, payload: payload})