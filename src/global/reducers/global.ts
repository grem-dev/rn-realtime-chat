import {
  GlobalActionType,
  GlobalReducerAction,
  GlobalState
} from "../types.d";

const initialState: GlobalState = {
  events: []
}

export function GlobalReducer(prevState = initialState, action: GlobalReducerAction): GlobalState {
  switch (action.type) {
    case GlobalActionType.ADD_EVENT:
      return {
        events: [...prevState.events, action.data]
      }
    case GlobalActionType.DELETE_EVENT:
      return {
        events: prevState.events.filter(e => e.key !== action.data.key)
      }
    default:
      return { ...prevState };
  }
}