const root = document.documentElement;

export const SetStyleProperty = (property: string, value: string) => {
  return root.style.setProperty(property, value);
};
export const GetStyleProperty = (property: string) => {
  return getComputedStyle(document.body).getPropertyValue(property);
};
