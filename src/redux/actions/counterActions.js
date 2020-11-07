import { ActionTypes } from '../actions/index';

export const increaseCount = () => ({
    type : ActionTypes.INCREASE_COUNT,
})

export const decreaseCount = () => ({
    type : ActionTypes.DECREASE_COUNT,
})

