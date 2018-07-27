const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
                case 'EXPENSES_FETCHED':
                        console.log(state)
                        return { ...state, list: action.payload.data }
                default:
                        return state
        }
}