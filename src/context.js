import React from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([
    { title: "Make a cup of tea", time: "10:20 am", color: "#FFC0CB" },
    { title: "Do MAD project", time: "12:00 pm", color: "#FFC4A1" },
    { title: "Do Java project", time: "15:00 pm", color: "#94F578" },
  ]);
  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContextProvider, useGlobalContext };
