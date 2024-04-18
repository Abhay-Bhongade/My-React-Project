//knowledge wale insaan ko hi paisa milta hai
//The vital thing due to which the resume do get selected is due to projects. Mainly, if you have worked on e-commerce domain that would be a great plus.
//you have to confident about your answer 
//Top 100 React JS Interview Questions and Answers https://www.youtube.com/watch?v=IMEzmmP3WAs

//first watch Javascript videos so basic concept clear
//then React videos with and React mostly asked questions 
//Coding Round questions (asked till Todo App,File/Folder Structure,Redux Setup and API Integration)
//Machine Coding Round questions
//Prepare in Depth with example

//tip for interview:- dont give answer in one line elaborate it with defination and mention use case in your project 

//Rounds in interview
//1.Coding Round / Machine coding round
//2.Technical Round

//1. what is your role in the current project in your company , introduction and on which project you work on 

//Tell something about your current project?
//you have to tell three things 
//1.high level use to the end user
//2.what is your project domain like ecommerce,healthcare,hotel management
//3.tech stack use in your project like nodejs for backend,react,redux,js,css,html(mern stack)
//currently I am working on the Orange Application which is hotel staff management project the purpose of this project is manage each role like there are roles like admin,recruiter,inspector,bussiness developer,bussiness analyst,accountant,hotel manager,collaborator where admin has full access where he can add,edit,delte all the above role and each role has seperate login also where other role has the view access only and there is dashboard for each screen which show after the particular role login ,the technologies we are using react for frontend,nodejs,express for backend and mongodb for database we are following for hybrid agile model for our project.

//what is meant by agile model
//The Agile model is a software development approach that emphasizes flexibility, adaptability, and collaboration throughout the development process. It contrasts with traditional "waterfall" methodologies, which involve sequential phases like "requirements gathering, design, implementation, testing, and deployment".
//Instead of trying to deliver the entire software product at once, Agile breaks down the development process into smaller, manageable increments called iterations. Each iteration typically lasts from one to four weeks and results in a potentially shippable product increment.

//Introduction
//your name
//your total experience
//technologies you work on
//location 
//your background domain knowledge

//Good Afternoon sir,My name is Abhay Bhongade. I'm from Wardha, Maharashtra. I completed my graduation in copmuter engineering from Nagupur University, I've been working as a React Developer for three years now. My skills include HTML, CSS, JavaScript, React, Redux, and Bootstrap.Thank you for this opportunity to introduce myself.

//What are your roles and responsibilities in your Project?
//As a frontend developer my role is to estimate/gather the requirement and creating the design and then development where I focus on the  api integration and adding validation to forms and write unit test cases with the team and finally publish changes to  different environment and also I supportting the production and live environment by fixing the bugs
//1.gather requirement => 2.create the design =>3.development(where I focus on the api integration and adding  validation to forms => 4.finally publish changes different environment) =>5.fixing the production time bugs.

//Rate yourself in skills 1 - 10(confidence checking question)
//rate yourself from 5 to 9 
//in react 8
//in js 8 
//in html 7
//in css 8

//Requirement change at the last moment
//you can give the reference to situation you face earlier
//show  your positive attitude to work here



//2. what is react (v.imp)
//React is an open-source JavaScript library developed by Facebook.
//React follows the component based approch which helps in building Reusabel UI components.
//It is used for developing complex and interactive web and mobile UI.
//Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.
//usage : React simplifies the creation of "SPA" by using Reusable components.

//key features of React
//1.Component-Based Architecture
//2.Virtual DOM
//3.JSX (JavaScript XML)
//4.One-Way Data Binding(Unidirectional data flow)
//5.React Hooks

//Advantage of React 
//1.Component-Based Architecture:React follows the component based approch which helps in building Reusabel UI components.
//2.Virtual DOM:React's Virtual DOM "improves performance" by minimizing direct manipulation of the actual DOM.
//3.JSX (JavaScript XML):JSX allows developers to write HTML like code, making the code more "readable". 
//4.Unidirectional Data Flow: React follows a unidirectional data flow, where "data flows from parent components to child components via props".
//5.Performance Optimization: React "offers" various performance optimization techniques, such as memoization, lazy loading, and code splitting. These optimizations help improve rendering speed, reduce time to interactive, and enhance overall user experience.
//6.Strong Community Support
//7.React Hooks

//Limitation of React 
//1.Lack of Proper Documentation: fast updates provides less time to document with proper instructions
//2.Development Speed: tiresome for developers to continuosly learn new technologies.
//3.JSX Complexity:The mix of HTML and JavaScript in JSX makes React JS much more complicated to learn and that may be unappealing to aspiring developers.
//4.Problems With SEO:require expertise from developers as react had problem with google and indexing.
//5.React is not  a complete framework it is just library

//Difference Between React and Angular
//both are use to create single page application UI application using components.

//1. React is Javascript library
//1. Angular is the Complete framework
//2. React uses virtual Dom which make it faster.
//2. Angular uses Real DOM
//3. React is smaller in size and lighweight 
//3. Angular is bigger in size because it is complete framework
//4.React is simple to learn and more popular than Angular
//4.Angular is slightly difficult to learn as it has Typescript ,OOPS concept and many more things

//3. what is virtual dom and how it is diffrent from the real dom
//The Virtual DOM in React is a lightweight copy of the real DOM.
//When you make changes to the "state" of a React component, instead of directly manipulating the real DOM, React creates a new Virtual DOM representation of the updated UI.
//React then compares this new Virtual DOM with the previous one to identify the differences (often referred to as "diffing"). Once the differences are identified, React calculates the most efficient way to update the real DOM to match the new Virtual DOM.
//This process of comparing and updating only the parts of the DOM that have changed(reconcilation), rather than re-rendering the entire UI, is what makes React highly efficient and performant. By minimizing the number of updates to the real DOM, React significantly improves the performance of web applications, especially those with complex and dynamic user interfaces.

//It’s a lightweight copy of the actual DOM, and changes are first made to the Virtual DOM and then efficiently reflected in the real DOM. This process is known as “reconciliation” and helps optimize performance by minimizing expensive DOM manipulations.

//4. What Is Shadow DOM?
//ShadowDOM is the concept that refers to the "encapsulation" of DOM elements and components.
//Shadow  DOM is helpful for CSS scoping.(css of one component not conflict with the other component css)

//5. explain life cycle methods in react js
// mounting phase componentDidMount() , updating phase componentDidUpdate() , unmounting phase componentWillUnMount()

//6. types of components which you prefer mostly
//1.Class Based Component
//2.Functional Component

//7. Difference Between Class Based Component vs Functional Component
/*

//1.Syntax:
Class-based components: Defined using ES6 classes, with the class keyword.
Functional components: Defined as plain JavaScript functions that take props as arguments and return React elements.

//2.State Management:
Class-based components: Can manage "local state" using the this.setState() method provided by React.
Functional components: Originally Stateless but now maintain state using useState() hooks.

//3.Lifecycle Methods:
Class-based components: Have access to lifecycle methods like componentDidMount(), componentDidUpdate(), componentWillUnmount(), etc., which allow developers to execute code at specific points in a component's lifecycle.
Functional components: Before React Hooks, functional components couldn't use lifecycle methods. With Hooks, functional components can now use lifecycle-related hooks like useEffect to perform side effects.

//4.Readability and Conciseness:
Class-based components: verbose(complex).
Functional components: more concise and readable

//5.Render Method
//Class Component have render() Method
//Functional Component do not have render() Method


*/

//8. type of hooks ever you created any custom hooks
//useState(),useEffect(),useMemo(),useCallback(),useContext(),useReducer(),

//yes I create one customHook which check user is online or offline basically the device is conected to internet or not

//9. how to update a component in every one seconds
//with useEffect hook we can create setInterval method we can call it after every one second

//10. what is refs can we use this in functional component
//yes we can use the refs in the functioanl component because in react version 16.8.0 useRef hook where introduce and refs are used to store value when  refs change that time  component not render like useState hook when state change that time component re-render

//11. how we can pass data from child to parent component, can we pass data from parent to child(we use props) and child to parent(we use callback function) and which is legal ,data in react flow unidirectional means parent to child ,one way data binding 

//12. you are using functional component over class component what are beneafits using functional component over class base component.(1.code is reliable 2. easy to read 3.easy to write that code 4. easy to test 5.easy for debugging and performming)

//13. what is react router ? (react router is the library , we use in react for handling multiple pages,speed is very fast there are three things we are using Browser router and inside routes there are route where we provid path of that component )

//14. how to pass the data between sibling components
//there is 3 ways to pass the data between sibling components
//1.Lifting State Up:-If the sibling components share a common ancestor in their component tree, you can lift the state up to that common ancestor and then pass down the state and callbacks as props to the sibling components.
/*
//parentcomponent.js
<div>
      <SiblingComponentA data={data} onDataChange={handleDataChange} />
      <SiblingComponentB data={data} />
    </div>
*/
//2.Using Context API:-If the sibling components are not directly connected in the component tree, you can use React's Context API to provide and consume data across the components.

//3.with state Management library like Redux
//You can use state management libraries like Redux to manage and share application state across components, including sibling components.

//14. what is redux
//Redux is open-source javascript library for managing and centralizing application state.
//It helps you manage the state of your application in a predictable manner,with the help of Redux devtool  a crome extention.
//It follows a unidirectional data flow pattern.
//Redux offers easy debugging.


// Main Concepts:
// Store: The single source of truth that holds the application state.
// Actions: Plain JavaScript objects describing the changes in the application state.
// Reducers: Functions that specify how the application's state changes in response to actions.
// Dispatch: A method used to dispatch actions to the Redux store.
// Selectors: Functions used to "extract specific pieces of state" from the Redux store.

//Redux Toolkit was originally created to help address three common concerns about Redux:
//1."Configuring a Redux store is too complicated"
//2."I have to add a lot of packages to get Redux to do anything useful"
//3."Redux requires too much boilerplate code"

//Redux Toolkit:
//It's designed to make Redux easier and more efficient to work with.
//Reduces boilerplate code significantly.

// Features:
// configureStore: A function that wraps around Redux's createStore and provides sensible defaults.
// createSlice: A function that "generates" action creators and reducers for a slice of state.
// Immutability Helpers: Simplifies updating immutable state.
// Thunks: Simplifies writing and managing async logic.

//How we can do Redux setUp
//step 1:- install following packages npm install react-redux redux-persist @reduxjs/toolkit
//write data
//when you click on the Add button it dispatches an action then this action calls a reducer function and then this reducer function which update the slice of redux store.
//add btn => dispatch action => reducer(fn) => update the slice of redux store.
//[add] btn => [A]dispatch action  => call reducer [fn]=>update the slice in the [cart]
//and this function is know as a reducer

//read data
//we use selector and this selector will give you data here(when we use selector this phenomenon  called as subscribing to store)
//the header component(card component) is subscribe to the redux store using a selector

//Redux toolkit setup steps
//1.install @reduxjs/toolkit react-redux
//2.Build our store
//3.connect our store to app
//4.slice(cartSlice)
//5.dispatch(action)
//6.useSelector

//createSlice 
//A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

//useSelector(()=>) subscribing to store
//A function that takes a selector function as its first argument. The selector function is responsible for selecting a part of the Redux store's state or computing derived data.

//In redux dont do this three things
//dont get all the store data only get that particular slice from the store
//ensure when to use reducers and reducer
//in vanila redux we directly don't mutate the original state 
//but in redux toolkit we directly mutate the oiginal state

//createAsyncThunk to define an asynchronous action creator. This function takes a string action type prefix and an async callback function as parameters.

//Redux Thunk
// Redux Toolkit includes Redux Thunk middleware by default.
// Thunk middleware "allows you" to write action creators "that return a function instead of an action object". This enables you to perform asynchronous logic within your action creators.
//Async Callback Function: The async callback function you provide to createAsyncThunk is responsible for performing the asynchronous operation, such as making an API call using fetch, axios, or any other async operation. This function should return a promise that resolves to the fetched data.


//15. what is difference between react-redux and react context API
//both Redux and useContext used for managing and sharing state across components
//Redux is suitable for applications with complex state management requirements, such as large-scale applications with multiple interconnected components.
//Context API is often used for smaller applications or for managing UI theme, authentication state, or language preferences.


//16. what is redux saga
//Redux Saga is a "middleware library" for Redux that helps "manage asynchronous operations", such as fetching data from an API, in a more organized and testable way.
// It uses generator functions "to handle" side effects and provides a declarative approach to describe asynchronous logic.
// With Redux Saga, we can separate side effect logic from the main application logic, leading to cleaner and more maintainable code.

//17. what is jest?(created by facebook)
//jest is the "unit testing framework",which is also created by the facebook only,and it is based on the jasmine,as we are use jest for testing our component

//Types of Testing (developer can do)
//1.Unit Testing(testing single component of application for example Navbar)
//2.Integration Testing(There are multiple component involve and they are talking to each other we can develop a flow as a action in our react Application)
//3.End to End Testing(Testing when user landing on the page/website and leaves the website)
//e2e Testing require different type of tools like cypress,puppetier,selenium

//Unit Testing 
//we use React-Testing library for Unit Test 
//React-Testing library  uses jest framework behind the scenes for testing
//React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

//how to create new project using parcel
//npm init -y
//npm install react react-dom
//mkdir src 
//cd src
//create index.html  index.js App.js files also

//Setting up Testing in our APP
//install React Testing Library //npm i -D @testing-library/react
//install jest //npm install --save-dev jest
//install babel dependencies //npm install --save-dev babel-jest @babel/core @babel/preset-env
//configure babel create babel.config.js file
//configure parcel config file to disable default babel transpilation  .parcelrc (file create) go to parcel website then click on the  javascript from left sidebar and then click on the transpiler and then copy the code and paste it in the .parcelrc
//writing jest configuration //npx jest --init
//install jsdom library  //npm install --save-dev jest-environment-jsdom
//If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
//instal @babel/preset-react //to work jsx work in the test cases
//Include @babel/preset-react inside my babel config
//npm install -D @testing-library/jest-dom  to use toBeInTheDocument()

//18. what are the advantages jest over jasmine
//Advantages(ZSP)
//1.Zero Configuration:- Jest requires minimal configuration out of the box.
//2.Snapshot Testing:- Jest allows us to "capture the output of a component or function" and compare it against a previously stored snapshot This is particularly useful for testing UI components.
//3.Parallel Test Execution:-Jest can run tests in parallel, significantly "reducing the overall test execution time", especially for large test suites.

//19. are you use bootsrap in  react 
//yes I used bootstrap in my react project 

//20. npm vs npx 
//1.npm "installs" packages either "globally or locally" to the project,
//1.while npx "runs" packages without installing them permanently.
//2.npm is mainly used for "managing dependencies and running scripts", 
//2.whereas npx is primarily "used for executing packages" as command-line tools.


//21. what is JSX?
//JSX stand for "javascript xml"
//JSX allows developers to write HTML-like code directly within JavaScript files.
//JSX is converted to javascirpt via tools like "babel".(Because browser understand javascript not JSX)//Babel is a popular JavaScript compiler
/*
//this code we write in jsx
function App(){
 return(
        <div className="App">
        <h1>hello</h1>
        <p>Happy</p>
        </div>
    )
}
   
export default App;

//this jsx code is converted("babel") to javascript code because browser understand javascript not JSX

function App(){
return
    React.createElement(
        'div',{className:"App"},
        React.createElement('h1',null,'hello');
        React.createElement('p',null,'Happy')
    )
}


export default App;
*/


//22.What is Axios Interceptor and Prototype Inheritance 
//Axios Interceptor
//Axios Interceptor are "functions" that axios calls for each HTTP requests or response before they are handle by .then and .catch block
//Axios interceptors "provide" a convenient way to "apply common functionality" across "all HTTP requests and responses" in your application. 
//They help keep your code clean and consistent by centralizing logic that needs to be applied globally.

//Axios interceptors are commonly used for tasks such as:
//1.Adding headers to requests.
//2.Modifying request or response data.
//3.Handling authentication tokens.

/*
import axios from 'axios';
// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Modify request configuration
    config.headers.Authorization = 'Bearer token'; // Add authorization header
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Modify response data
    console.log('Response:', response.data);
    return response;
  },
  error => {
    // Handle response error
    console.error('Error:', error.message);
    return Promise.reject(error);
  }
);

// Now you can make requests using Axios
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });

//We define a request interceptor using axios.interceptors.request.use(). This interceptor modifies the request configuration by adding an authorization header.
//We define a response interceptor using axios.interceptors.response.use(). This interceptor logs the response data.
//Both interceptors can also handle errors by returning a rejected promise using Promise.reject(error).
//Once the interceptors are defined, we can make requests using Axios as usual.


//23.Prototypes in Javascript
//Prototypes in Javascript is mechanism by which javascript objects inherit(inheritance) features from one another.
//Prototype inheritance is mechanism which allows javascript objects to inherit "properties and methods" from other objects.
//In JavaScript, almost all objects have a prototype object associated with them.
// Each object has an internal property called [[Prototype]] (sometimes referred to as __proto__) that points to its prototype object.
//When you access a property or method on an object, JavaScript first checks if that property or method exists directly on the object itself. If it doesn't find it, it looks up the prototype chain by following the [[Prototype]] link until it finds the property or method or reaches the end of the chain (which is usually the Object.prototype).


//24.how to  format date using react 
//In React, you can format dates using JavaScript's 1.built-in Date object and various libraries like 2.moment.js or 3.date-fns. 
function formatDate(date){
  const formatedDate = new Date(date).toLocaleDateString("en-US",{
    year:"numeric",
    month:"long",
    day:"numeric"
  });
  return formatedDate
}
const createdAt = "2024-04-15"
const date = formatDate(createdAt);
console.log("date",date)//April 15,2024

//or using moment js library
//npm install moment
import React from 'react';
import moment from 'moment';

function App() {
  const date = '2024-04-15';
  const formattedDate = moment(date).format('MMMM D, YYYY');

  return <div>{formattedDate}</div>;
}

export default App;


//25. what are the technology to optimize react app performance 
//1.lazy loading,2.assest optimization(images used webp over jpeg),3.using hooks like useMemo(),useCallback(),4.Using Deboncing and Throttling
//5.implement suggesions given by Lighthouse  Report(Performance,SEO,Accesibility,Best Practices)

//26.what are the different ways to style react component(inline style, javascript object or style,style sheet means external style sheet )
//1.Inline style 
//2.External stylesheet (make an external stylesheet file and import it in your component)
//3.CSS Modules (automatically generating "unique class names" for each component. This approach helps prevent style conflicts)
/* MyComponent.module.css */

// .myDiv {
//   color: blue;
//   font-size: 20px;
// }
//import styles from './MyComponent.module.css';
//<div className={styles.myDiv}>Hello, World!</div>
//4.Using third party libraries like bootstrap,tailwind

//27. what are the rules must follow when use react hooks
//1.Only Call Hooks at the Top Level
//2.Don't Call Hooks Conditionally(Don’t call Hooks inside loops, conditions, or nested functions)
//3.Only Call Hooks from React Functions
//4.Follow Naming Conventions for Custom Hooks


//28. diffrence between class base component and functional  component 
// class base component is a class which extent React.Component and it has render method which return some piece of jsx
//in class base component when user receive props that time it get in the constructor function 
// constructor (props){
//    super(props);
//    console.log("props",props);
//} 
//first constructor is called after that render method is called and if there is any child component is used there then child all life cycle methods are called like first constructor after rendor method after that component did mount in child and after that if componend did mount in parent is called.
//1.constructor called 2.render called 3.componentDidMount(mainly used for api call work like useEffect) is called 
//functional component is a function  which return some piece of jsx
/*
--in parent component if one child are imported then that time
1.parent constructor
2.parent render
3.first child constructor
4.first child render
5.first child component did Mount
in this it complete the child Component Did Mount also
6.parent component did Mount


--in parent component if two child are imported then that time
1.parent constructor
2.parent render
3.first child constructor
4.first child render
5.second child constructor
6.second child render
react did that because it updated Mount phase in batches for optimize the performance(Dom update in batching)
7.first child component did Mount
8.second child component did Mount
9.parent component did Mount

--when you called the API in the class base component.
1.constructor is called
2.render is called (show dummy data)
3.Component did Mount is called after api call successful
4.render is called again (show updated API data)
5.component did update is called
6.componentwillunmount will call at last when you navigate to another page
*/

//What are the Compoent Life Cycle Phases
//1.Mounting Phase(Component Creation Started)
//2.Updating Phase(Component Updates)
//3.Unmounting Phase(Removal from the DOM).

//What are the Compoent Life Cycle Methods? (v.imp)
//1.Mounting Phase 
//constructor()
//render()
//ComponentDidMount()

//2.Updating Phase
//render
//CommponentDidUpdate()

//3.Unmounting Phase
//ComponentWillUnmount()

//what is use of extends keyword in class base component
//In JavaScript, the extends keyword is "used to create a subclass" that inherits "properties and methods" from another class, known as the superclass or parent class. In the context of React class-based components, the extends keyword is "used to create a subclass" that inherits from the React.Component class, allowing you to define custom components with additional functionality.
//In this example, MyComponent is a subclass that extends the React.Component class. By extending React.Component, MyComponent inherits all the properties and methods of React.Component, including lifecycle methods such as render, componentDidMount, componentDidUpdate, etc.

/*
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <div>This is my custom component.</div>;
  }
}
*/

//What are Constructor in class components? When to use them?
//Constructor is a "special method" that is "called when an instance of class is created".
//Constructor is "used for initilizing the component's state" or performing any setup that is needed before the component is rendered.

//what is the role of super keyword in constructor?
//super keyword is used in the constructor of class component to "call the constructor of its parent class".
//this is necessary to ensure that the initilization logic of parent class is executed.

//What is the role of render method in component life cycle?
//Render() method "return the React Elements" that will be rendered to the DOM.

//How state can be maintaine in a Class Component? (v.imp);
//two step process
//this.state property is used to render the updated state in the DOM.
//this.setState() method is used to update the State.

/*
class ExampleComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0 //Initilizing the State
        }
    }

    const handleIncreament = ()=>{
        this.setState((prevState)=>({
            count :prevState.count + 1,
        }))
    }

render(){
    return(
        <>
        <div>
        <h2>Counter {this.state.count}</h2>
        <button onClick={this.handleIncreament}>Increment Counter</button>
        </div>
        </>
    )
}

}
*/

//what is the role of ComponentDidMount() method  in component life cycle?
//to perform the side Effects in browser (fetching data from the API)

//29. Data types in Javascript.
//primitive data type : string,number,boolean,null,undefine (store single value)
//non-primitive data type : array,object (store multiple value)

//30. API Calling Sign Up,Login,Add,List,Update,Delete with Dialog Box  with file also upload you have to integrat filter like date wise, search,pagination,category wise

//31.What is Debounce function (scrolling,resizing,typing)
//calling a functions only after certain threshold time from the last invocation.
//If we’re searching for some product in the search bar(say in ecommerce website), then instead of hitting API for each letter, through this, we can call it, after user has stopped for a while, say 300ms.

/*

const getData = ()=>{
  console.log("fetching data...");
}

function debounceFunc(func,delay){
  let timer ;
  return function(){
    let context = this;
    
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context)
    }, delay);
  }
}

const debounceMethod = debounceFunc(getData,300);

/*

//32. What is Throttling
//Limiting the function call rate by "only" making the "next" call after some time interval.
//Eg. if api call happen at button click and user is continuously clicking the button , the api call would be made continuously which is costly. So, through throttling, we can prevent this.

const throttleFunction = (fn,limit)=>{
    let flag = true;
    return function(){
      if(flag){
        fn();
        flag = false;
        setTimeOut(()=>{
          flag = true;
        },limit)
      }
    }
}

//debouncing delays the execution of a function until a certain amount of time has passed since the last invocation, throttling ensures that the function is not executed more than once within a specified time interval.


//33.Error Handling in React Error Boundry.
//Error Boundaries are "React components" that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire React application.

//34. why we can not use async before callback in useEffect(async()=>{},[])   
//The reason for this is because useEffect expects its cleanup function "to return either undefined or a function" (if cleanup is required), "not a Promise".
//Here are some common scenarios where cleanup functions are useful:
//1.Clearing Timers or Intervals: If you set up any timers or intervals in your effect, it's essential to clear them to prevent memory leaks once the component unmounts or the effect re-runs.
//2.Subscription Cleanup: If your effect sets up any subscriptions (such as with WebSockets or GraphQL subscriptions), it's crucial to unsubscribe when the component unmounts.
//3.main use cases for cleanup functions in useEffect. They ensure that your application behaves correctly and efficiently, avoiding memory leaks and unnecessary resource consumption

//35.In JavaScript, async and await are typically used together to work with asynchronous code in a synchronous-like manner. Using await outside of async function (will result in SyntaxError)
//async: The async keyword is used to declare an asynchronous function. It allows you to use the await keyword inside the function "to pause execution until a promise is resolved". The async function always returns a promise, which resolves with the function's return value or rejects with an exception thrown within the function.
//await: The await keyword is used inside an async function "to wait for a promise to resolve". It can only be used within an async function.

// Akshay Saini Tips for Interview 
//current React version 18 stabel
//current Node version 21 stabel
//current npm version 9

// 36) What are React Hooks.: Prepare this in order
//Hooks are introduced in 16.8 version of React.
//React hooks are "in-built functions" provided by react that allow functional components to "use state" and "lifecycle features".

/*
- useState
//useState Hook "allows" functional components to "manage state".
//Prior to the introduction of Hooks in React 16.8, state management was only possible within class components using the this.state property. However, with the introduction of Hooks, functional components can now manage state using the useState Hook.
//working:
//useState function "accepts" initial state value(optional) as argument and returns array with two elements
//first element is the current state value
//second element is the function that is used to update the state
//When state of the component changes, React will re-render the component with the updated state.

- useEffect
//The useEffect hook in react is used to perform "side effects" in functional components. 
//for Example, data fetching from API, subscribing to external data sources, or any operation that needs to be executed after a component renders or when certain dependencies change.
//The useEffect hook "accepts" two arguments: a callback function and an optional array of dependencies. 
//The first argument is the callback function, which contains the code that performs the side effect.
//The second argument is an optional array of dependencies. If provided, the effect will only run when one of the dependencies changes. If omitted, the effect will run after every render.

//createContext and useContext()hook (v.imp)
//In React createContext() and useContext hook is "used to manage state globally" instead of passing down the props to each nested level.
//What are createContext() method? What are Provider and Consumer properties?
//The createContext() function is "used to create a new context object".
//It takes an optional parameter, defaultValue, which represents the initial value of the context.
//The createContext() function returns an object with two properties: Provider and Consumer.
//The Provider property is responsible for "providing" the context value to all its child components.
//useContext() method or Consumer Property can be used to consume the context value in the Child Components.

- useContext (v.imp)
//The useContext() hook allows functional components to consume a context value.
//It takes a context object (created by createContext()) as an argument and returns the current context value.
//It allows components to access the nearest matching provider's value in the component tree
//useContext in React provides way to pass data from parent to child component without using Props.

//MyContex.js

import {createContext} from "react"
const myContext = createContext();
export default myContext;

//Parent.js

import myContext from './myContext';

const Parent = ()=>{
    const contextValue "Hello  from context!";
return(
    <>
    <MyContext.Provider value={contextValue}>
    //Your application components
    <Child />
    </MyContext.Provider>
    </>
)
}
export default Parent;

//Child.js

import MyContext from './MyContext';

const Child = ()=>{
    const ContextValue = useContext(MyContext);
    return <p>{ContextValue}</p>
    // return(
    //     <MyContext.Consumer>
    //     {(contextValue)=><div>{contextValue}</div>}
    //     </MyContext.Consumer>
    // )
}
export default Child;

//When to use useContext() hook instead of props in real application?
//use useContext instead of Props when you want "to avoid prop drilling" and access context values directly within deeply nested components.
//useContext can be use in
//1.Theme Switching application(dark/light)
//2.Localization(Language Selection)
//3.Notification System

- useReducer(to manage complex state logic)
// It is an alternative to the more commonly used useState hook.
//useReducer Hook is used for "managing complex state logic" within functional components.
//The useReducer hook "accepts" a "reducer function" and an "initial state", and returns the "current state" and a "dispatch function".
// The reducer function takes the current state and an action as arguments, and returns a new state based on the action type.

import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  // Initializing state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;



- useMemo(Performance) (v.imp)

//The useMemo hook in React is used for memoization. Memoization is an optimization technique that stores the result of expensive function calls and returns the cached result when the same inputs occur again, instead of recomputing the result. 

//useMemo, React can store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render.


Imagine we have a function that does some heavy lifting, like calculating a complex math problem or formatting data. Normally, React recalculates this function every time our component renders, even if the inputs are the same. That can slow things down.

But with useMemo, React remembers the result of that function as long as its inputs stay the same. So, if your inputs don't change, React just grabs the stored result instead of recalculating it every time. This saves time and makes your app snappier.

In simple terms, useMemo is like having a smart assistant who remembers the answers to math problems, so you don't have to solve them again and again.
import React, { useMemo, useState } from 'react';

function MyComponent({ a, b }) {
  // Memoizing the result of the expensive computation
  const result = useMemo(() => {
    console.log('Computing result...');
    return a * b;
  }, [a, b]); // Dependencies array: recompute if 'a' or 'b' change
  
  return <div>Result: {result}</div>;
}

function App() {
  const [valueA, setValueA] = useState(5);
  const [valueB, setValueB] = useState(10);

  return (
    <div>
      <input value={valueA} onChange={(e) => setValueA(parseInt(e.target.value))} />
      <input value={valueB} onChange={(e) => setValueB(parseInt(e.target.value))} />
      <MyComponent a={valueA} b={valueB} />
    </div>
  );
}

export default App;


- useCallback(use to memoize function ,memoization) (v.imp)
//The useCallback hook in React is used for memoizing callback functions. It returns a memoized version of the callback that only changes if one of its dependencies has changed.

//useCallback is particularly useful when passing callbacks to child components, as it helps optimize performance by preventing unnecessary re-renders of those components when the parent component re-renders.

//useCallback(callback, dependencies) can be used like useMemo(), but it memoizes functions instead of values, "to prevent recreation upon every render". allowing you to avoid unnecessary re-rendering which makes your application more efficient.


// when a component re-renders, every function inside of the component is recreated and therefore these functions’ references change between renders.
useCallback(callback, dependencies) will return a memoized instance of the callback that only changes if one of the dependencies has changed. This means that instead of recreating the function object on every re-render, we can use the same function object between renders.

import React, { useState, useCallback } from 'react';

function Button({ onClick, children }) {
  console.log('Button rendered');
  return <button onClick={onClick}>{children}</button>;
}

function App() {
  const [count, setCount] = useState(0);

  // Memoizing the increment function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array: re-create callback when 'count' changes

  return (
    <div>
      <Button onClick={increment}>Increment</Button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;


//useCallback vs useMemo
//useMemo is used to memoize values,
// while useCallback is used to memoize callback functions. 
//Both hooks help optimize the performance of React components by memoizing values and functions, respectively, and re-computing them only when necessary.

- useRef(it does not rerender component when updated) (v.imp)
//It allows you to access and interact with DOM nodes directly or to store any mutable value that doesn't trigger a re-render when it changes.
//useRef allows us to "persist values" and "access DOM elements" across renders without causing re-renders.
// It's particularly useful for interacting with the DOM imperatively and storing values that you don't want to trigger re-renders.
//It returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the entire lifetime of the component.

import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
    console.log('Component has been rendered:', renderCount.current, 'times');
  });

  return <div>Render count: {renderCount.current}</div>;
}




// 37) Higher Order Components (HOC): with example (v.imp)
- What?
//Higher order component are functions that "takes another component as an argument" and return a new enhanced component with additional functionality.
//Higher order component allows us to "reuse component logic" in a more flexible and modular way. 

- When?
//Use HOCs when you need to "share common functionality" between multiple components.
//HOCs are useful for such as authentication, authorization, logging, and error handling.

- Why?
//Reusability:-HOCs promote code reuse by encapsulating common logic in a single function that can be applied to multiple components.
//Avoiding Prop Drilling: HOCs can be used to inject props or behavior into deeply nested components without manually passing them down through multiple levels of component hierarchy.

- How?
//code example


// 38) Life Cycle Methods of Components:
- Class Components
- Mounting
- Updating
- Unmounting

// 39) State management (all about data):
- State/Props
//1.State holds information about the components.
//1.Props are used to pass data from one component to another.

//2.State is mutable and can be updated using the setState() method. 
//2.Props are immutable and cannot be changed by the component itself.

//3.State changes can be asynchronous.
//3.Props are read-only.	

//4.State cannot be accessed by child components.
//4.Props can be accessed by the child component.	

//5.State cannot make components reusable.
//5.Props make components reusable.	

// 40) Redux or Zustand: Redux is use when application is complex and large
- How redux works?
- Why?
- When?
- Redux Toolkit (RTK)

//What is Action 
//An action is simple javascript object ,Action tells store change is needed

//What is Reducer
//A reducer is pure function which accept/takes previous state and action as an argument and return new state as a result


// 41) Custom Hooks:
- When to use?
- Code
- Why? (to make code clean, maintainable, readable, reusable)

// 42) Lazy Loading (Very imp and highly asked):
- Code splitting/Chunking/onDemandLoading/Lazy Loading/dynamic bundling/dynamic imports
- Chunking
- Suspense

// 43) Virtual DOM:
- Renders
//When changes occur in your application (due to state or prop changes), React re-renders the affected components in a virtual DOM tree. This process generates a new virtual DOM representation based on the updated state and props.

- Reconciliation Algorithm
//React then compares the newly generated virtual DOM tree with the previous one. It does so by recursively traversing the virtual DOM trees, starting from the root and comparing each element and its children.

- Diff algorithm
//During the reconciliation process, React uses a diffing algorithm "to identify the differences between the old and new virtual DOM trees efficiently". It looks for changes such as additions, removals, or updates to elements.

- How does render work?
//Once React identifies the differences between the old and new virtual DOM trees, it calculates the minimum set of changes needed to update the real DOM to reflect the new state of the application. This process optimizes performance by reducing unnecessary DOM manipulations.
//Finally, React applies the computed changes to the real DOM, "updating only the parts of the DOM that have changed". This results in a more efficient and performant rendering process, especially for complex user interfaces with many components.

-Is the Shadow DOM the same as the Virtual DOM?
//No, they are different. The Shadow DOM is a "browser technology designed primarily for scoping variables and CSS in web components". The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

- React Fiber
//React uses internal objects called “fibers” "to hold additional information about the component tree".
Fiber is the "new reconciliation engine" in React 16. Its main goal is to enable "incremental rendering" of the virtual DOM.


// 44) What is Server Side Rendering(uses Next.js) vs Client Side Rendering(Reactjs and Vuejs)? (important) :
- What?
//Server-side rendering (SSR) and client-side rendering (CSR) are two approaches to rendering web pages in web development.
- Difference
1.Rendering
//server generates the HTML content for the requested page on the server, and sends the complete HTML document to the client.
//CSR, the server sends a minimal HTML document along with JavaScript bundles to the client. The browser then executes the JavaScript to render the page dynamically on the client-side.

2.Initial Page Load
//SSR delivers fully rendered HTML to the client, so the browser can display the content immediately upon receiving the response from the server.
//CSR initially loads a skeleton or shell of the page, with content placeholders, while JavaScript loads and processes data to render the complete page dynamically.

3.SEO (Search Engine Optimization)
//SSR is beneficial for SEO because search engine crawlers can easily index the content since it's already present in the initial HTML response.
//CSR can present challenges for SEO since search engine crawlers may not execute JavaScript, potentially leading to content not being indexed or indexed with delays.

4.Performance
//SSR can potentially provide better perceived performance for users on slower network connections
//CSR may result in slower initial page load times, especially for larger applications, as the browser needs to download and execute JavaScript bundles before rendering content.

5.Use Cases
//SSR is well-suited for content-heavy websites, static websites, and applications where SEO is critical.
CSR is often preferred for highly interactive web applications, single-page applications (SPAs), and applications that require real-time updates.

// 48) Routing (Role-based access control-RBAC)
- react-router
- How do you manage protected routes?
- How do you handle routes?
- query params
- Dynamic routing  /user/user/:id or username

// 45) Testing
- React Testing Library
- Unit Testing(testing single component)
- Integration Testing (testing multiple components)

Hack for interview: Try to mention that the code you wrote is testable and try to write test cases.

// 46) Async Tasks
- API Calls
- useEffect in depth
- Events
- Promises //Callback hell 
- setTimeout,setInterval

// 47) Reusability, Readability, modularity, testability (Coding Practices) used this keywords in iterview
// in Machine Coding Round // make code more Reusability, Readability, modularity, testability

// 48) Performance (Important)
 1.Lazy loading (Shimmer UI)
//Use code splitting to split your application code into smaller chunks that are loaded asynchronously.

2.Asset optimization (how do you optimize js, css code)
3.Impleament the Suggestions given by Lighthouse report
// It audits web pages for performance, accessibility, best practices, and SEO, and generates a report on how well the web page performs in these areas.

- Writing optimized code

- Bundler
//Analyze your bundle size using tools like "Webpack Bundle Analyzer" or the built-in tools in "Create React App".
Remove unused dependencies and code.

- CDN / Server level

- Rendering of components/Performance Monitoring
Use performance monitoring tools like "Lighthouse", "Google PageSpeed Insights", or "Web Vitals" to identify performance bottlenecks and areas for improvement.

-Memoization and Memoization:
//Memoize expensive calculations or computations using techniques like React's useMemo hook or memoized selectors in Redux.
//Memoize function components using React's React.memo to prevent unnecessary re-renders.

-Optimize Network Requests:
//Use caching strategies (e.g., HTTP caching, service worker caching) to reduce the number of requests and improve response times.

// 49) Styling 
- Tailwind pros and cons 
- StyleX //By facebook recently
- Bootstrap
- Material UI
- Ant UI
- CSS / SCSS 
//what is advantage of using tailwind over bootstrap 

// 50) Accessibility
// 51) Security
//we can implement security with "Lazy Loading" so it load only request code insted of loading all the code once
//By Using JSON web token in axios request
//By using secret key that want to be send at api calling time


// four pillars perforamce accessibility,testablity,security

*/

//52. when token expire 
//I have 2 approaches that i used...
/*
1) if it got status code in response 401 then I'll simple logout and tell user to login again with new token
2) If there is a support of refresh token from Backend then I'll use axios interceptor...when i make parallel api calls and first time my token gets expire then that time i got some error for that api call...then I'll call another api using interceptor and get refresh token replace that token with my current expired one token and move forward with that refresh token
*/

//53. map vs forEach Method 
//.map() and .forEach() are both array methods that allow you to loop through an array, but they differ in what they return.
//.map() returns a new array with the same length as the original array, where each element is the result of applying a callback function to the original element.
//forEach() does not return anything, but it simply executes a callback function on each element of the array

//polyfill for map method 
/*
function myMap(cb){
let self = this;
let arr = [];
for(let i = 0 ; i < self.length;i++){
    arr[i] = cb(self[i],i,self)
}
return arr;
}

Array.prototype.myMap = myMap;
const arr1 = [10,20,30];
const resularr = arr1.map((item)=> item * 2);
console.log("resularr",resularr)
*/

//polyfill for filter 
/*
Array.prototype.myFilter = function(cb){
    let arr = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i],i,this)){
            arr.push(this[i])
        }
    }
    return;
}
*/

//polyfill for reduce method 
/*

if(!Array.prototype.reduce){
  Array.prototype.reduce = function(callback,initialValue){
    if(callback !== "function"){
      throw new TypeError(callback , + "is not a function")
    }

    let array = this;
    let lengtharr = this.length
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    for(let i = initialValue !== undefined ? 0 : 1 ; i < lengtharr ; i++){
      if(i in arr){
        accumulator = callback.call(undefined,accumulator,arr[i],i,array);
      }
    }
    return accumulator
  }
}
*/

//54. how we can make map method accesible to entire react app 
/*
1.Create a Utility File: You can create a separate file, say arrayUtils.js, and define your custom myMap method in it.
2.Export the Method: Export the myMap method from arrayUtils.js so that it can be imported elsewhere.
3.Import and Use: Import the myMap method wherever you want to use it in your React components.
Here's how you can implement this:
// arrayUtils.js
export function myMap(cb) {
  let self = this;
  let arr = [];
  for (let i = 0; i < self.length; i++) {
    arr[i] = cb(self[i], i, self);
  }
  return arr;
}

import { myMap } from './arrayUtils';
Array.prototype.myMap = myMap;
// Now you can use myMap method across your React app
const arr1 = [10, 20, 30];
const resularr = arr1.myMap((item) => item * 2);
console.log("resularr", resularr);
*/
//55. What is DOM?
//Dom stand for Document Object Model
//Dom represents the structure of a web page as a tree-like structure.
//Each element of the web page, such as paragraphs, headings, images, etc., is represented as a node in the DOM tree.
//These nodes can be "manipulated" using JavaScript.

//What is Browser Object Model (BOM)?
//The Browser Object Model (BOM) is used to "interact" with the browser.
//The default object of browser is window.
//The BOM includes objects such as: Window,Document,Location,History,Screen objects.

//56. when you use useCallback hook?
//The useCallback hook in React is used to memoize functions, preventing them from being recreated on every render unless their dependencies change. It's primarily used to optimize performance in scenarios where you have a component that relies on functions as props or involves heavy computations within functions.


//57. what is the difference between props and state 
//In React, both props and state are used to manage data
//Props
//Props are short for properties and are used to pass data from parent components to child components.
//They are immutable, meaning they cannot be modified by the component receiving them. They are read-only.
//Props flow in a unidirectional manner, from parent to child components.

//State 
//State is used to manage component-specific data that can change over time.
//State is mutable and can be updated using the setState() method provided by React.
//State is private to the component owning it, meaning it is not accessible or modifiable from outside the component.
//Changes to state trigger re-renders, updating the component UI to reflect the new state.

//58. in react how many ways we can pass data between components? can we pass data from  child component to parent component 
//1.Props
//Props (short for properties) are used for passing data from parent to child components. 
//Props are immutable and are passed down the component tree.

//2.useContext
//Context provides a way to pass data through the component tree without having to pass props manually at every level.
// It's designed to share data that can be considered "global" for a tree of React components.

//3.Redux or other state management libraries
//Redux is a predictable state container for JavaScript apps. It helps manage the state of your application in a single immutable state store, which can be accessed and modified from any component.
//Redux is especially useful for large-scale applications with complex state management needs.

//4.Event Callbacks
// You can pass callback functions from parent components to child components as props. Child components can then call these callbacks to communicate events or pass data back to their parent components.

//in React can we pass data between child component to parent component
//Yes, in React, you can pass data from a child component to a parent component by using callback functions. The parent component can pass a function down to the child component as a prop, and the child component can then call this function and pass data to it.


//59. how we can  use Routing in React ? What is Routing and Router in React?
//Here's a basic guide on how to use React Router for routing in a React application:
//in short 1.install React Router 2.crate Navigation 3.Create Routes


//1.First, we need to install React Router in your project.
//by doing npm install react-router-dom

//2.Set Up Routes: Define the routes for your application using the BrowserRouter, Route, and Routes components provided by React Router. Typically, this is done in the main component of your application, such as App.js.

/*
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
        <Route path="/*" element={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;

*/

//3.Create separate components for each route. These components will represent the different views or pages of your application.
/*
// Home.js
import React from 'react';

function Home() {
  return <h2>Home Page</h2>;
}

export default Home;
*/

//4.Navigating Between Routes: Use the Link component provided by React Router to create navigation links between different routes.
/*
// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
*/

//Routing
//Routing allows you to build single-page applications (SPAs) with multiple views or pages, where each view corresponds to a different URL

//Router 
//React router is library for handling routing and enable navigation and rendering of different components "based on the url".

//What is router and Route(v.imp)
//Router
//root container for declaring your "collection of routes".

//Route 
//used to define route and specify that component that should render when the "route matches".

//What is Outlet
//An <Outlet> should be used in parent route elements to "render their child route elements". This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.



//60. how to create object in react js
//with help  of object.create method we can create new object


//61. what is the use of slice method 
// to extract particular part of the string we can use slice method 




//62. difference between var and let keyword
// 1.Variables declared with var are function-scoped or globally scoped.
//1. Variables declared with let are block-scoped.
//2. with let we can not redeclare variable with same name.
//2. with var we can be redeclare variable with same name.
//When a variable is declared with let inside a block (like within an if statement, loop, or a function), it is only accessible within that block and any nested blocks.
/*
// Using var
function exampleVar() {
    if (true) {
        var message = 'Hello';
    }
    console.log(message); // Outputs: Hello
}
exampleVar();

// Using let
function exampleLet() {
    if (true) {
        let message = 'Hello';
    }
    console.log(message); // Throws ReferenceError: message is not defined
}
exampleLet();

*/

//let vs Const 
//1.let and const both are the block scope(we access throughout that block only)
//2.with const we can assigned value only once after we can not changed it 
//3.with const keyword we have to declare and assigned the value in the same line/time


//63. difference between == vs ===
//== and === are both comparison operators
// == is use to check the value //The == operator compares two values for equality, but it performs "type coercion" before making the comparison.
//Type coercion means that if the two values being compared are of different types, JavaScript will attempt to convert them to a common type before making the comparison.
//where as === used to check the value and data type
//The === operator also compares two values for equality, but it does not perform type coercion.
//In order for two values to be considered equal with ===, they must be of the same type and have the same value.


//64. async await 
//async is keyword we use before the function to make async function
//this async function always return a promise
//async and await combo used to handle promises
//await can only be used under async function 

//why  we  need to use async await 
/*
const p = new Promise((resolved,reject)=>{
    resolved("Promise is Resolved")
})

function getData(){
    p.then((res)=>console.log(res))
}

getData();

*/


//65. shallow copy vs deep copy
/*
//shallow copy is copy of main objeect if there is a change in one object so it  reflected in the other object
//A shallow copy creates a new object/array, but it doesn't create copies of nested objects/arrays. Instead, it copies references to the nested objects/arrays. This means that changes made to nested objects/arrays in the original will affect the shallow copy, and vice versa.
const originalArray = [1, 2, [3, 4]];
const shallowCopy = [...originalArray];
originalArray[2][0] = 10;
console.log(originalArray); // Output: [1, 2, [10, 4]]
console.log(shallowCopy);   // Output: [1, 2, [10, 4]]

//A deep copy, on the other hand, creates a completely new object/array with all nested objects/arrays also copied. Changes made to the original object/array will not affect the deep copy, and vice versa.

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}

const originalArray = [1, 2, [3, 4]];
const deepCopyArray = deepCopy(originalArray);

originalArray[2][0] = 10;

console.log(originalArray);    // Output: [1, 2, [10, 4]]
console.log(deepCopyArray);    // Output: [1, 2, [3, 4]]

//Shallow copy creates a new object/array and copies references to nested objects/arrays.
//Deep copy creates a completely new object/array with copies of all nested objects/arrays.
*/

//66. what is Event Loop
//Javascript is the synchronous single threaded language 
//single threaded means we have only one call stack and all the js code execute in this call stack only which is present in JS engine, which is run in the browser.
//the job of the Event loop continuously checks for the call stack and callback queue and microtask queue, and if we have something in callback queue AND the call stack is empty, it pushes callback method into call stack.
//Microtask queue This is exactly similar to callback queue but with higher priority. All callback function coming through promises and mutation observers, will go into microtask queue. Everything else goes into callback queue(All Callback Functions , SetTimeOut,DOM APIs(Event Listeners and all)).

//Web APIs
//1.Settimeout() 2.DomAPIs 3.LocalStorage 4.console 5.LocalStorage 6.fetch()
//EVENT LOOP

//MicroTask Queue(High Priority)
//All Promises , Mutation Observer
//Mutation Observer checking is there any mutation in DOM TREE or not ,if there is mutation that time it execute some callback function 
//All Promises (callback function return through promises )

//Callback Queue/Task Queue(Less Priority)
//All Callback Functions , SetTimeOut,DOM APIs(Event Listeners and all),

//67. diff between setInterVal and setTimeout
//setInterval it calls the function repeatedly after certain period of time
//setTimeout call the function after certain period of time

//68. API Methods 
// Get method is used the receive the records from the  server
//POST method is used to  send the records/data to the server  // it creates new record to the server
//PUT methods is used to update the existing record on  the rerver 
//The PUT method is used to update or replace an entire resource at a specific URI.
//PATCH vs PUT method
//The PATCH method is used to partially update a resource at a specific URI.
//Unlike PUT, PATCH is not intended to replace the entire resource. Instead, it applies a set of changes to the existing resource.
//In summary, while both PUT and PATCH are used to update resources, PUT is used for full replacements of resources, whereas PATCH is used for partial updates or modifications.
//difference between POST vs PATCH METHOD
// post is used to create the new record to server
// where as put is used to update the existing record it replaces existing record
//DELETE methods is used to delete record from the server

//69.can you explain some  status code that you get from the API response 
/*
//102 there is no response availabla as of now but server has receive the request 
//2xx - Success:
//200 OK: The request has succeeded. This is the most common status code and indicates that the request was received, understood, and accepted.
201 Created: Indicates that the request has been fulfilled and a new resource has been created as a result of it.
204 No Content: Indicates that the server successfully processed the request, "but there is no content to return".
//3xx - Redirection:
//301 Moved Permanently: Indicates that the requested resource has been permanently moved to a different URI, and the client should update its links accordingly.
//4xx - Client Error:
400 Bad Request: Indicates that the server could not understand the request due to malformed syntax or other client-side errors.
401 Unauthorized: Indicates that authentication is required and has failed or has not been provided.
403 Forbidden: Indicates that the server understood the request but refuses to authorize it. Access is denied to the requested resource.
404 Not found
//5xx - Server Error:
500 Internal Server Error: Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
503 Service Unavailable: Indicates that the server is currently unable to handle the request due to temporary overload or maintenance of the server.
*/

//70. how many library you use for HTTP request 
//use fetch and axios

// difference between fetch vs axios
//1.fetch is the "inbuilt browser library" 
//1.axios is "third party library" we need to install it.

//2.Axios performs automatic transforms of JSON data. 
//2.Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.

//99. What is Hoisting in JavaScript 
//Hoisting is a Phenomena in JS through which we can access the variables and functions even before they have "initialized", without any error.
//console.log(x); //perfectly fine but o/p will be ‘undefined’
//x = 90;
//let & const

/*
let & const are hoisted but stored in different memory space than other variables like var. (And hence they cannot be access via window object or
this specifier)
They cannot be accessed until they’re initialized. Hence, the time from hoisting these variable(s) and initialization is temporal dead zone, and during this we cannot access let & const, in turns throws Reference error.
let cannot be re-declared in the same scope unlike var, it will throw Syntax Error.
In case of const we need to declare and initialise at the same line/time.
If we try changing the value later at some line to const variable, we’ll get error 
*/

//  1.these are Parentheses (), 2.these are brackets [] , 3.these are curly baces {} 

//71.how js works in  the  browser
/*
//every browser  has the  js engine ,there is call stack and memory heap which allocate memory to each and every  object 
//call stack where all the code where executed 
//Execution Context Stack: As the JavaScript engine encounters function calls, it creates new execution contexts and pushes them onto the execution context stack (also known as the call stack). Each execution context contains information about the function being executed, its scope, and any variables it uses.

//Event Loop and Asynchronous Operations: JavaScript in the browser is single-threaded, meaning it can only execute one task at a time. Asynchronous operations such as AJAX requests, setTimeout, and event handlers are managed by the event loop. When an asynchronous operation completes, its callback is added to the event queue.

//Event Queue: The event queue holds tasks (callbacks) waiting to be executed. When the call stack is empty, the event loop takes tasks from the event queue and pushes them onto the call stack for execution.
*/

//72. difference between synchronous and asynchronous 
//In JavaScript, synchronous and asynchronous refer to two different ways of handling code execution:

//Synchronous Execution:
//In synchronous code, statements are executed line by line in a sequential manner.
//Each statement waits for the previous one to finish before executing.
//Synchronous operations block the execution thread until they are completed.

//Asynchronous Execution:
//In asynchronous code, statements don't necessarily execute in sequence. Instead, they are scheduled to run after a certain event occurs or after a specified amount of time.
//Asynchronous operations don't block the execution thread; instead, they allow the program to continue executing other tasks while waiting for the asynchronous operation to complete.


//73. how to make asynchronous task to the syncronous
// for that we can use async await 


//74. what are the closures?
//A Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). That means, each function in JS has access to its surrounding environment (which includes variables and functions).
// there is the parent scope and child . there is two  functions  inner function and outer function where inner function has the access to the outer function variable 
// means inner function has the access to the outer function variable this is the concept of closures

//75. what is function currying in js 
//function currying is a Technique in which we convert a function with multiple arguments into several functions of a single arguments in sequence.
/*
function add(x) {
  return function(y) {
    return x + y;
  };
}
console.log(add(3)(4)); // Output: 7    
*/

//75. why we use promises what is promises
//promises are used to perform asynchronous oprations
//Promises are used in JavaScript to handle asynchronous operations in a more manageable and readable way. They provide a cleaner alternative to traditional callback-based asynchronous code, making it easier to write and reason about asynchronous operations.


//76. from both this given string the merge the string
/*
'abcdef'
'123'
'a1b2c3def'

'abc'
'123456'
'a1b2c3456'

function mergeStrings(a,b){
    let len = Math.min(b);
    let temp 
    for(let i =0; i<len ; i++){
        temp += a[i] + b[i]
    }
    return temp + a.slice() + b.slice()

}
*/

//77.block element vs inline element 
//Inline Elements: Inline elements do not have a width or height specified by default. Their width is determined by their content, and they cannot have width or height applied directly.
//ex : div,p,heading,ul,li
//Block-Level Elements: Block-level elements have a width of 100% by default, meaning they stretch to fill the entire width of their container. Their height is determined by the content they contain, or it can be explicitly specified.
//span,a,img,input,bold,strong,

//78. css priority/Specificity
//Here's a summarized priority order:

//1. Inline styles (highest priority)
//2. Internal (embedded) styles
//3. External stylesheets (lowest priority)
//4. Specificity, Inline styles have the highest specificity, followed by ID selectors, class selectors, and element selectors.
//5. Source order

//79. what is declarative and  imparative way of programming
//react is declarative way of programming 
//and javascript is the imparative way of programming
//imperative programming "involves explicitly specifying the steps to achieve a task", while declarative programming focuses on "describing the desired outcome" without detailing the specific operations.

//80. element  vs component 
// An element represents a single unit of UI, such as a button, a paragraph, a header, etc.
//Components can be composed of multiple elements and other components, allowing for a hierarchical and modular approach to building UIs.

//81. difference between promise vs async await 
// both promises and async/await are used for handling asynchronous operations in JavaScript, async/await provides a more readable and convenient syntax for writing asynchronous code, especially when dealing with multiple asynchronous operations or complex error handling scenarios
//Promises were introduced in ES6(2015) and provide a way to work with asynchronous code in a more organized manner.
//Promises represent a value that might be available now, or in the future, or never.
//A promise can be in one of three states: pending (initial state), fulfilled (resolved), or rejected.
//Promises use .then() and .catch() methods for handling success and error cases, respectively.

//Async/Await:
//Async functions are a syntactic sugar built on top of promises, introduced in ES8 (ES2017).
//Async functions allow you to write asynchronous code in a synchronous manner, making it easier to read and understand.
//The async keyword is used to define an asynchronous function, which internally returns a promise.
//The await keyword can be used inside an async function to wait for the resolution of a promise. It pauses the execution of the async function until the promise is resolved and returns the resolved value.
//Async functions can use try/catch blocks for error handling.


//82.Error boundary
//In React, an error boundary is a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire application.

//83. What is Generator Function in Javascript?
//In javascript , generator are the special type of function which allow us to control the execution flow and pause/resume it at certain points.
//Generator function define using "function*" syntax
//and it uses yeild keyword to "produce a sequence of values".
//when generator function is called it returns an iterator called a generator.
//We use the next() method to iterate over the generator object. Each call to next() returns an object with two properties: value (the yielded value) and done (a boolean indicating whether the generator has finished iterating).

/*
function* generatNumbers(){
  yield 1;
  yield 2;
  yield 3;
}
const generator = generatNumbers();
console.log(generator.next()) //{ value: 1, done: false }
console.log(generator.next()) //{ value: 2, done: false }
console.log(generator.next()) //{ value: 3, done: false }
console.log(generator.next()) //{ value: undefined, done: true }
*/
//Generator functions are useful for :
//1.iterators,
 //2.asynchronous programming
 //3. managing stateful logic in a more intuitive way.

//84. what is Prop drilling ? what is Context API , what is Redux ? Difference between Context API vs Redux
// context used in  the  small application and also the react team says that we can use  Context API for those application where state is not changing very frequent where the theme of the website
// and where the cart state change often where discount get added so that time we can use Redux 

//85. difference between controlled and uncontrolled component in React (v.imp)
//In controlled components, form input elements such as <input>, <textarea>, and <select> are fully controlled by React state.
//In uncontrolled components, form input elements are not controlled by React state. Instead, they rely on the DOM to manage their state.

//How to handle forms in React 
//The preffered and recommended approch for handling forms in react is "by using controlled components".


//86. in a component you have model when you click  on  the button this model should be open and when you click outside of this model anywhere this model should be close so how we can achieve this functionality , I have create a custom  model how we can close it 
// we can create an overlay with z index higher than other and opacity something that it does not show and when we click on this overlay that time this model is close


//87. you face an challenge it take two days but you dont get the solution of that logic you google it and you search everywhere how you deal with this 
//first thing i will do is asked for the senior help and with him I will discuss whatever progress I made what research I do till and if the senior is say that it is not all possible so i will be communicate with all my knowledge with these with my product manager


//88. *How JavaScript works?
/*
Ans-Everything in JavaScript happens inside an "execution context".

Execution context has two component
1)memory component[variable environment] 
-This is the place where all variables and functions are stored as key value pairs. eg-{key: value ||  n:2;} 

 2)code component[Thread of execution]
-This is the place where code is executed one line at a time

Note-
*JavaScript is a synchronous single-threaded language

-Single threaded means JavaScript can execute once command at a time
-Synchronous single-threaded that means JavaScript can execute one command at a time in a specific order.

*/

//89. What is Hoisting in JavaScript?
//Phenomena in JS through which we can access the variables and functions even before they have initialized, without any error.
//console.log(x); //perfectly fine but o/p will be ‘undefined’
//x = 90;
/*
let & const are hoisted but stored in different memory space than other
variables like var. (And hence they cannot be access via window object or
this specifier)
They cannot be accessed until they’re initialized. Hence, the time from
hoisting these variable(s) and initialization is temporal dead zone, and
during this we cannot access let & const, in turns throws Reference
error.
let cannot be re-declared in the same scope unlike var, it will throw
Syntax Error.
In case of const we need to declare and initialise at the same line/time.
If we try changing the value later at some line to const variable, we’ll get
Type Error.
Note: In case of const array or object, if we try to change the value, it is
perfectly fine/valid. The property of a const object can be change but it
cannot be change to reference to the new object.
*/

//90. Type of Errors in JavaScript
//1.Reference error // when we try to access a variable which is not declare yet
// console.log(a)
//let a = 10;
//Reference error // can not access 'a' before initilization

//2.Syntax error //when this error show all the code execution stops and does not print/console anything 
//let d = 10;
//let d = 10;
//Syntax Error Identifier 'd' has already been declared
//const b;
//console.log(b); //Syntax error Missing initializer in the  const declaration

//3.Type error // when we try to assign a variable to the const variable
//const c = 10;
//c = 10; //Type error Assignment to the Const Variable

/*
so many things here. I would like to sum up in notes,

-> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
-> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
-> level of strictness ... var<<let<<const.
-> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
    let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
    const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
-> syntax error is similar to compile error. while type and reference error falls under run time error.
-> syntax error ... violation of JS syntax
    type error ...  while trying to re-initialize const variable
    reference error ... while trying to access variable which is not there in global memory.
*/

//91. What is Closuere?
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
/*
//notice use of double parenthesis
function outer(){
var a = 10;
function inner(){
console.log(a);
}
return inner;
}
outer()(); // o/p 10

//Usage of Closure : 
//1.Module Design Pattern
//2.Currying
//3.Function like once
//4.memoize
//5.setTimeOut
//6.Iterators
//7.Mainting state in the Async world

disadvantages :
//1.It consume lot of memory
//2. those variables are not garbage collected still the program expires.

*/

//92. Garbage Collector
//It is a program in the browser/JS Engine which is responsible for freeing up the memory which are unutilised.

//93. What is  First class function ?
/*
The ability of functions to be:
1. Assigned to variable
2. Passed as argument to another function
3. Returned from another function
In JS, is called first class function, aka, first class citizens.
*/

//94. Object.keys()
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
/*
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
*/



//95. Object.values()
//The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

/*
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
*/

//96. JS Engine EXPOSED 🔥 Google's V8 Architecture 🚀 
/*
when you run js code that time global execution context is created and push inside the call Stack
Things learned:
1. JS runtime environment contains all elements required to run JS.
2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
3. JS engine is a piece of code.
4. Process includes Parsing ---> Compilation -----> Execution.
5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
7. Execution and Compilation are done together.
8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
*/

//97. What is Higher Order Function 
// A Function that takes other function as argument or return function from it, is called higher order function, whereas the passed function is called callback function
// Example : Map,Filter,Reduce

//98. What is Callback Function 
//Functions passed as argument into another functions.

//99. What is CallBackHell?
/*
Two issues while using callbacks

1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

2 - Inversion of control
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control. 
*/

//100. What is Promise?
//A Promise is an object that represent the eventual completion or failure of an asynchronous operation.
//Essentialy ,a promise is a return a object to which you can attach the callback,instead of passing callbacks into a function
//State: A Promise can be in one of three states:
//Pending: Initial state
//Fulfilled: The operation has completed successfully.
//Rejected: The operation has failed with an error.
//Promises use .then() and .catch() methods for handling success and error cases. 

/*
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
*/

//Constructing a Promise: Promises are created using the Promise constructor, which takes a function as an argument. This function, called the executor, contains the asynchronous operation logic and is automatically executed when the Promise is created.


// const myPromise = new Promise((resolve, reject) => {
//    Asynchronous operation
//   if (/* operation is successful */) {
//     resolve(result); // Resolve the Promise with a value
//   } else {
//     reject(error); // Reject the Promise with an error
//   }
// });

//Consuming a Promise: We can consume a Promise using .then() and .catch() methods. .then() is called when the Promise is fulfilled, allowing us to handle the result, while .catch() is called when the Promise is rejected, allowing us to handle errors.

// myPromise
//   .then(result => {
//     // Handle successful result
//   })
//   .catch(error => {
//     // Handle error
//   });


//Promise.all()
//The Promise.all() "accepts an array of promises" and "returns a promise" that resolves when all of the promises in the array are "fulfilled" or when the iterable contains no promises. 
//It rejects with the reason of the first promise that rejects

//Promise.any()
//Promise.any() takes an iterable of Promise objects. It returns a single promise that fulfills as soon as any of the  promises in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
//In simple terms Promise.any() is just opposite of Promise.all().

//Promise.race() (jo bhi pehale ho,means race me jo bhi first aye)
//The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

//Promise.allSettled()
//The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// res [
//   { status: 'fulfilled', value: 'first Promise is resolve' },
//   { status: 'rejected', reason: 'second Promise is rejected' },
//   { status: 'rejected', reason: 'third Promise is rejected' }
// ]

//101. this Keyword
//this keyword work differently in different environment 

//this is global space  (it refer to  the window object both in normal and strict mode also)
//console.log(this); output:- Window Object
//this keyword in global space refer to globalObject i.e window 
//so in global space this === window  in browser 
//in Node.js is refer to the global

//this in function scope (in strict mode it will print undefined)
/*
function x(){
    console.log(this); output:- Window Object(in normal mode)
}
x(); //undefined
if we do
window.x(); //window   if we call this way then in strict mode it will print "window object"
*/

//this inside non-strict mode - (this substitution)
//if the value of this keyword is undefined or null
//this keyword will replaced with global object
//only  in non strict mode


//this inside a object's method
//what is the difference between function and method 
//when you use function inside a object is called "method"

/*
const obj ={
    a : 10,
    x : function(){
        console.log(this);  //In object "this" refer to the "obj(Object)"
    }
}
obj.x();  //print {a:10,x:f}
*/

//difference between call , apply , bind (Sharing Method)
/*
const student1 = {
    name:"Aman",
    printName:function(){
        console.log(this.name);
    }
}
student1.printName() // Aman

//we can share method also

const student2 = {
    name:"Divya",
}

student.printName.call(student2)  //value of this is student2(we will override this)
*/


//this inside arrow function
//arrow function dont have there own "this" binding,they take value of there lexical environment where they enclosed 
/*
const obj = {
    name:"Dimple",
    x:()=>{
        console.log(this);  //here this represent to the window object because arrow function dont have there own this
    }
}
obj.x();  //window object
*/

//this inside nested Arrow function 
//enclosing lexical  content

/*
const obj2 = {
    name:"Ajay",
    x:function(){
        const arrowFunc  = ()=>{
            console.log(this); //{name:"Ajay",x:f()} arrow function dont have there own this binding here "this" refer to the lexical this where it refer to the parent this 
        }
    }
}
*/

//this inside DOM element  => reference to the HTML element
//<button onClick="alert(this)">click Here</button>  //object HTMLButtonElement

//102.difference between call , apply , bind (Sharing Method)

//call Method
//with call method we can do a  funcion borrowing we can borrow a fucntion from other object and used with the data of other object
//in call first argument refer to the name of the object and other argument are optional comma seperated
/*
const student1 = {
    name:"Aman",
   
}

 let printName=function(state){
        console.log(this.name + "from" + state);
    }

printName.call(student1,"Deharadun",,,) // Aman

//we can share method also

const student2 = {
    name:"Divya",
}

printName.call(student2,"Mumbai")  //value of this is student2(we will override this)
*/
//difference between call and apply 

//only diffrence between call and apply is how  we can pass argumnts
//in apply we pass arguments as array list

//printName.apply(student2,["Mumbai","Maharashtra"])

//bind method is same as call method only difference is that it does not call in same line insted it bind with this method make copy and called it later
//bind method return the copy of that method so we can call it later 
//let printMyName = printName.bind(student,"Dehradun");
//printMyName()


//103. What is JavaScript ? What is the role of Javascript engine? (v.imp)
//Javascript is synchronus single threaded language , we used javascript to convert static web pages to ineractive and dynamic web pages.
//Javascript is programming language that is used for converting static web pages to "interactive and dynamic" web pages.
//Javascript engine is a program present in the web browser that execute javascript code.

//104. What are the Client Side and Server Side? (v.imp)
//A client is a device,application or software component that "requests" and consumes services or resource from a server.
//A server is a device,computer or software application that "provides" resources or services to the clients

//105. Js String Methods (v.imp)
//charAt(index): Returns the character at the specified index.
//concat(str1, str2, ...): Concatenates two or more strings and returns a new string.
//includes(searchString, position): Checks whether a string contains the specified substring. Returns true or false.
//indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value within a string, starting the search at the specified index.
//slice(startIndex, endIndex): Extracts a section of a string and returns it as a new string, without modifying the original string.
//split(separator, limit): Splits a string into an array of substrings based on a specified separator, optionally limiting the number of splits.
//substring(startIndex, endIndex): Extracts the characters between two specified indices within a string and returns the new substring.
//toLowerCase(): Converts all the characters in a string to lowercase.
//toUpperCase(): Converts all the characters in a string to uppercase.
//replace(); Replace the occurrences of substring within the string
//trim(): Removes whitespace from both ends of a string.
//charCodeAt(index): Returns the Unicode value of the character at the specified index.
//lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value within a string, searching backwards from the specified index.
//match(regexp): Searches a string for a match against a regular expression, and returns an array containing the results or null if no match is found.
//replace(searchValue, newValue): Searches a string for a specified value or regular expression, and returns a new string where the specified value is replaced with the new value.
//search(regexp): Searches a string for a specified value or regular expression and returns the index of the first match, or -1 if not found.
//trimStart() or trimLeft(): Removes whitespace from the beginning of a string.
//trimEnd() or trimRight(): Removes whitespace from the end of a string.
//valueOf(): Returns the primitive value of a string object.

//106. What is DoM ? difference between HTML and DOM (v.imp)
//The DOM stand for the Document Object Model ,it represents the web pages as "tree like structure" which allows javascript to dynamically access and manipulate the structure and the content of the web page.

//107. What are Selectors in Js (v.imp)
//In JavaScript, DOM (Document Object Model) selectors are used to select and interact with elements on a web page  
//selectors in js help to get "specific elements from DOM" based on some ids,class Names,tag Names

//<div id="myDiv">Text</div>
//const elementById = document.getElementById("myDiv")
//console.log(elementById.innerHTML)

//DOM Selectors 
//1.getElementById(id): Selects an element by its id attribute.
//var element = document.getElementById("myElementId");

//2.getElementsByClassName(className): Selects elements by their class name.
//var elements = document.getElementsByClassName("myClassName");

//3.getElementsByTagName(tagName): Selects elements by their tag name.
//var elements = document.getElementsByTagName("div");

//4.querySelector(selector): Selects the "first element" that matches a specified CSS selector.
//var element = document.querySelector("#myElementId .myClassName");

//5.querySelectorAll(selector): Selects "all elements" that match a specified CSS selector.
//var elements = document.querySelectorAll(".myClassName");

//6.querySelector and querySelectorAll support CSS selectors, allowing for more complex selection of elements based on classes, IDs, attributes, etc.
//Example of using CSS selectors:
/*
// Selects all elements with class "highlight"
var elements = document.querySelectorAll(".highlight");

// Selects the first element with class "highlight"
var element = document.querySelector(".highlight");

// Selects all <a> elements with class "external-link"
var links = document.querySelectorAll("a.external-link");

// Selects all elements with the data-type attribute equal to "button"
var buttons = document.querySelectorAll("[data-type='button']");

*/

//108.What are the data types in js (v.imp)
//data type determines the "type of variable".
//Types of data types in Js
//1.Primitive data type(used to store "single" value) :- Numbers,String,Boolean,Undefined,Null
//Primtive data type are "immutable" meaning there value once assigned, can not be changed.

//2.Non Primitive data type(used to stored "muliple" value):- Array,Object,Function,Date,RegExp
//They are "mutable" there value can be change

//109.What are Operators? what are the types of operators in JS?.
//operators are symbols or keywords used to perform operations on operands.
//x + y = xy;
// x and y are operands
// + and = are operators

//types of operators in JS 

/*
1.Arithmetic Operators:
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Modulus (%)
Increment (++)
Decrement (--)

2.Assignment Operators:
Assignment (=)
Addition assignment (+=)
Subtraction assignment (-=)
Multiplication assignment (*=)
Division assignment (/=)
Modulus assignment (%=)

3.Comparison Operators:
Equal to (==)
Not equal to (!=)
Strict equal to (===)
Strict not equal to (!==)
Greater than (>)
Greater than or equal to (>=)
Less than (<)
Less than or equal to (<=)

4.Logical Operators:
Logical AND (&&)
Logical OR (||)
Logical NOT (!)

5.Bitwise Operators:
Bitwise AND (&)
Bitwise OR (|)
Bitwise XOR (^)
Bitwise NOT (~)
Left shift (<<)
Right shift (>>)
Zero-fill right shift (>>>)

6.Unary Operators:
Unary plus (+)
Unary negation (-)
Logical NOT (!)
Increment (++)
Decrement (--)
Typeof (typeof)
Void (void)
Delete (delete)

7.Conditional (Ternary) Operator:
Conditional (ternary) operator (condition ? expr1 : expr2)

8.Comma Operator:
Comma (,)
*/

//110. What are types of conditios Statement in js ? (v.imp)
//if/else Statement
//ternary Operator
//switch statement

//111. what is loop? what are types loops in js?
//A loop is a programming way to run piece of code repeatedly until certain condition is met.
//types loops in js
//for 
//while 
//do while
//for of 
//for in

//112. What are functions in js? what are types of function in js? (v.imp)
//a function is a block of code that perform specific task

//types of function in js
//1.Named Function Expression
/*
var x = function A () {
//body
}
*/

//2.Anonymous function
//function (){}

//3.function Expression
/*
var a = function () {
    //body
    }
*/    

//4.Arrow function (v.imp)
//const sum = ()=>{}

//5.IIFE
/*
(function example(){
// in strict mode this refers to undefined
console.log(this === window);
})();
// true
*/

//6.Callback Function (v.imp)
//7. Higher Order Function (v.imp)
//8.Function Declaration
/*
function foo() {
    console.log('Hello World');
}
*/

//113.What is Arrow function? what is used of arrow function?
//arrow function is also called as fat Arrow function,is a "simple and sorter way" for defining functions in javascript.

//114. difference between arrow and normal function 
//1.syntax 
//1.Arrow functions have a concise syntax using the => arrow token. They don't need the function keyword, curly braces, or the return keyword if the function body is a single expression.
//2.Normal functions can be defined using either function declarations or function expressions. They use the function keyword and may have a name (in function declarations) and a block body enclosed in curly braces.

//function Declaration()
/*
function Declaration(){
    //body
}
*/    

//function Expression
/*
var a = function () {
    //body
    }
*/    

//2.this Binding:
//Arrow functions do not have their own this context. They inherit this from the "surrounding lexical context" (the enclosing function or global scope).
//Normal functions have their own this context, which is determined by how they are called.

//3.arguments Binding:
//Arrow functions do not have their own arguments object. Instead, they inherit arguments from the "surrounding lexical scope".
//Normal functions have their own arguments object, which is an "array-like object" containing all the arguments passed to the function.
/*
function exampleFunction(a, b) {
    console.log(arguments); // Outputs: { '0': 1, '1': 2, length: 2 }
    console.log(arguments.length); // Outputs: 2
    console.log(arguments[0]); // Outputs: 1
    console.log(arguments[1]); // Outputs: 2
    console.log(arguments[2]); // Outputs: undefined
}
exampleFunction(1, 2);
//The arguments object behaves like an array, allowing you to access individual arguments by index (arguments[0], arguments[1], etc.) 
*/

//115. What is an Array? How to get, add and remove elements from Array? (v.imp)
//An Array is a data type which allow you to "store multiple values" in single variable.

//get => indexOf,find,filter,slice
//Add => push,concat
//remove => splice,shift,pop 
//modify => map,forEach
//other => join(),sort(),reverse(),reduce(),some(),every()

//array methods modify the original array directly
//push(),pop(),shift(),unshift(),splice(),reverse(),sort(),fill()

//158. What are Objects in Js? (v.imp)
//An Object is the data type that allows you to store data in key-value pairs.

//159. What is Scope in js? (v.imp)
//scope determines where variables are defined and where they can be accessed.
//global scope,function scope,block scope.

//160.What is Error Handling in js?
//Error Handling is the process of Managing the errors with try and catch block.

//116. What is Asynchronous Programming in Js? what is its use?
//Asynchronous Programming allow multiple tasks or operations to be initiated and "executed concurrently".
//Asynchronous operations "do not block" the exection of the code.

//Use of Asynchronous operations
//Fetching data from API
//Downloading files
//Uploading files
//Animations and Transitions
//Time taking Operations

//117. What is difference between null vs undefined
//null
//null is assigned to indicate that a variable or object property has no value or that it is explicitly empty. 
//type of null is a object

//undefined
//when variable is declare but not been assigned a value.
//Undefined can be used when you dont have a value right now,but you will get it after some logic or operation.
//type of undefined is undefined

//118. Explain ES6 features
//1.let and const keyword
//both are block scope variable 
//with let keyword we can declare a varible and we can e assign value to it later
//but in const case we have declare and assign value to it same line/time

//2.spread and Rest Operator
// What is the difference between Rest and Spread Operator in Js?(v.imp);
//Spread 
//The spread operator is used to "expand an iterable (like an array or string)" into individual elements.
//It allows you to easily copy elements from one array into another or merge multiple arrays together.

//Rest
//Rest Operator "allows" a function to "accept" an "indefinite number of arguments as an array".

//3.Template literal
//Template literals, introduced in ECMAScript 6 (ES6), are a type of string literal that "allow" for easier and more flexible "string interpolation" in JavaScript. 
//They are enclosed by backticks (` `) instead of single quotes or double quotes.

//4.Arrow function
//5.Promises





//119. Difference between Find and Filter
//Find Method
//Find method returns "first element" that satifies the condition.

//Filter Method
//Filter Method returns the "array of elements" that satifies the condition


//120. What is the Difference between Map and ForEach Array Method 
//1. Return Value
//Map Method iterates over each element in the array and executes a callback function for each element and return new array with the transformed values.
//Where as ForEach method return undefined

//2. Method Chaining
//With Map Method we can chain other methods
//we can not do method chaining with forEach because it returns undefined

//121. What is Array Destructuring in js? (v.imp)
//It introduced in ECMAScript6
//Array Destructuring  allows you to "extract elements from an array" and assign them to "individual variables" in the single Statement

//122. for of vs for in
//for of loop is used to loop through the values of an array.
//for in loop is used to loop through the properties of an Object.
/*
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key); // Outputs: a, b, c
    console.log(obj[key]); // Outputs: 1, 2, 3
}
*/

//123. What is Callback Function 
//A callback function is a function which "passed as an argument" to another function
//JS is synchronous single threaded language but through use of Callback functions we can perform async task.
//Eg, Event listeners make use of this.

//124. What is Higher Order Function
//Higher Order Function is function which take one or more function as an arguments or return a function

//125. What is Pure and Impure Function 
//pure function is a function that always produces the "same output for the same input".
//pure function
/*
function sum(a,b){
    return a + b 
}
sum(3,5); //8
sum(3,5); //8
*/
//Impure Function
//Impure function is a function that always produces the "different outputs for the same input".

/*
let total = 0;
function sum(a){
    total += a;
    return total
}
sum(5) //5
sum(5) //10   when second time called with same argument
*/

//126. what is meant by Function Currying?
//Technique in which we convert a function with multiple arguments into several functions of a single arguments in sequence.

//currying in JavaScript is a process in functional programming in which you can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.  
//In other words, instead of a function taking all arguments at one time, it takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, and so on, until all arguments have been fulfilled.
//Advantage,Modularity
/*

function multiply(a){
    return function(b){
        return a * b
    }
}

let multiplyFunc = multiply(2);
multiplyFunc(5); // 10

*/

//127. What are Template literals and string interpolation in the strings? (v.imp)
// it is feature introduce in EcmaScript6 for "string interpolation and multiline strings" in js.

//128. createElement in js?
// let newElement = document.createElement("div");
//newElement.textContent = "This is newly Created div element"
// document.body.appendChild(newElement)
//<div>This is newly Created div element</div>

//129. What are type of Errors in js?
//1.Syntax Error 
//2.Type Error 
//3.Reference Error 
//4.Range Error 

//130. In how many ways we can create an Object?
//1.Object literal
/*
const obj = {
    name:"Abhay",
    age:28
}

*/

//2.Object Constructor
/*
const obj = new Object();
obj.name = "Abhay";
obj.age = 27;
*/

//3.Object.create Method
/*
const person = {
    name:"",
    age:0
}
const men = Object.create(person);
men.name="Raj";
men.age = 28;
*/

//131. Difference between Array and Object?
//1.Array are collecton  of "values"
//1.Objects are collection of "key value pairs"
//2.Array are denoted by square brackets [].
//2.Object are denoted by curly braces {}.
//3.Elements in array are ordered
//3.Elements in Objects are unordered

//132. how do you add,modify and delete properties of an object?
//add
//var person = {};
//person.name = "Raj"

//modify
//person.name = "Ajay"  //modify or override property

//delete
//delete person.name

//133. what are some common methods to iterate over the properties of an  object?
//1.for in loop
/*
for(let keys in person){
    console.log(keys + ":" + person[keys]);
}
//name :Raj
*/

//2.Object.keys() and forEach() 
/*
Object.keys(person).forEach((values)=>{
    console.log(values + ":" + person[values]);
})
//name :Raj
*/

//3.Object.values() and forEach()
/*
Object.values(person).forEach((values)=>{
    console.log(values);
})
// Raj
*/

//134. how do you check if a property exists in the Object or not?
//1. Using in Operator    (return  boolean value)
//console.log("name" in person);  //true
//console.log("city" in person);  //false

//2. Using hasOwnProperty() Method(Returns true if the object has the specified property as own property; false otherwise.)
//console.log(person.hasOwnProperty("name"));  //true
//console.log(person.hasOwnProperty("city"));  //false

//3. Comparing with undefined
//console.log(person.name !== undefined) //true
//console.log(person.city !== undefined) //false

//135. Difference between deep copy vs shallo copy
//shallow copy in nested object case will changed the parent object property value , if cloned object property value is changed
//but deep copy will not modify parent object property value.
//In JavaScript, when you need to duplicate an object, you have to consider whether you want a shallow copy or a deep copy

//shallow copy  (in shallow copy if we changed clone object value that time it change the parent object value)
/*
let person = {
    name:"Raj",
    age:29,
    address:{
        city:"Mumbai"
    }
}
//Object.assign(target, ...sources)
//target: The target object where the properties will be copied to.
//sources: One or more source objects whose properties will be copied to the target object. 

let shallowCopy = Object.assign({},person);
shallowCopy.address.city = "Pune";
console.log(person.address.city);  //Pune
console.log(shallowCopy.address.city); //Pune
*/

//deep copy (in deep copy if we changed clone object value that time not change the parent object value)
/*
let person = {
    name:"Raj",
    age:29,
    address:{
        city:"Mumbai"
    }
}
let deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = "Pune";
console.log(person.address.city);  //Mumbai
console.log(deepCopy.address.city); //Pune
*/


//136. How do you clone or copy an Object

//1.Spread Syntax (shallow copy)
//let clonedObject = {...originalObject}

//2.Object.assign (shallow copy)
//let clonedObject = Object.assign({},originalObject)

//3.Json.parse() and Json.stringify()  (deep copy)
//let clonedObject = JSON.parse(JSON.stringify(originalObject))

//Pass by value vs pass by reference in js
//Pass by Value:(primitive data type like numbers, strings, and booleans)
//When a variable is passed by value, a copy of the value is passed to the function.
//This means that changes made to the parameter inside the function don't affect the original variable outside the function.
//It's common for primitive data types like numbers, strings, and booleans to be passed by value.
/*
function increment(num) {
    num++; // Increment the value
    return num;
}

let num = 5;
console.log(increment(num)); // Output: 6
console.log(num); // Output: 5 (original value remains unchanged)
*/

//Pass by Reference (or Rather, Pass by Sharing):
//When objects (including arrays and functions) are passed to a function, their reference (memory address) is passed, not the actual object.
//Therefore, changes made to the object inside the function will affect the original object outside the function.
//However, if you reassign the parameter inside the function, it will not affect the original reference.
/*
 function addElement(arr) {
    arr.push(4); // Modify the array
}

let myArray = [1, 2, 3];
addElement(myArray);
console.log(myArray); // Output: [1, 2, 3, 4] (original array modified)
*/
//137. What is Set Object in js?
//The set Object is the collection of "unique values" ,meaning that duplicate values are not allowed.
//Set provides Method for "adding,deleting and checking the existence of values" in the set.
//set can be used to "remove duplicate values" from arrays.
/*
creating a set to store unique values
const uniqueValues = new Set();
uniqueValues.add(5);
uniqueValues.add(10);
uniqueValues.add(5); //Ignore duplicate values
console.log(uniqueValues); //{5,10}

//check size 
console.log(uniqueValues.size); //2

//check element existence
//console.log(uniqueValues.has(10)); //true

//delete element
 uniqueValues.delete(10);
console.log(uniqueValues.size); //1
*/

//138. What is Map Object in js?
//The Map object is the collection of "key value pairs" where each key can be any type,and each value can also be of any type.
//As map maintains the order of key-values pairs as they were inserted.
/*
creating a map to store personal details
const personDetails = new Map();
personDetails.set("name","Raj");

console.log(personDetails.get("name")) //Raj

//check size 
console.log(personDetails.size); //2

//check element existence
//console.log(personDetails.has("age")); //true

//delete element
 personDetails.delete("age");
console.log(personDetails.size); //1
*/


//139. What is Event Delegation in js? (v.imp)
//Event delegation in javascript is a technique where you attach a "single event handler to a parent element" to handle events on its "child elements".
//Event Bubbling => triggered bottom to top
//Event Capturing => triggered top to bottom

//140. What is Event Bubbling in js? (v.imp)
//Event Bubbling is the process in javascript where an event triggered on child element "Propages up the DOM tree",triggering the event handlers on its parent elements.
//Event Bubbling can be stopped by calling stopPropagation() method on event.
/*
<div id="outer">
    <div id="inner">
        <button id="myButton">Click Here</button>
    </div>
</div>
//Get the references of an elements
var outer = document.getElementById("outer");
var inner = document.getElementById("inner");
var myButton = document.getElementById("myButton");

//attach the event handlers with elements
outer.addEventListeners("click",EventBubbling);
inner.addEventListeners("click",EventBubbling);
myButton.addEventListeners("click",EventBubbling);

function EventBubbling(event){
console.log("Bubbling", + this.id); //MyButton inner outer 
}
*/

//141. What is Event Capturing in js?
//Event Capturing is the process in javascript where an event is handled starting from the highest-level anchestor (the root of the DOM tree(html)) and "moving down to the target element".
/*
<div id="outer">
    <div id="inner">
        <button id="myButton">Click Here</button>
    </div>
</div>
//Get the references of an elements
var outer = document.getElementById("outer");
var inner = document.getElementById("outer");
var myButton = document.getElementById("outer");

//attach the event handlers with elements
outer.addEventListeners("click",EventCapturing,true);   //by default it is "false"
inner.addEventListeners("click",EventCapturing,true);
myButton.addEventListeners("click",EventCapturing,true);
function EventCapturing(event){
console.log("Capturing", + this.id); //outer inner MyButton
}
*/

//142. what is the purpose of the event.preventDefault() in js?
//The event.preventDefault() method is used to "prevent the default behaviour" of an event and the link will be prevented.
//<a href="https://www.example.com" id="myLink">Click here</a>

/*
//Get the references of an elements
let link = document.getElementById("myLink");

//attach the event handlers with elements
link.addEventListeners("click",handler);
function handler(event){
event.preventDefault(); //prevent default action 
console.log("Clicked,default action prevented")
}

*/

//143. What is npm? what is role of node_modules folder? (v.imp)
//NPM(node package manager)
//npm can used to manage "dependencies" for your project, including "react library" itself.
//with npm we can install , update packages also

//node_modules folder
//"All dependencies" required by a project are "stored" in the node_modules folder. This ensures that the project has access to the necessary libraries and tools during development and execution.

//187. what is role of index.html file in react? (v.imp)
//In a typical React application, the index.html file serves as the entry point or the root HTML file of the application. Its primary role is to provide the HTML structure into which the React components are rendered.

//144. what is role of index.js file and ReactDOM in react? (v.imp)
//The primary purpose of ReactDOM is to render React components into the DOM.
//ReactDOM is the javascript library that "renders" component to the DOM or browser.
//ReactDOM provides the render() method, which is used to "render a React element" into the DOM. It takes two arguments: the React element to be rendered and the DOM node where the element should be mounted.
//ReactDOM.render(<App />, document.getElementById('root'));

/*
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
*/

//145. what is role App.js file in react? (v.imp)
//the App.js file serves as the primary "entry point for defining the root component" of a React application, organizing its structure, behavior, routing, and state management.

//difference between index.html vs index.js or main.js vs App.js in React app
//index.html:

//index.html is the main HTML file of your React application.
//It serves as the "entry point for your React application" and is typically the "file that the browser loads first" when a user visits your website.
//Inside index.html, you define the basic structure of your webpage, including HTML elements such as <head>, <body>, and any other necessary elements.
//index.html includes a reference to the JavaScript bundle(s) generated by your React application, typically through a <script> tag. This allows the browser to load and execute your React code.

//index.js or main.js:
//index.js or main.js serves as the main JavaScript file that bootstraps your React application.
//It's responsible for rendering your root React component into the DOM.
//Typically, index.js or main.js contains the code to import your root component (e.g., App) and render it using ReactDOM.render() into a specified DOM element in your index.html file.

//App.js:
//App.js is a React component file that represents the main application component.
//It typically contains the top-level structure of your application, including layout, navigation, and routing logic.
//Inside App.js, you define the structure of your application using other React components, including any child components or routes.
//App.js is where you compose various components to build the UI of your application.

//In summary, index.html is the HTML entry point, index.js or main.js is the JavaScript entry point, and App.js is the main React component where you define the structure of your application.


//146.What are the advantages of JSX? (v.imp)
//1.Improves code readabilty and writability
//2.Error checking in advance(Type Safe)
//3.Support Javascript Expression
//4.Improve Performance
//5.Code Reusability


//147. What is Babel? 
//Babel is a popular "JavaScript compiler" that is mainly "used" to "convert" ECMAScriptES6+ code into a backwards-compatible version of JavaScript that can be executed in older browsers or environments.
//Babel allows developers to write code using the "latest JavaScript syntax" (such as arrow functions, template literals, classes, etc.) without having to wait for all browsers to support these features. Babel then "transpiles" this modern JavaScript code into "equivalent code" that works in older environments.

//148. What is the Role of Fragement in JSX? (v.imp)
 //React Fragment "allow" you to "wrap multiple component or elements" without adding extra node to the DOM.
//This can be useful when rendering multiple child elements/components in a single parent component
//We can't use className inside the fragment ex: < className> , but can use key inside the fragment ex: <React.Fragment key = {data.id}>

//149. What are the Types of conditional Rendering in jsx? (v.imp)
//1.if/else statement
//2.Ternary Operator
//3.&&Operator
//4.Switch Statement

//150.What is Props Drilling in React? (v.imp)
//Prop drilling is the process of passing down props through multiple layers of components, even when some of those components do not directly use the props.
//Ways to  avoid props drilling, 
//1.Context API 
//2.Redux
//3.React Query. 
//4.Using Callback Functions
//5.Using Component composition

//151. What are Class Component in React(v.imp)
//Class components are defined using "javascript classes".
//They are stateful components by using the lifecycle methods.
//The render method in class component is responsible for returning jsx.

//152. What is Lazy Loading?
//lazy loading means that "a component or a part of code must get loaded when it is required". It is also referred to as code splitting.

//In React, lazy loading is primarily achieved using the React.lazy() function and the Suspense component. Here's how lazy loading works in React:

//import React,{lazy,suspense} from 'react'
//1.Using React.lazy():The React.lazy() function allows you to dynamically import a React component. It takes a function that calls a dynamic import() statement, which returns a Promise that resolves to the module containing the component.
//Example : const MyLazyComponent = React.Lazy(()=>import("./MyLazyComponent"));

//2.Using Suspense: The Suspense component is used to wrap the lazy-loaded component and specify a "fallback content to display" while the component is loading.
/*
function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <MyLazyComponent />
    </React.Suspense>
  );
}
*/
//3.Chunk Splitting: When using Webpack or other bundlers, lazy loading automatically splits the code into separate chunks based on the components that are lazily loaded. These "chunks are then loaded asynchronously" when they are needed, reducing the initial bundle size and improving page load performance.
//npm i webpack webpack-cli --save-dev

//153.what is the role of import() function in code splitting?
//The import() function returns a promise that "allow dynamic loading of modules".

//154.what is the purpose of fallback property in suspense?
//The fallback property provides a "loading indicator" or UI while the dynamically imported component is being loaded.

//155.Ways to style react component
//1.Inline Style
/*
function MyComponent() {
  const divStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
  };

  return <div style={divStyle}>Hello, world!</div>;
}
*/

//2.external css Stylesheet
//3.CSS Modules:
//4.Css Frameworks: External libraries like bootstrap,tailwind css
//5.Global Stylesheet

//156. How you can impleament authentication in react application(v.imp)
//1. Set Up a Backend Service
//2.User Registration
//3.User Login: Implement a user login form where users can enter their credentials (e.g., email and password). When the user submits the login form, send a request to the backend API to authenticate the user's credentials. If the credentials are valid, the backend should issue a JSON Web Token (JWT) or session token to the client.
//4.Token Storage: Store the JWT or session token securely on the client side, typically using browser storage mechanisms such as localStorage or sessionStorage.
//5.user Request Data with that token{JWT:token,Header}
//6.validate token signature
//7.send data
//8.Display data on browser

//157. What is the used of React Profiler
//React Profile is the set of tools in react that allow developers to anlyze the Performance of the React Application 

//158. what is difference between fetch and axios for API calls in react?
//In React, both fetch and Axios are commonly used for making API calls
/*
Syntax:

fetch: It is a built-in browser function for making HTTP requests. It uses the Promise API for handling asynchronous operations.
Axios: It is a third-party library specifically designed for making HTTP requests from the browser. It also uses Promises but provides a simpler and more consistent API compared to fetch.
API Flexibility:

fetch: It is a low-level API, meaning it provides basic functionality for making requests and handling responses. It requires more manual handling for tasks like setting headers, handling errors, and transforming data.
Axios: It is a high-level API that offers more features out of the box. It supports features like request and response interceptors, automatic JSON data parsing, and global defaults for headers. It generally requires less boilerplate code compared to fetch.
Error Handling:

fetch: Error handling with fetch can sometimes be cumbersome, as it requires checking for network errors, HTTP errors, and parsing response bodies manually.
Axios: Axios provides a more streamlined way of handling errors. It automatically rejects the Promise if the request fails (e.g., network error, HTTP error response), making error handling more straightforward.
Browser Support:

fetch: It is supported in most modern browsers, but there might be slight differences in behavior between different browsers, especially in terms of error handling and response parsing.
Axios: Since Axios is a third-party library, it ensures consistent behavior across different browsers and versions, providing a more reliable option for making HTTP requests.
*/

//159.What are the Popular Testing libraries for React
//1.jest 
//2.Enzyme
//3.React Testing Library
//4.Cypress

//160.What is Reactive programming
//1.State and Props
//2.React Hooks
//3.Event Handling
//4.Context API
//5.Redux
//6.Component life Cycle Methods
//7.Async/Await

//161. What is Debouncing?
//Debouncing is a method of preventing a function from being invoked too often, and instead waiting a certain amount of time until it was last called before invoking it.

//162.What is service worker or service worker caching?
//A service worker is a type of web worker, a "script that runs in the background of a web application", separate from the main browser thread. It enables features like push notifications, background sync, and most relevantly, the ability to intercept and handle network requests.
//Service worker caching, also known as service worker cache, refers to the caching mechanism facilitated by service workers.
// It "allows" web developers "to cache web assets like HTML, CSS, JavaScript, images, and even API responses", enabling the application to "function offline" or in "low-connectivity environments", and improving performance by serving cached assets instead of making network requests.


//163.What is React.memo()(compare new prop with previous prop with shallow equality check if both props are same then react will reuses the previous render result and skip re-rendering the component)?
//React.memo is a "higher-order component (HOC)" provided by React that is "used for optimizing functional components by preventing unnecessary re-renders". It's "similar to React.PureComponent" for class components but for functional components.
//When a component wrapped with React.memo receives new props, React will compare the new props with the previous props using a "shallow equality check". If the props are the same, React will "reuse the previously rendered result" and "skip re-rendering the component". This optimization can help improve the performance of your React application by reducing unnecessary renders.

/*
import React from 'react';

const MyComponent = React.memo((props) => {
  // Component logic here
});

export default MyComponent;

*/

//164.what is Pure Component?.
//It's similar to React.memo for functional components, but for class components.
//When you extend a class component from React.PureComponent, React automatically implements a shouldComponentUpdate() method for you. This method compares the new props and state with the previous props and state using a shallow equality check. If the props and state are the same, React skips the re-rendering of the component, optimizing performance by preventing unnecessary updates.
//

/*
import React from 'react';

class MyComponent extends React.PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    // Custom comparison logic
    // Return true if the props or state have changed, false otherwise
  }

  render() {
    // Component rendering logic here
  }
}
export default MyComponent;
*/

//165.why we have prevent component from unnecessary re-renders.
//Rendering is a computationally intensive process, involving virtual DOM comparison and reconciliation
//Unnecessary re-renders "can lead to unnecessary network requests", especially if re-rendering triggers data fetching operations.
//helps in utilizing system resources efficiently.
//helps maintain a consistent user interface.
//Excessive re-renders can drain device battery life, especially on mobile devices

//166. What is Hooks?
//In React Hooks, are introduce in 16.8.
//hooks are functions that allow developers to use state and life cycle methods without writing class component. 

//167. Tailwind css
//how to install
//1.npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p (which create tailwind.config.css)

//168. What is useContext() and creteContext()
//createContext is used to create a context object, while useContext is used to consume the context value within a functional component. Both are important parts of React's Context API and provide a way to manage global state or share data across the component tree.

//createContext:
//createContext is a function provided by React that creates a new context object. It takes a default value as an argument and returns an object containing two components: Provider and Consumer.
//The Provider component is used to wrap the parent component and accept a value prop. This value prop is the data that will be shared with the children components.
//The Consumer component is used to access the data provided by the Provider component. It uses a render prop pattern to access and consume the context value.
/*
const MyContext = React.createContext('default');
function App() {
  return (
    <MyContext.Provider value="hello">
      <Child />
    </MyContext.Provider>
  );
}
*/

//useContext:
//useContext is a hook provided by React that allows functional components to consume context values. It accepts a context object (created using createContext) as an argument and returns the current context value.
//It provides a cleaner and more concise way to consume context compared to the Consumer component.
/*
const MyContext = React.createContext('default');
function Child() {
  const contextValue = React.useContext(MyContext);
  return <div>{contextValue}</div>;
}

function App() {
  return (
    <MyContext.Provider value="hello">
      <Child />
    </MyContext.Provider>
  );
}

*/

//169. REST apis 
//Client send reques ===>(json) get,put,post,delete <===(http) server sends response

//170. CSS Media Query
/*
//1.Extra Small Devices(Phones) --upto 576px
@media (max-width:576px){
}
//2.Small Devices(Notepad,tablets) min 577 to max 768
@media (min-width:577px) and (max-width:768px){
}
//3.Medium Devices(Laptops)
@media (min-width:769px) and (max-width:992px){
}
//4.Large Devices(Desktop)
@media (min-width:993px) and (max-width:1200px){
}
//5.Extra Large Devices(Large Desktop)
@media (min-width:1201px){   
}
*/
//can add extra point above  113,115,116,117

//171.What is Progressive Web Apps (PWA)
//full Responsive: you can install it your phone and used it 
//it runs in window,android,ios no need to write specific code for this
//they work offline
//they use service workers when you click on the button for api call if there cache data for this response they provide it insted of calling api if no data call api and first cache this data then call the api
//background synchronization

//172.What is Webpack
//Webpack is a powerful "static module bundler" for JavaScript applications. Its primary role is to take multiple modules with dependencies and bundle them into a single file (or multiple files) in a way that's optimized for deployment on the web.

//173.What is Babel
//Babel is a popular JavaScript compiler that allows you to use the latest JavaScript syntax (ES6+ and beyond) while ensuring compatibility with older browsers and environments that may not support these features natively. 
// Its primary role is to transform modern JavaScript code into a backward-compatible version that can run in older browsers.

//174.What is service worker
//A service worker is a type of JavaScript worker that runs in the background of a web application, separate from the main browser thread. Its "primary role is to intercept network requests" and provide powerful features like caching, push notifications, and background synchronization. Service workers enable Progressive Web Apps (PWAs) to deliver offline functionality, improved performance, and a more engaging user experience. 



//React Coding Round Questions

//Top 15 React Coding Challenges Worth Considering
//https://blog.imocha.io/react-coding-challenges
//https://www.youtube.com/watch?v=_XOToOfrwtc&list=PL_KW_uw2ITn_J_BNfTpv-yePk8vcyg4dp
//https://github.com/NarendraKoya999/Frontend-Machine-Coding-Interview-Questions
    //1.Nested component
      //2.Calendar App
      //3.Toast
      //4.Modal
      //5.Progress Bar
      //6.Dark Mode and Light Mode(done)
      //7.Stepper component
      //8.Countdown timer
      //9.Machine Coding - implement a basic react app to fetch and display from external API, follow questions were to add some features like searching, filtering, etc
      //10.Image Slider/Carousal
      //11.file explorer
      //12.Todo list
      //13.Redux Setup and API integration
      //14.Pagination
      //15.show the input fields base on the data from backend
      //16.Multi Select Search
      //17.Selectable Grid
      //18.Stepper component(done)
      //19.Infinite Scroll
      //20.

      //Make and E-commerce website with login and logout, filters, pagination ,search
      //G-mail template
      //tick tack toe
      //calender

      //website I work on https://app.championlister.com
      //https://oranjepeople.com/login   //email:orange.org2023@gmail.com //password:admin@org@2023
      //https://api.oranjepeople.com/api/admin
      //mpp disha //http://13.53.170.82/login
      //cms url http://disha.parimalabs.in/   //employeeId:653243453

//1. Build a User Registration Form
//Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages.
/*
Implement the user registration form UI
Validate the form inputs and display error messages
Integrate form submission with a mock API call (simulated delay).
Add a success message upon successful registration
*/

//2.Infinite Scroll: Implement an infinite scroll feature on a web page. Load additional content as the user scrolls down the page using React
//3.Infinite Carousel: Create an infinite carousel/slider that automatically loops through a set of images or content, providing navigation controls for the user.


//Manager Round/HR Round Questions
//have face any challenging situation in your project
//at last time of project delivery the requirement has changed
//somebody resigned from the team and there is extra work load on you 
//answer: 1.I will communicate the risk to the superior manager
//2.I will taking things based on the priority
//3.I will take some extra efforts to deliver project on time 

//any major challenges you face till now while creating a project or a component (they want to know basically how you will deal with this kind of things)



//Machine coding round tips
//write modular code DRY
//if you stuck anywhere ask for the interview because you will be part of the team
//

//1.js 
//ES6,ES7
//promises,closuers,

//react 
//performance 



//javascript questions
//react questions
//coding round questions
//machine coding round tasks 

//Apply first company 1.website, 2.hrmail direct ,3.naukari.com


//background verification 
//1.company name and address
//2.period of employment
//3.Designation
//4.employee code
//5.last drawn salary
//6.supervisor name
//7.duties and responsibilities handle
//8.attitude and personal reputation of the candidate
//9.performance at work
//10.reason for leaving and relavant information
//11.eligible for rehire yes or no

//in your resume write role as React developer and designation which offer by the company
//graduation May 2019
//coditas ,1year 5 month  1,Dec 2020 to 1,April 2022
//brain inventory,6month  1,May 2022 to 18,Nov,2022
//saviesa infotech 1year 3 month (selection done at 4dec) but date of joining 15Dec 2022 to 19March 2024
//Total 3year 3months 

//Project wants to be mention in resume
//1.Constructor
//2.championlister project
//3.Orange Project(both mobile and web app)
//4.MPP Disha web APP (both mobile and web app)