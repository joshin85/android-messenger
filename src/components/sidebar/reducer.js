export default function reducer(state={
    sidebar: {
        open: true
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {
        
    switch(action.type) {
        case "TOGGLE_SIDEBAR": {
            let open = !state.sidebar.open;
            return {
                ...state,
                sidebar : {
                    open : open                    
                }
            }
        }
    }
    return state
};