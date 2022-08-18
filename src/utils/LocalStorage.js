export const getFromStorage = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }

  return undefined;
};

export const setAtStorage = (key, value) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  }

  return undefined;
};
