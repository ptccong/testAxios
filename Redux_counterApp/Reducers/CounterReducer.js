import { FECTH_SUCCES, FECTH_FAIL, ON_ADD_DATA, ON_FECTH } from '../Action/actionsType'

const reducersApp = (state = { dem: 0, data: [],error:null }, action) => {
  switch (action.type) {
    case FECTH_SUCCES:
      return {
        ...state,
        data: action.data
      }
      case FECTH_FAIL:
        return {
          ...state,
          error:action.error
        }
    default:
      return state;
  }
}

export default reducersApp;