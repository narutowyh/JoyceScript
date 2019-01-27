import { USER_SET_STATE } from "../types"

const initialState = {
  name: 'joyce'
}

export default function user(state = initialState, { type, data }) {
  switch (type) {
  case USER_SET_STATE:
    return {
      ...state,
      ...data
    }
  default:
    return state
  }
}
