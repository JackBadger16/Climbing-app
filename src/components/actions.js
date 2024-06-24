export const ADD_TICK ='ADD_TICK';
export const REMOVE_TICK ='REMOVE_TICK';
export const LOAD_TICKS = 'LOAD_TICK';

export function addTick(tick) {
    return {
        type: ADD_TICK,
        tick
        }
        }
        export function removeTick(tickId) {
            return {
                type: REMOVE_TICK,
                tickId
                }
                }
                export function loadTicks(ticks) {
                    return {
                        type: LOAD_TICKS,
                        ticks
                        }
                        
}