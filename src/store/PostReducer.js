const initState = {
    posts:[{
        id: 1,
        title: 'Play Cricket',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '},
    {
        id: 2,
        title: 'Fight with 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '},
    {
        id: 3,
        title: 'Go to Hospital',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '}
]}
const PostReducer = (state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT' :
            console.log(action.project)
            return state
        case 'CREATE_PROJECT_ERROR' :
            console.log(action.err)
            return state
        default:
            return state    
    }
}

export default PostReducer
// console.log(action)
// return {
//     ...state,
//     posts: action.project
// }