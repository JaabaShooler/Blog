
const defaultState = {
    posts: [],
    currentPost: {
        comments:[]
    },
    isFetching: false,
    popupDisplay: 0
}


export default  function postsReducer(state = defaultState, action){
    switch (action.type){
        case "SET_POSTS": return {...state, posts: action.payload}
        case "SET_CURRENT_POSTS": return {...state, currentPost: action.payload}
        case "SET_FETCHING": return {...state, isFetching: true}
        case "UNSET_FETCHING": return {...state, isFetching: false}
        case "SET_MESSAGE": return {...state, currentPost: {...state.currentPost, comments: [ ...state.currentPost.comments, {postId: action.postId, id: action.id, body: action.body}]  }}
        case "SHOW_POPUP": return {...state, popupDisplay: 1}
        case "HIDE_POPUP": return {...state, popupDisplay: 0}
        case "SET_NEW_POST": return {...state, posts: [...state.posts, {...action.payload}]}
        case "DELETE_POST": return {...state, posts: state.posts.filter(el => el.id != action.id)}
        case "UPDATE" : return {...state, currentPost: {...action.payload, comments: [...state.currentPost.comments]}}
        default:
            return state
    }
}

export const setNewPost = (data) => ({type: 'SET_NEW_POST', payload: data})
export const deleteingPost = (id) => ({type: "DELETE_POST", id: id})

export const setPosts = (posts) => ({type: 'SET_POSTS', payload: posts})
export const setCurrentPost = (post) => ({type: 'SET_CURRENT_POSTS', payload: post})
export const update = (data) => ({type: 'UPDATE', payload: data})


export const setMessage = ({id, body, postId}) => ({type: 'SET_MESSAGE', postId: postId, id: id, body: body})

export const showPopup = () =>  ({type: 'SHOW_POPUP'})
export const hidePopup = () =>  ({type: 'HIDE_POPUP'})
export const setFetching = () => ({type: 'SET_FETCHING'})
export const unsetFetching = () => ({type: 'UNSET_FETCHING'})

