type CounterInitStateType = typeof initState;

type IncValueActionType = ReturnType<typeof increaseValueAC>;
type ResetValueActionType = ReturnType<typeof resetValueAC>;
type DisplayMessageActionType = ReturnType<typeof displayMessageAC>;
type SetMinValueActionType = ReturnType<typeof setMinValueAC>;
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
type SaveSettingsActionType = ReturnType<typeof saveSettingsAC>;

type ActionType = IncValueActionType | ResetValueActionType | DisplayMessageActionType |
  SetMinValueActionType | SetMaxValueActionType | SaveSettingsActionType;

const initState = {
  currentValue: 0,
  displayMessage: "",
  minValue: 0,
  maxValue: 5,
};

export const increaseValueAC = () => ({type: "INCREASE-VALUE"} as const);
export const resetValueAC = () => ({type: "RESET-VALUE"} as const);
export const displayMessageAC = (message: string) => ({type: "DISPLAY-MESSAGE", message} as const);
export const setMinValueAC = (minValue: number) => ({type: "SET-MIN-VALUE", minValue} as const);
export const setMaxValueAC = (maxValue: number) => ({type: "SET-MAX-VALUE", maxValue} as const);
export const saveSettingsAC = () => ({type: "SAVE-SETTINGS"} as const);

export const counterReducer = (state: CounterInitStateType = initState, action: ActionType): CounterInitStateType => {
  switch (action.type) {
    case "INCREASE-VALUE":
      return {...state, currentValue: state.currentValue + 1};
    case "RESET-VALUE":
      return {...state, currentValue: state.minValue};
    case "DISPLAY-MESSAGE":
      return {...state, displayMessage: action.message};
    case "SET-MIN-VALUE":
      return {...state, minValue: action.minValue};
    case "SET-MAX-VALUE":
      return {...state, maxValue: action.maxValue};
    case "SAVE-SETTINGS":
      return {...state, currentValue: state.minValue, displayMessage: ""};
    default:
      return state;
  }
};