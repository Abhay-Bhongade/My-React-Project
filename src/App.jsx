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
  <div><ShowActiveTab /></div>
  );
};

export default App;
