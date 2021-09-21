import {INCREASE_COUNTER,DECREASE_COUNTER,RESET_COUNTER} from './ActionTypes';

//arttir
export const increase = ()=>{
    return {
        type: INCREASE_COUNTER,
    }
}
//azalt
export const decrease = ()=>{
    return {
        type: DECREASE_COUNTER,
    }
}
//sifirla:)
export const reset = ()=>{
    return {
        type: RESET_COUNTER,payload:0
    }
}