import {useReducer} from "react";

const reducer = (state: any, action: any) =>{
    if(action.type === "INCREMENT"){
        return {
            age: state.age + 1
        }
    }
    if(action.type === "DECREMENT"){
        if(state.age - 1 < 0){
            return {
                age: state.age - state.age
            };

        }
        return {
            age: state.age - 1
        }
    }
    if(action.type === "RESET"){

            return {
                age:0
            };

    }
}

export const Redus = () => {

    const [state, dispatch] = useReducer(reducer, {age: 0});

    return (
        <>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
            <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
            {state!.age}
        </>
    )

}