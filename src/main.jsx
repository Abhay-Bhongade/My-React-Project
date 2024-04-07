import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import App from "./App";
// import {PersistGate} from "redux-persist/integration/redux";
// import {PersistStore} from "redux-persist";
// let persistor = PersistStore(store)
import { createRoot } from 'react-dom/client';

// Replace ReactDOM.render with createRoot



const MainApp = () => {



  return (
    
    <>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={900}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
        />
       
    </>
  );
};




const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);