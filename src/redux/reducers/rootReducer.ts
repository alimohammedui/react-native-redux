import { IMAGE_DATA_FETCHED, DATA_LOADING, FETCH_MORE, TEST_REDUCER } from "../actions/fetch";
import { combineReducers } from "redux";

interface Action {
  type: string;
  payload: any;
}

interface State {
  data: any[];
  loading: boolean;
}

const intialState = {
  data: [],
  loading: false,
};

// testing
interface TestAction {
  type: string;
  payload: any;
}

interface TestState {
  test: number
}

const testintialState = {
  test: 0
};


export const appInitReducers = (state: State = intialState, action: Action) => {
  switch (action.type) {
    case IMAGE_DATA_FETCHED:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_MORE:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    case DATA_LOADING:
      return {
        ...state,
        loading: action.payload
      };
      // case TEST_REDUCER:
      //   return {
      //     ...state,
      //     test: action.payload
      //   } 
    default:
      return state;
  }
};

const testReducers = (state: TestState = testintialState, action: TestAction) => {
  switch (action.type) {
    case TEST_REDUCER:
      return {
        ...state,
        test: action.payload
      }  
    default:
      return state;
  }
}


export default combineReducers({
 appinit: appInitReducers,
 test: testReducers
})
