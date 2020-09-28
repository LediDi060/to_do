const todos = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...todos,
                {
                    text: action.text,
                    date:action.date
                }
            ]
        default:
            return state
    }
}
export default todos