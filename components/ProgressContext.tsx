import React, { createContext, useState } from 'react';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progressValues, setProgressValues] = useState({
    1: 70,
    2: 80,
    3: 60,
    4: 50,
  });

  const setProgressValue = (id, value) => {
    setProgressValues(prevValues => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <ProgressContext.Provider value={{ progressValues, setProgressValue }}>
      {children}
    </ProgressContext.Provider>
  );
};
