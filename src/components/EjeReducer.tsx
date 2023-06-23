import React,{ useReducer } from "react";

interface State {
    count: number;
};

//definicion de tpos

type Action = {type: "SUMAR"} | {type: "RESTAR"};

//definicion reducer
const reducer = (state:State, action: Action):State => {
    switch(action.type){
        case "SUMAR":
            return {count: state.count +1};
        
        case "RESTAR":
            return {count: state.count -1};
        default:
            return state;
    };
};

const EjeReducer: React.FC = () =>{
    //Estado INICIAL
    const initialState: State ={count:0};
    //usamos reducer
    const [state, dispach] = useReducer(reducer, initialState);

    return(
        <div>
            <p>Contar: {state.count}</p>
            <button onClick={()=> dispach({type: "SUMAR"})}>+</button> 
        </div>
    );
};

export default EjeReducer;