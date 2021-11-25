import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const initialState = {
    board: {},
    difficult: "",
    status: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_BOARD" :
            return { ...state, board: action.board }
        case "SET_DUPLICATE_BOARD" :
            return { ...state, board: action.board }
        case "SET_STATUS" :
            return { ...state, status: action.payload }
        case "SOLVED_BOARD" :
            return { ...state, board: action.board }
        case "SET_DIFFICULT" :
            return { ...state, difficult: action.data}
        case "SET_ALLDATA" :
            return { ...state, initialState: action.data}
        default :
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store