import React, {useReducer} from "react";
import {counterReducer} from "../../reducers";
import ACTION_TYPES from "../../settings/constants";

const CounterWithReducer = () => {
    //const [format, setFormat] = useState('dddd');
    const [{value,step}, dispatch] = useReducer(counterReducer, {value: 0,step: 1});
    const inc = () => {
        dispatch({type: ACTION_TYPES.INCREMENT});
    };
    const dec = () => {
        dispatch({type: ACTION_TYPES.DECREMENT});
    };
    const updateStep = ({target: {value}}) => {
        dispatch({type: ACTION_TYPES.UPDATE_STEP, newStep: Number(value)});
    }
    return(
        <>
            <h2>{value}</h2>
            <input type='number' value={step} onChange={updateStep} />
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </>
    );
};
export default CounterWithReducer;