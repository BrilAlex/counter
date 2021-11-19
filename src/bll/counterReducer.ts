export type InitialStateType = typeof initialState;

type IncreaseValueActionType = ReturnType<typeof increaseValueAC>;
type ResetValueActionType = ReturnType<typeof resetValueAC>;
type SetSettingsMode = ReturnType<typeof setSettingsModeAC>;
type SetInputError = ReturnType<typeof setInputErrorAC>;
type SetMinValueActionType = ReturnType<typeof setMinValueAC>;
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
type ActionTypes = IncreaseValueActionType | ResetValueActionType
  | SetMinValueActionType | SetMaxValueActionType | SetSettingsMode | SetInputError;

const initialState = {
  minValue: 0,
  maxValue: 5,
  counterValue: 0,
  settingsMode: false,
  inputError: false,
};

export const increaseValueAC = () => ({type: "INC-VALUE"} as const);
export const resetValueAC = () => ({type: "RESET-VALUE"} as const);
export const setMinValueAC = (minValue: number) =>
  ({type: "SET-MIN-VALUE", minValue} as const);
export const setMaxValueAC = (maxValue: number) =>
  ({type: "SET-MAX-VALUE", maxValue} as const);
export const setSettingsModeAC = (settingsMode: boolean) =>
  ({type: "SET-SETTINGS-MODE", settingsMode} as const);
export const setInputErrorAC = (inputError: boolean) =>
  ({type: "SET-INPUT-ERROR", inputError} as const);

export const counterReducer = (
  state: InitialStateType = initialState, action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "INC-VALUE":
      return {...state, counterValue: state.counterValue + 1};
    case "RESET-VALUE":
      return {...state, counterValue: state.minValue};
    case "SET-MIN-VALUE":
      return {...state, minValue: action.minValue};
    case "SET-MAX-VALUE":
      return {...state, maxValue: action.maxValue};
    case "SET-SETTINGS-MODE":
      return {...state, settingsMode: action.settingsMode};
    case "SET-INPUT-ERROR":
      return {...state, inputError: action.inputError};
    default:
      return state;
  }
};