import React from "react";

// Create the context to be shared across the app
const AppContext = React.createContext();

// Provider component to wrap around the app to share the context
const AppContextProvider = ({ children }) => {
  // State for the tasks
  const [tasks, setTasks] = React.useState([
    { title: "Make a cup of tea", time: "10:20 am", color: "#FFC0CB" },
    { title: "Do MAD project", time: "12:00 pm", color: "#FFC4A1" },
    { title: "Do Java project", time: "15:00 pm", color: "#94F578" },
  ]);

  // State for the projects
  const [projects, setProjects] = React.useState([
    {containerColor: "#3BECF7", projectName: "MAD assignment", projectDescription: "Make a site map that has 6 UI screens", date: "16 Jan, 2023 at 5:00 pm"},
    {containerColor: "#AF68F0", projectName: "DEUI assignment", projectDescription: "Make a proposal and prepare slides for presentation", date: "19 Jan, 2023 at 6:00 pm"},
    {containerColor: "#FF9001", projectName: "JAVA assignment", projectDescription: "Prepare for interview and check the Java code for error", date: "16 Jan, 2023 3:00 pm"},
    ]);

  // Return the provider with the context value
  return (
    <AppContext.Provider value={{ tasks, setTasks, projects, setProjects }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to access the context in functional components
const useGlobalContext = () => {
  return React.useContext(AppContext);
};

// Export the provider and hook to be used in other parts of the app
export { AppContextProvider, useGlobalContext };
