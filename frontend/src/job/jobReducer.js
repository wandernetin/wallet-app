const INITIAL_STATE = {list: [],
                        clientList: []}

export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
                case 'JOBS_FETCHED':
                        return { ...state, list: action.payload.data }
                case 'CLIENTS_JOBS_FETCHED':
                        return { ...state, clientList: action.payload.data }
                default:
                        return state
        }
}