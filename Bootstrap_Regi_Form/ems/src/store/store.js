import counterreducer from "../reducer/counterreducer";
import {createStore} from 'redux';


const store = createStore(counterreducer);

export default store;