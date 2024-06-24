import {combineReducers} from 'redux'
import { ADD_TICK, REMOVE_TICK, LOAD_TICKS } from './actions'

const intialTickState = {
    allTicks: [],
    removedTicks: [],
}

const tickReducer = (state = intialTickState, action) => {
    switch (action.type) {
        case ADD_TICK:
            return {
                ...state,
                allTicks: [...state.allTicks, action.tick],
                }
                case REMOVE_TICK:
                    return {
                        ...state,
                        allTicks: state.allTicks.filter(tick => tick.id !== action.id),
                        removedTicks: [...state.removedTicks, action.id],
                        }
                        case LOAD_TICKS:
                            return {
                                ...state,
                                allTicks: action.ticks,
                                }
                                default:
                                    return state
                                    }
                                    

}
export default combineReducers({ tickReducer })