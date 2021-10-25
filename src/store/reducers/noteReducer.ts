import { INote, noteAction, noteActionTypes } from "../../types/note"



export const initialNoteState: INote[] = [
    {
        id: 0,
        title: 'Untitled',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed mi aliquet, rutrum ligula ac, vestibulum enim. Fusce in euismod odio. Vivamus pulvinar tellus at pulvinar rhoncus. Maecenas sagittis suscipit pellentesque. Fusce aliquet luctus elementum. Nunc interdum rutrum ex eget congue. Donec non magna vitae ipsum condimentum hendrerit ac vitae.'
    },
]

const noteReducer = (state: INote[] = [], action: noteAction): INote[] => {
    switch (action.type) {
        case noteActionTypes.SET_NOTES:
            return [...state, ...action.payload];
        case noteActionTypes.ADD_NOTE:
            return [...state, action.payload];
        case noteActionTypes.UPDATE_NOTE:
            return [...state.slice(0, action.payload.index), action.payload.note, ...state.slice(action.payload.index + 1)];
        case noteActionTypes.DELETE_NOTE:
            return [...state.filter( note => note.id !== action.payload)]
        case noteActionTypes.CLEAR_NOTELIST:
            return []
        default:
            return state
    }
}

export default noteReducer