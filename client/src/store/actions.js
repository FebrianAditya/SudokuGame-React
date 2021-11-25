const axios = require("axios")

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

export function geBoard(difficult) {
    return (dispatch, getState) => {
        // console.log(difficult, " ===> difficult dari action")
        fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficult}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data, " ===> ini di action medium")
                dispatch({
                    type: "GET_BOARD",
                    board: data.board
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function setDuplicateBox(data) {
    return (dispatch, getState) => {
        // console.log(data, "==> Data Masuk")
        dispatch({
            type: "SET_DUPLICATE_BOARD",
            board: data
        })
    }
}

export function validateInputData(board) {
    const data = {board: board}
    return (dispatch, getState) => {
        // console.log(data, "==> dari action")
            axios({ // pake axios, karena kalau pake fetch data nya ga kebaca. Padahal udh dikasih headers json
                url: "https://sugoku.herokuapp.com/validate",
                method: "POST",
                data: encodeParams(data)
            })
                .then(({data}) => {
                    console.log(data, "Ini status yang di action validate")
    
                    dispatch({
                        type: "SET_STATUS",
                        payload: data.status
                    })
                })
                .catch(err => {
                    console.log(err, "trs");
                })
    }
}

export function solve(board) {
    const data = {board: board}
    return (dispatch, getState) => {
        axios({ // pake axios, karena kalau pake fetch data nya ga kebaca. Padahal udh dikasih headers json
            url: "https://sugoku.herokuapp.com/solve",
            method: "POST",
            data: encodeParams(data)
        })
            .then(({data}) => {
                // console.log(data.solution, "ini value di action solved")
                // dispatch(setBoard(data.solution))
                dispatch({
                    type: "SOLVED_BOARD",
                    board: data.solution
                })
            })
            .catch(err => {
                console.log(err, "trs");
            })
    }
}

export function setDifficult(difficult) {
    return(dispatch, getState) => {
        console.log(difficult, "function difficult di actio")
        dispatch({
            type: "SET_DIFFICULT",
            data: difficult
        })
    }
}