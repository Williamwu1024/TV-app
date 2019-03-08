const initialState = {
    'mylist':[  
        {  
           'title':'Futurama',
           'id':1,
           'img':'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {  
           'title':'The Interview',
           'id':2,
           'img':'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {  
           'title':'Gilmore Girls',
           'id':3,
           'img':'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
     ],
     'recommendations':[  
        {  
           'title':'Family Guy',
           'id':4,
           'img':'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {  
           'title':'The Croods',
           'id':5,
           'img':'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {  
           'title':'Friends',
           'id':6,
           'img':'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
     ]
};



const reducer = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {
        case 'REMOVE':
            let newState = [...state.mylist];
            newState = newState.filter(item => item.id !== action.payload);
            return {
                ...state,
                'mylist': newState
            }
        case 'ADD':
            newState = [...state.mylist];
            
            let newRecomm = [...state.recommendations];
            // console.log(newState);
            let selectedItem = state.recommendations.filter(item => item.id === action.payload)[0];
            newState.push(selectedItem);
            newRecomm = newRecomm.filter(item => item.id !== action.payload);
            // console.log(newRecomm);
            // console.log(newState);
            // newRecomm.
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