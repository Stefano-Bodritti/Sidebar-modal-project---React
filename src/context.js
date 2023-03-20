import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider value={{isModalOpen, isSidebarOpen, openSidebar, openModal, closeModal, closeSidebar}}>
      {props.children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}