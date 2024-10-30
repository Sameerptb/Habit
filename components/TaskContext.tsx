import React, { createContext, useContext, useState } from 'react';
import Data from '../src/constants/Data';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(Data[1]);
  const [index, setIndex] = useState(0);

  const handleCompleteTask = () => {
    setIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % Data.length;
      setSelectedItem(Data[nextIndex]);
      return nextIndex;
    });
  };

  return (
    <TaskContext.Provider value={{ selectedItem, handleCompleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
