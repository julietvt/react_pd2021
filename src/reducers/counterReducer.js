import ACTION_TYPES from '../settings/constants';

const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const { value, step } = state;
      return {
        ...state,
        value: value + step,
      };
    }
    case ACTION_TYPES.DECREMENT: {
      const { value, step } = state;
      return {
        ...state,
        value: value - step,
      };
    }
    case ACTION_TYPES.UPDATE_STEP: {
      const { newStep } = action;
      return {
        ...state,
        step: newStep,
      };
    }
    default:
      return state;
  }
};
export default counterReducer;
