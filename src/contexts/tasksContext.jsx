import { createContext } from "react";

const initialContext = {
  tasksArr: [
    { id: 1, status: "todo", text: "Hi1" },
    { id: 2, status: "progress", text: "Hi2" },
    { id: 3, status: "done", text: "Hi3" },
  ]
};

export const taskContext = createContext(initialContext);

// NavigationContext.Provider - компонент предоставляющий контекст
// NavigationContext.Consumer - компонент достающий данные из контекста (в классовом компоненте)
// useContext(NavigationContext); - получение данных в функциональном компоненте

export const TasksProvider = ({ children }) => {
  return (
    <taskContext.Provider value={{ initialContext }}>
      {children}
    </taskContext.Provider>
  );
};
