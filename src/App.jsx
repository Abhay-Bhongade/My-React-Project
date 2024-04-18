import React from "react";
import InputFields from "./Components/MachinecodingRound/Debounce/InputFiels.jsx";
import CodingRoundQuestions from "./JobGet/CodingRoundQuestions.jsx";
import TodoUsingLocalStorage from "./Components/MachinecodingRound/ToDo App/TodoUsingLocalStorage.jsx";
import InfiniteScroll from "./Components/MachinecodingRound/InfiniteScroll/InfiniteScroll.jsx";
import ModelComponent from "./Components/MachinecodingRound/Model/Model.jsx";
import ImageSlider from "./Components/MachinecodingRound/ImageSlider/ImageSlider.jsx";
import DarkMode from "./Components/MachinecodingRound/DarkMode/DarkMode.jsx";
import Counter from "./Components/MachinecodingRound/Counter/Counter.jsx";
import AutoSuggestion from "./Components/MachinecodingRound/AutoSuggestion/AutoSuggestion.jsx";
import ParentComponent from "./Components/ChildToParentDataPass/ParentComponent.jsx";
import useOnlineStatus from "../src/Components/MachinecodingRound/CustomHook/useOnlineStatus.jsx"
import ScrollIndicator from "./Components/MachinecodingRound/ScrollIndicator/ScrollIndicator.jsx";
import ShowActiveTab from "./Components/MachinecodingRound/ActiveTab/ShowActiveTab.jsx";
import AppC from "./Components/MachinecodingRound/HigherOrderComponent/AppC.jsx";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Navbar from "./Pages/Navbar.jsx";
import { ThemeProvider } from "./theme-context.jsx";
import PaginationBackendDriven from "./Components/MachinecodingRound/Pagination/PaginationBackendDriven.jsx";
import Stepper from "./Components/MachinecodingRound/Stepper/Stepper.jsx";
import PracticeCodingRoundQuestions from "./JobGet/PracticeCodingRoundQuestions.jsx";
import ParentComponentForStepper from "./Components/MachinecodingRound/Stepper/ParentComponent.jsx";
import UseDebounceInput from "./Components/MachinecodingRound/Debounce/UseDebounceInput.jsx";
import StopWatchApplication from "./Components/MachinecodingRound/Counter/StopWatchApplication.jsx";
import PaginationWithApiData from "./Components/MachinecodingRound/Pagination/PaginationWithApiData.jsx";
import PaginationAndSearch from "./Components/MachinecodingRound/Pagination/PaginationAndSearch.jsx";
import Promise from "./Components/MachinecodingRound/Promise/Promise.jsx";


const App = () => {

//6month intership 
// in maharashtra job 1.5year with salary 12k   
// in Brain Inventory job for 6 month with  salary 20k
// in Saviesa Job for 1.4 month with salary  23k or 33k 
//overall 3.5year as total experience


const onlineStatus = useOnlineStatus();
console.log("onlineStatus",onlineStatus);

if(onlineStatus ===false) return <h1>Look like your are offline !!,please check your  internet connection </h1>

  return (
    <>
{/* <div className="App">
  <ThemeProvider>
   <BrowserRouter>
   <Navbar />
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/blog" element={<Blog/>}/>
   </Routes>
   </BrowserRouter>
  </ThemeProvider>
   </div> */}
 {/* <CodingRoundQuestions /> */}
 {/* <ParentComponentForStepper /> */}
 {/* <PracticeCodingRoundQuestions /> */}
  <CodingRoundQuestions /> 
 </>   
  );
};

export default App;

//135
//136
//20,31,32,33,34,35,67,69,72,74

//old resume
//bi 1/11/2021 - 30/11/2022  1year 1month
//saviesa  1/12/2022 - present 1year 4month

//total 2year 5 month