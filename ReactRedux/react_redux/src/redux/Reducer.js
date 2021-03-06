import React from 'react'
import {INCREASE_COUNTER,DECREASE_COUNTER,RESET_COUNTER} from './ActionTypes'

export default function Reducer(state,action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            state.counter = state.counter + 1;
            return{...state}
        case DECREASE_COUNTER:
            state.counter = state.counter - 1;
            return{...state}
        case RESET_COUNTER:
            state.counter = action.payload;
            return{...state}

        default:
            return state
            
    }
}
