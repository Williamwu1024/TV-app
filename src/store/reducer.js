const initialState = {
    'mylist':[],
    'recommendations':[]
};

const addElement = (beadd, del, selectedID) => beadd.concat(del.filter(item => item.id === selectedID)[0]);
const delElement = (del, selectedID) => del.filter(item => item.id !== selectedID);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL':
            return action.payload

        case 'REMOVE':
            console.log(action.payload);
            return {
                ...state,
                'mylist': delElement(state.mylist, action.payload),
                'recommendations': addElement(state.recommendations,state.mylist,action.payload)
            }
        case 'ADD':
            return {
                ...state,
                'mylist': addElement(state.mylist, state.recommendations, action.payload),
                'recommendations': delElement(state.recommendations, action.payload)
            }

            default:
            return state
        
    }
};

export default reducer;