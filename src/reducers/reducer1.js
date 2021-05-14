const initialState={
    questionno : 0,
    answers:[],
    
};

export const reducer1 = (state=initialState,action) => {
    switch(action.type){
        case "incrementquest":
            return{
                ...state,
                questionno: state.questionno +1
            }

        case "decrementquest":
            return{
                 ...state,
                questionno: state.questionno -1
            }


        case "reset":
            return{
                ...state,
                questionno : 0,
                answers:[],
                
            }


        case "storeans":
            return{
                ...state,
                answers:[...state.answers,action.payload],

            }

        
        
        default:
            return state;
    }
};

