import {types} from '../types/types'

const detailAction = (detail) =>{
    return {
        type: types.detail,
        payload:{
        detail}
    }
}
export default detailAction;