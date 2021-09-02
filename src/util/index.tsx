import { useState, useEffect } from "react";

export const isFalsy = (value: any) => {
  return value === "0" ? false : !value;
};

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    // @ts-ignore
    if (isFalsy(value)) delete result[key];
  });
  return result;
};

export const useMount = (callback: () => {}) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
