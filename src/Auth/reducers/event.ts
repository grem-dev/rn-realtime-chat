import {
  EventActionType,
  EventReducerAction,
  EventState
} from "../types.d";

const initialState: EventState = {
  events: []
}

export function EventReducerFunction(prevState = initialState, action: EventReducerAction): EventState {
  switch (action.type) {
    case EventActionType.ADD_EVENT:
      return {
        events: [...prevState.events, action.data]
      }
    case EventActionType.DELETE_EVENT:
      return {
        events: prevState.events.filter(e => e.key !== action.data.key)
      }
    default:
      return { ...prevState };
  }
}