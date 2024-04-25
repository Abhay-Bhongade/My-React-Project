import React,{Suspense} from "react";
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
import BoxColorChange from "./Components/MachinecodingRound/BoxescolorChange/BoxColorChange.jsx";
import ImageCarousal from "./Components/MachinecodingRound/ImageSlider/ImageCarousal.jsx";
import ProgressBar from "./Components/MachinecodingRound/ProgressBar/ProgressBar.jsx";
import InfiniteScrollWindow from "./Components/MachinecodingRound/InfiniteScroll/InfiniteScrollWindow.jsx";
import SignIn from "./Components/MachinecodingRound/React.memo/SignIn.jsx";
import AddTodoItem from "./Components/MachinecodingRound/UseMemoHook/AddTodoItem.jsx";
import UseCallbackHook from "./Components/MachinecodingRound/UseCallbackHook/UseCallbackHook.jsx";
import UseReducer from "./Components/MachinecodingRound/UseReducer/UseReducer.jsx";
import DynamicInputComponent from "./Components/MachinecodingRound/DynamicInputComponent.jsx";
import ComponentWithEffect from "./Components/MachinecodingRound/ComponentWithEffect.jsx";
import TaskAPI from "./Components/MachinecodingRound/TaskAPI.jsx";
import UseEffect from "./Components/MachinecodingRound/UseEffect.jsx";
import DeepCopy from "./Components/MachinecodingRound/DeepCopy.jsx";
import UseRefHook from "./Components/MachinecodingRound/UseRefHook.jsx";
import UseRefDomManipulation from "./Components/MachinecodingRound/UseRefDomManipulation.jsx";
//import UseDebounceExample from "./Components/MachinecodingRound/Debounce/UseDebounceExample.jsx";
const UseDebounceExample = React.lazy(()=>import("./Components/MachinecodingRound/Debounce/UseDebounceExample.jsx"))

const App = () => {

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
  {/* <CodingRoundQuestions />  */}
  {/* <Promise /> */}
  {/* <ImageCarousal /> */}
  {/* <InfiniteScrollWindow /> */}
  {/* <UseCallbackHook /> */}
  {/* <Suspense fallback={<div>loading...</div>}>
  <UseDebounceExample />
  </Suspense> */}
  <UseRefDomManipulation />
 </>   
  );
};

export default App;
