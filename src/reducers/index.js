import {
  SET_SCREEN
} from '../actions'

const initialState = {
  loadedString: "",
  ui: {
    leftTab: 'inputOwl'
  },
  screen: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN:
      console.log('set screeeeen', action.windowNum)
      return {
        ...state,
        screen: action.windowNum
      }
    // case types.LOAD_OWL_STRING:
    //   return {...state, loadedString: action.owlString}
    // case types.SAVE_JSON_OWL:
    //   return {...state, loadedJSON: action.owlJSON}
    // case types.SET_CLASS_DATA:
    //   return {...state, classData: action.classData}
    // case types.SET_INDIVIDUALS:
    //   return {...state, individuals: action.individuals}
    // case types.SET_RELATIONS:
    //   return {...state, relations: action.relations}
    // case types.CHANGE_TAB:
    //   const newUI = {...state.ui, leftTab: action.tabName}
    //   return {...state, ui: newUI}
    // case types.CLICK_CLASS:
    //   let oldArray = JSON.parse(JSON.stringify(state.classData))
    //   let selectedClass
    //   if (!!state.selectedClass) {
    //     selectedClass = state.selectedClass
    //   } else {
    //     selectedClass = []
    //   }
    //   selectedClass.push(action.className)
    //   return {...state, classData: oldArray, selectedClass: selectedClass}
    // case types.CLASS_NAME_CHANGE:
    //   let oldClass = JSON.parse(JSON.stringify(state.classData))
    //   oldClass[action.className].alias = actActionTypeion.newName
    //   return {...state, classData: oldClass}
    // case types.CLASS_COLOUR_CHANGE:
    //   let oldClas = JSON.parse(JSON.stringify(state.classData))
    //   oldClas[action.className].stlye = {color: action.newColour}
    //   return {...state, classData: oldClas}
    default:
      return state
  }
}

export default reducer

// import { combineReducers } from 'redux'
// import {
//   SELECT_REDDIT, INVALIDATE_REDDIT,
//   REQUEST_POSTS, RECEIVE_POSTS,
//   SET_SCREEN
// } from '../actions'
//
// const selectedReddit = (state = 'reactjs', action) => {
//   switch (action.type) {
//     case SELECT_REDDIT:
//       return action.reddit
//     default:
//       return state
//   }
// }
//
// const posts = (state = {
//   isFetching: false,
//   didInvalidate: false,
//   items: []
// }, action) => {
//   console.log(action)
//   console.log('action')
//   switch (action.type) {
//     case SET_SCREEN:
//
//       console.log('set screeeeen')
//       return {
//         ...state,
//         screen: action.windowNum
//       }
//     case INVALIDATE_REDDIT:
//       return {
//         ...state,
//         didInvalidate: true
//       }
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         isFetching: true,
//         didInvalidate: false
//       }
//     case RECEIVE_POSTS:
//       return {
//         ...state,
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       }
//     default:
//       return state
//   }
// }
//
// const postsByReddit = (state = { }, action) => {
//   switch (action.type) {
//     case INVALIDATE_REDDIT:
//     case RECEIVE_POSTS:
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         [action.reddit]: posts(state[action.reddit], action)
//       }
//     default:
//       return state
//   }
// }
//
// const rootReducer = combineReducers({
//   postsByReddit,
//   selectedReddit
// })
//
// export default rootReducer
