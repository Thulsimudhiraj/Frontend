const initialState = {
    courses: []
}

const CourseReducer = (state = initialState, action) => {
    if (action.type=== 'ADD_COURSE'){
        return {
            ...state,
            courses:[
                ...state.courses,
                action.payload
            ]
        }

    } else {
        return state
    }

}
export default CourseReducer

//state is a exiting one,
//we have single store,principle