import {createStore} from 'redux'
import todoreducer from './Reducer/TodoReducer'


const Store =createStore(todoreducer)


export default Store