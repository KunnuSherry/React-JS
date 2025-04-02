import { useReducer } from "react";

const initialState = {
    showText: false,
    showStyles: false
}
function reducer(state, action) {
    switch (action.type) {
        case 'showText':
            return {...state, showText: true};
        case 'hideText':
            return {...state, showText: false};
        case 'changeStyles':
            return {...state, showStyles: !state.showStyles};
        default:
            return state;
    }
}
export default function UseReducer(){
    
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1 style={{display: state.showText ? 'block' : 'none', color: state.showStyles ? 'red' : 'blue'}}>UseReducer</h1>
            <button onClick={() => dispatch({type: 'showText'})}>Show Text</button>
            <button onClick={() => dispatch({type: 'hideText'})}>Hide Text</button>
            <button onClick={() => dispatch({type: 'changeStyles'})}>Change Styles</button>
        </div>
    )
}

