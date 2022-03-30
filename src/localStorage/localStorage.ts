export function saveValueToLS(key: string, value: number) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function restoreValueFromLS(key: string, defaultValue: number) {
  let valueFromLS = defaultValue;
  const valueInLS = localStorage.getItem(key);

  if(valueInLS) {
    valueFromLS = JSON.parse(valueInLS);
  }

  return valueFromLS;
}