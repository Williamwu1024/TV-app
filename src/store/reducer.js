const initialState = {
    'mylist':[],
    'recommendations':[]
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL':
            return action.payload

        case 'REMOVE':
            let newState = [...state.mylist];
            let newRecomm = [...state.recommendations];
            newState = newState.filter(item => item.id !== action.payload);
            let selectedEle = state.mylist.filter(item => item.id === action.payload)[0];
            newRecomm.push(selectedEle);
            return {
                ...state,
                'mylist': newState,
                'recommendations': newRecomm
            }
        case 'ADD':
            newState = [...state.mylist];
            newRecomm = [...state.recommendations];
            let selectedItem = state.recommendations.filter(item => item.id === action.payload)[0];
            newState.push(selectedItem);
            newRecomm = newRecomm.filter(item => item.id !== action.payload);
            return {
                ...state,
                'mylist': newState,
                'recommendations': newRecomm
            }


            default:
            return state
        
    }
};

export default reducer;