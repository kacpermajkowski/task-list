"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TasklistStorage from "./lib/TasklistStorage";
import React from "react";

import "./style.css";

export type PanelContextType = {
  currentTasklistName: string,
  setCurrentTasklistName: (name: string) => void
}

export const PanelContext = React.createContext<PanelContextType>({
  currentTasklistName: "default",
  setCurrentTasklistName: () => {}
});

export default function Panel() {
  const [ currentTasklistName, setCurrentTasklistName ] = useState("default");
  useEffect(() => {
    TasklistStorage.loadFromLocalStorage();
  });


  return (
    <>
      <PanelContext.Provider value={{ currentTasklistName, setCurrentTasklistName }}>
        <div className="panel">
          <Navbar />
          <TaskList name={currentTasklistName}/>
        </div>
      </PanelContext.Provider>
    </>
  );
}
