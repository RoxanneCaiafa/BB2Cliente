import {types} from '../types/types'

 const itemList =(items) =>{
    
    return{
        type: types.itemList,
        payload: {
            items,
        }
    }
}
export default itemList;