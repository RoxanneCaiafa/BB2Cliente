import {types} from '../types/types'

const findCurrentItem = id =>{
    return {
        type: types.currentItem,
        payload:id,
    }
}
export default findCurrentItem;