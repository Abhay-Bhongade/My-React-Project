
      // "Most important thing is that whether you solve a problem or not but most important thing is that how you approach problem in interviews that is what interviewer is looking for"

      // 1. what's the difference between undefined and null?
      // var iAmStandBy;
      // hamne varible declare kar diya hai lekin hamko nahi pata ham usme bad me integer or string or  konsi valuse assign karenge means ham filhal me variable delcare kiya hai lekin hamne us variable value assign nahi karte usko hame kahte hai "undefined"

      // data type of null = object
      // data type of undefined = undefined
      //
      // 2. what does the || operator do ?
      //
      // 3. what is dom?
      // 4. what is event propagation?
      // 5. what is difference between "==" and "==="?
      //both are comparison operator
      //The difference between both operator is that "==" is use to compare values
      //whereas "===" is used to compare both values and types
      //var x = 2;
      //var y = "2"
      //  console.log(x==y); Return true since the value of both x and y is same
      // console.log(x===y);  Return false since the type of x in 'number' and type of y is 'string'
      // 6. what id event bubbling and event capturing/ tricklling?
      // 7. what does !! operator do?
      // 8. what id event.targer?
      // 9. what is scope?
      // scope in javascript refers to as current context of code, which determines the       accessibility of variables in javascript.
      // there are two type scope in global and local
      // global variables are those who declared outside the block
      // local variables are those who declared inside the block
      // 10. why does it return false when comparing two similar objects in javascript?

      // 11. What is this in JavaScript?
      // In js, this keyword refers to an object , which object depends on how this is called/invoked.
      // The this keyword refers to different objects depending on how it is used:

      // In function in strict mode this is undefined
      // In an event this refers to the element that receive that event
      // Methods like call(),apply() and bind() can refer this to any object

      // The definition  of "this" object is that it contain the current context.

      // The this object can have different values depending on where it is placed.

      // // For Example 1
      // console.log(this.alert('Awesome'));
      // // it refers to the current context and that is window global object

      // In function this refers to an "global object".
      // ex 2
      // function myName() {
      //     console.log(this);
      // }
      // myName();

      // // ex 3

      // var myNames = 'vinod';
      // function myName() {
      //     console.log(this.myNames);
      // }
      // myName();

      // When use In an object this refers to an object
      // The this here refers to name object

      // // ex 4
      // const name = {
      //     myAge : 26,
      //     myName() {
      //       console.log(this.myAge);
      //     }
      // }
      // obj.myName();

      // // ex 5
      // // this object will not work with arrow function bcz arrow function is bound to class.

      // const obj = {
      //     myAge : 26,
      //     myName : () => {
      //       console.log(this);
      //     }
      // }
      // obj.myName();

      // // ex 6

      // let bioData = {
      //     myName : {
      //         realName : "vinod thapa",
      //         channelName : 'thapa technical'
      //     },
      //     // things to remember is that the myName is the key and the object is act like a value
      //     myAge : 26,
      //     getData (){
      //       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
      //     }
      //   }

      //   bioData.getData();

      // ex 7
      // <button onclick="this.style.display ='none' ">click to remove</button>
      // Alone this refers to an global object i.e window
      // console.log(this);

      //12. call, apply,bind
      // The difference between call and apply is that :
      // 1. The call method take arguments seprately
      // 1. The apply method takes arguments as an array
      // call method is used to call the method of another object
      // or with call(), an object can use a method belonging to another object
      // But as per other it is simply the way to use the this keyword or another object

      // let name = {
      //     firstname: "Abhay",
      //     lastname : "Bhongade",
      //     printFullName : function (){
      //         console.log(this.firstname + this.lastname);
      //     }
      // }
      // name.printFullName();

      // with call method we can do a function borrowing,we can borrow function from other object and use it with the data of some other object

      // let name = {
      //     firstname: "Abhay",
      //     lastname : "Bhongade ",
      // }
      // let  printFullName = function (hometown,state){
      //         console.log(this.firstname +" "+ this.lastname + "from " + hometown + " " + state );
      //     }

      //     printFullName.call(name,"Hinganghat","Maharashtra");

      // let name2 = {
      //     firstname: "sachin",
      //     lastname : "tendulkar "
      // }
      // The first variable is the again the reference to the this variable
      // In call method we pass this arguments individually comma seprated
      // printFullName.call(name2,"Mumbai","Maharashtra");
      // printFullName.apply(name2,["Mumbai","Maharashtra"]);

      // The only difference between call() and apply() method is the way we pass Arguments
      // In apply() method first variable is the again the reference to the this variable and we pass second arguments as array list

      // bind() method
      // the bind() method allows an object to borrow a method form another object without making a copy of that mehtod This is known as "function borrowing"
      // just bind and keep the copy of that method and we can use it later
      //the only difference between call() and bind() does not directly invoked the method is it gives you the copy of that exactly same method which can ve invoked later

      //bind() method essentialy create copy printFullName method
      // let printMyName = printFullName.bind(name2,"Mumbai","Maharashtra");
      // console.log(printMyName);
      // printMyName();

      // 13. Function currying

      //In other words currying is when a function instead of taking all arguments at  one time takes the first argument and return a new function, which takes second one argument and returns a new function ,which takes the third one argument and returns a new function,etc. until all arguments are completed.
      // currying is a function that accepts multiple arguments

      //     function add(a){
      //         return function(b){
      //             if(b){
      //                 return add(a+b);
      //             }
      //             else{
      //               return  a;
      //             }
      //         }
      //     }

      // console.log(add(5)(2)(4)(8)()) ;

      // we call this function sum with another parameter and another parameter it go infinite
      // it check there in (b) is any value or if value is then return sum(a+b) otherwise it return initial value a
      // if 2 is there then return a+b (5+2) = 7 then went inside of that function sum(7) means a value is 7 then check there is another value, it return another function at this time  return a+b (7+4) = 11 and this cycle run again and again until this point the value was 19 add(19) and it again check b has something so b has nothing so it go inside if loop and go inside else and return value of a i.e 19

      // function sum(a){
      //     return function(b){
      //         return function(c){
      //             return function(d){
      //                 console.log(a+b+c+d);
      //             }
      //         }
      //     }
      // }

      // sum(1)(2)(3)(4);

      //  one way
      //     let multiply = function(x,y){
      //         console.log(x*y);
      //     }

      //  let multiplyByTwo = multiply.bind(this,)
      //  multiplyByTwo(3,5);

      //  let multiplyByThree = multiply.bind(this,3)
      //  multiplyByThree(9);

      // This is we do using function currying by using bind  method we make a copy of multiply method we create more method out of it by pre setting some argument inside the function
      // second way with function closures

      //     let multiply = function(x){
      //         return function(y){
      //         console.log(x*y);

      //         }
      //     }

      //  let multiplyByTwo = multiply(2);
      //  multiplyByTwo(3);

      //  let multiplyByThree = multiply(3);
      //  multiplyByThree(9);

      // function sum(num1){
      //   console.log(num1);
      //   return function(num2){
      //       console.log(num1,num2);
      //       return function(num3){
      //           console.log(num1,num2,num3);
      //           console.log(num1+num2+num3);
      //       }
      //   }
      // }
      // sum(5)(3)(2);

      // or with the help of fat arrow function we make it short

      // const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);

      // sum(5)(3)(8);

      // 14.Polyfill for bind

      // 15. Hoisting
      // Hoisting is a phenamenon in javascript where you can can access variables and functions before they have initialized(or put some value in it) without any error.

      // undefined vs notdefined

      // var x = 7;
      // function getName(){
      //     console.log("Namaste javaScript");
      // }
      // getName();
      // console.log(x);
      // console.log(getName);
      //15. Prototypal Inheritance
      // When you create any object javascript put this hidden properties into an object and attached it to your object
      // arr.__proto__ this is an object where javascript putting all functions and methods
      // In simple words we can say object is attaches to each array ,each and every method, object any each function whatever we create in javascript object is attached to it. i.e Protype and this object has access to all this properties which you can use by using the "." operator
      // let arr = ["Abhay","Rahul"];

      // let Info = {
      //     name : "Abhay",
      //     city : "Hinganghat",
      //     getIntro : function(){
      //         console.log(this.name + "from" + this.city);
      //     }
      // }
      // // Info.getIntro();
      // function fun1(){
      //     //
      // }

      //16. Scope , Scope Chain , Lexical Environment
      //17. Closures
      //18. The Event Loop
      //19. Event Bubbling

      //20. Callbacks and Promises
      // javascript ke through server pe data bhejana hai to ham use karte hai
      // javascript object => JSON (JSON.Stringify) or (json.stringify(data))

      // Aur server se aaya hua json ka data  javascript object me convert karna ho
      //JSON => javascript object (JSON.Parse) or  (json.parse(data))

      //21. Variables and Function Hoisting

      //22. What is falsy and truty values in JavaScript ?
      // There are total 5 falsy values in JavaScript 1." " or '' ,2. null 3. undefined 4. false 5. NaN 6. 0 or +0 or -0
      // when you assign falsy value to any variable then wo falsy value kahalayegi
      //A falsy value is a value that is consider false when encountered in boolean context
      //A truthy value is a value that is consider true when encountered in boolean context

      //23.What is NaN property in js?
      // NaN property represent "Not-a-Number" value. it indicates a value which is not a legal number.
      //to check value is not NaN , we use "isNaN()" function,
      //Note- isNaN() function converts the given value to a Number type,and then equated to NaN

      //24. What are different data types present in javaScript?
      // 1.Primitive Data Types:- String,Number,boolean,BigInt,undefined,null,symbol
      // typeof null :- retutn object
      // 2. Non Primitive Data Types
      //Primitive data types can store only single value,to store multiple and complex vlaue non primitive data types are used
      // object
      //It is important to remember that any data type that is no primitive data type, is of Object type in Javascript

      //25. Map() vs forEach()
      // return ke andar for loop support nahi karta
      //A function that accepts up to three arguments.
      // The map method calls the callbackfn function one time for each element in the array.Calls a defined callback function on each element of an array, and returns an array that contains the results.

      //What is unique key in Loop
      //Keys help react to identify which items have changed,are added, or removed
      //keys should be given to the elements inside the the array to give the elements a stable identity
      //har item ko agar ham unique key(id) de denge to virtual DOM usko easily identify kar pata hai
      //virtually algorithm ke hisab se usko update karna hota hai har ek item ko update nahi karna hai jo change hua item hai sirf usko hi update karna hai.

      //26. Prototypes in Javascript
      //Prototypes in Javascript is mechanism by which javascript objects inherit(inheritance) features from one another
      //Normal property me aur Inheritance me difference kya hota hai, Normal property me sara ka sara data pahle hi load ho jayega aur Inheritance me jab uski jaroorat hogi tab wo data loading hoga(aur prototype kab load hogi jab hamko iski jaroor hogi tab)

      //27. Try - Catch Method
      // try-catch Method work synchronously
      // So it does not work properly with the settimeout() function
      // if you want to use it with settimeout() function then put try-catch inside the settimeout()
      // setTimeout(() => {
      //     try {
      //         console.log("Test this code");
      //     } catch (error) {
      //         console.log(error);
      //     }
      // }, 2000);

      //28. Different Types of Errors in JavaScript
      // Reference Error:
      // when we try to access those variable or call those function which is not defined

      //Aggregate Error:
      // show in promise.all

      //29. Asynch Await
      //API hamesha two promise return karti hai first promise resolve the API and second promise resolved the json
      // if you don't use async and define only await then throw and error
      // if you use async and not use await then return and promise
      //30. 

      //React Imp


      // 1. What is NPM? Why we use NPM?
      // NODE:
      // NPM : NODE PACKAGE MANAGER
      //NPM we use manage the package inside the node modules folder
      // to install libraries npm i package-name
      // also used for to make file minified during production to remove all extra spaces from file and after that app is very fast and secure also that can't easily read(unreadable)

      //2.What is Alternative of NPM
      //  Alternative of NPM Is YARN(made by facebook)

      //3. React current version
      // version 17.0.2
      //4. Difference between package.json and package-lock.json
      //package.json apki application ki detail rakati hai(applicatin name,it's version,react-version)
      //package-lock.json application ki bhi detail rakati hai aur node modules ke bhi details rakati
      // hai history of node module tree structure and dependencies

      //5. gitignore
      //which files we don't want to upload on the git ex:nodemodules folder

      //6. React entry point is index.js

      //7. which most imp file (package.json(project name,version,commands,libraries,dependency)),
      //why we do not push node modules folder on git because they are heavy in size and if
      //   third user ko node modules kaise milenge new user want node modules then they simply with the help of "npm install" can install all node modules
      // Package.json

      // custom command means start file with your name first change in package.json folder where debug "start" change "start" with your name "Abhay" and instead of npm start type "npm start Abhay"

      // 8.What is Component? How many types of components there are in react
      //A piece of code that can reuse, such as a function ex Header , Footer
      // Types:Main  1.Class , 2.Functional Inside that Higher order component, controlled ,uncontrolled,pure component

      // 9.  can we use React and Angular in Single Project
      //Yes, Because React is a library and Angular is a framework so we use react with angular,vue.js

      //10. Can we make two components in single page
      //We can make two components in a single page ex (User.js and Product.js)

      //11. JSX
      // javascript xml , we can write html and javascript together
      //Hook is a special function

      //12. Why we use state not variable to update in react?
      // jab ham variable use karte react me tab variable update nahi hoga rerender nahi hoga isliye ham state use karte hai react me

      //13. Can we use state outside a component
      // Yes, but it is not recommanded to use state outside of a component, but there is one way but react says dont use it that is not authentic .
      // State is Public not Private

      //14. Can we use "useState" hook in class component
      // NO, we can't use "useState" hook in class component

      //15. What is props
      // props stand for properties
      //if we want to pass data from one component to another component(from parent component to child components),But you cant pass props from child component to parent componets we use props, props are pass to the component in the same way  arguments pass in a  function
      //Data from props are read only and cannot be modified by a component receiving it from outside(we can say as parent component).
      //jis component me ham props ko receive kar rahe kya ham us component me props ke change kar sakte hai,nahi  means ham props ko child component ke change nahi kar sakte
      // ham jis component se props send kar rahe hai (parent copmonent) me props change kar sakte he lekin props ko child component ke change nahi kar sakte chahe functional component ho child component ho

      //16. How update state in class component
      // with the help of constuctor we can update state in class component

      //jaise state update hoti hai hamara pura component ek bar aur re-render hota hai means update hota hai(execute hota hai)

      //17.We can pass props as a function
      //yes

      //18. Can we pass html as a Props
      //functional compent liye likhana hoga "this.children"
      //class compent liye likhana hoga "this.props.children"

      //19.In Class Component Life Cycle Method
      //(component load ho gaya aur load hone ke bad maine usko hide kar diya aur phir se show kar diya to uski lifecyle method dubara se chalegi kya)ki jab mai component ko remove kar dunga  to aur dubara se load karunga toh kya component ka naya lifecycle chalega ya purana wala lifecycle chalata rahega
      //ans: new lifecyle chalegi purani wala destroy ho gaya hai dobara se naya component banega aur nayi lifecyle uski banegi,means wo component DOM tree to remove ho jata hai tab ham  componentWillUnMount() ko call karte hai
      //sabse pahle jaise hi page load hoga consturctor load/call hoga means jaise hamari class banati constructor call ho jata hai , super() call isliye karte hai jo uska parent component hai component class hai usko call karne ke liye (jo super() hota hai lifecycle method ka part nahi hota vo javascript ka part hota hai)
      //render lifecycle ka part hota hai
      //Class Component Life Cycle Method sabse pahle constructor call hota hai jab html ready nahi hota ,render ready nahi hota

      // lifecycle 1.constructor() call hoga=>2.render() call hoga =>3.componentDidMount()call hoga(aur tab call hoga jab html and dom ready ho jayega uske bad=>componentDidMount()call hoga)
      //render() ke andar hamara html and dom ready ho jata hai(load hota hai)
      // Use of componentDidMount() when  we want to call API (kyuki tab kak hamara html and dom ready ho chuka hota hai(load ho chuka hota hai))

      //20. componentDidMount() vs componentDidupdate()
      // html and dom ready by render() then we call componentDidMount()
      // run for the first time when page loads we use it for fetch data from API or we want to provide some initial value to state
      //componentDidupdate() call when we want to update props or state, tabhi chalega jab koi state ya props update hoga tab tak chalega hi nahi means MOUNTING hone ke bad naya component create hone ke bad chalega hi nahi
      //kya ham log componentDidMount() ko call hone se rok sakte hai, bilkul rok sakte hai uske liye hamko "shouldComponentUpdate(false)" karna hoga
      // componentDidMount() will not be invoked if "shouldComponentUpdate()" return false
      //componentDidupdate() ham state ko update kar sakte hai with condition but without condition karoge toh wo infinite loop me chale jayega
      //render() ke andar hamko state update nahi karvani chahiye kyuki kyu jaise hi state update hogi render() call ho jata hai aur ye apko infinite loop me le ja sakta hai
      //  componentDidupdate() ke andar hamko api ko call nahi karni chahiye ya nahi,  kyuki componentDidupdate() tabhi call hoga jab koi props ya state update hoga tak call nahi hoga ,agar hamko kisi condition ke andar API ko call karvana ho to ham call kar sakte hai,agar hamko  condition ke andar  API ko call nahi karni hai toh ham
      // componentDidMount() kar sakte hai

      //21. shouldComponentUpdate() Life cycle Method
      // ye updating phase ke andar ata hai means ye(shouldComponentUpdate()) tabhi chalega jab koi state ya props update hoga, uske bad  chalega shouldComponentUpdate() then it  ask should i update component are not
      // isko ham condition ke andar use kar sakte specific kam karne ke bad ye kam karna band kar dega , isko stop karne se page rerender nahi hoga aur page ki performance aur speed improve hogi
      //by default rendering ko block kar deta means page(html and dom) rerender hoga hi nahi
      //componentDidupdate() vs shouldComponentUpdate() which call first if shouldComponentUpdate() if return is true then call ,otherwise componentDidupdate() not call

      //22. componentWillUnMount()
      //Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
      //two different type of component, parent component functional component hai aur child component class component hai kay tab bhi componentWillUnMount() call hoga, ha call hoga  lekin child component class component hona chahiye
      //componentWillUnMount() dom se hatne se pahle call hota hai

      //23. In Functional Component Life Cycle Method
      //ham Functional Component Life Cycle Method me direct Life Cycle Method use nahi karte uske liye ham hooks use karte hai
      //useEffect Life cycle Method

      //23. Why we use Hooks in Functional component
      // Because in class component there inbuilt features like state,life cycle method,pure component, but Functional component ye features hahi hote hai isliye ham ye sare features(state,life cycle method,pure component) use karne ke liye hooks use karte...

      //24.useEffect Hook
      //if you are families with React class life cycle methods then you can think of useEffect hook as componentDidMount,componentDidupdate,componentWillUnMount combined.

      //25. can we use useState hook inside the useEffect hook
      // we can use

      //26. we can't used Hooks inside loops, but we can use conditions inside the hooks

      //27. Dom Tree In React
      //React primarily uses the virtual DOM in order to manipulate the actual DOM first.
      //That means that every change to the DOM has to be recorded in virtual DOM first.(React track change with the virtual DOM)
      //Updating the virtual dom is faster than updating the actual dom

      //28. React Fragment (React syntatice sugar Syntax <></>)
      //React Fragment allow you to wrap multiple component or elements without adding extra node to the DOM.
      //This can be useful when rendering multiple child elements/components in a single parent component
      //We can't use className inside the fragment ex: < className> , but can use key inside the fragment ex: <key = {data.id}>

      //29. Send Data Child To Parent Component / Lifting State Up

      //30. Pure Component(ye apki component ke rerender hone se rokata hai for example current state aur setState ki value same hogi tab component re-render hone se rokta hai )
      // It is used in class component only
      // For Functional component we use useMemo Hook

      //31. useMemo Hook : used to save unwanted calling function ko save kar sakte is tarah apke app ki performance increase hogi.

      //32. useRef
      //useRef hook directly DOM ko manipulate karta hai. so don't use it, till there is any emergency condition to use this hook
      // useRef for : Managing focus, text selection, or media playback
      //Can we use multiple useRef in Single Component
      //Dom ko handle karne ke liye ham react me useRef hook use karte hai

      //33. forwardRef
      // if we want send ref as a prop in child component and manipulate dom through input field in child component

      //34. Controlled component vs UnControlled component
      // In Controlled component, form data is handled by a React component. we use event handler for every state Update(React ke Andar input fields ko jab ham state ke through control karte hai usko ham Controlled component kahte hai)
      // In UnControlled component, form data is handled by DOM itself ,instead of writing and event handler for every state Update, you can use a ref to get form values from the DOM.( UnControlled component wo hote hai direct DOM ke through ya direct Javascript ke through control hote hai)
      //Controlled component and UnControlled component can be use with class and functional component
      // some input field control trough state and some control through by ref and what we called this component : We Called this component as UnControlled component because we use Ref in this Component

      //35. Higher Order component:
      //Which takes another component  as Props and return new component

      //36. API Application Programming Interface
      //react and angular direct database se connect ho nahi sakti, data ko get karne ke liye isliye ham  server side programming language use karte hai(nodejs,php,python,java)  backend programming language ka use karte hai , inke andar hi API banati hai ye hame database se data nikalkar deti hai bad me ham us data ko use kar lete hai react ke andar

      //CRUD Operation
      // 1. Get Data : use GET METHOD
      //2. Store/Create Data : use POST METHOD
      //3. Update Data : use PUT METHOD
      //4. Delete Data : use DELETE METHOD
      //PUT vs PATCH
      //put method uses the request URI to supply the modified version of requested resource/data which replace the original version of resource whereas PATCH method supplies the set of instruction to modify that insruction

      //37. React and Angular direct database se connect ho nahi sakti isliye ,us time data ko get karne ke liye ham use karte hai server side programming language(php,nodejs, java,python,laravel,.net) hogayi inke andar hi hamari API banati hai aur database se data nikal ke de deti hai hame baad me ham us data ko use kar lete hai front end ke andar react ke andar
      //API call jab bhi kargo to useEffect ke andar call karo means jaise hi page load ho ek bar hi chale
      // useState ke andar rakhenge  API ko toh tab tak call nahi hoga jab tak ham state ko update nahi karenge

      // 38. useEffect Hook:
      // kisi bhi function ko agar "page load hote hi" call karna chahate hai to ham useEffect hook ka use karte for ex: 1.API ko call karne ke liye
      //2. maniually dom change karne ke liye 3.Netflix subscription one time only.
      //useEffect work same as componentDidMount menans after the Dom is ready html is load after that it called/load useEffect(any thing put inside this is called after that) hook by default it runs after first render and every update

      //Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.
      //Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.

      //39. State
      // when we use state the component will be rerender but when we use variable the component not rerender

      //40. kya ham reactjs ke andar angular use kar sakte hai , nahi.
      // lekin ham angular ke andar reactjs use kar sakte hai. (npm i react)

      //41. What is Lazy Loading?
      //lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching .

      //42. How App/Page Display
      // 1.App.js => 2.index.js => 3.index.html

      //43.JSX
      // Always return a Single Component

      //44. useState Hook
      //React guarantees that setState function identity is stable and won’t change on re-renders.

      //Redux (Predictable,Centralized,Debugging,Flexible(works any UI layer))
      //npm i redux react-redux axios redux-thunk
      //Redux can be use with Angular and Vue but 95% devloper use redux with React
      //Redux ke andar ek hi Store Rahta hai(Means Ek Application ke andar ek store rahta hai)
      //Data hamesha unidirectional hota hai.(flow in sequence)

      //Store:Collection of State.
      //states are immutable
      //UI are bounded to state

      //45. Action
      //Packet of information which is passed to store
      //Actions are plain Javascript Object
      //Action tells store change is needed
      //Payload is information or data for actions
      //Action--------> Dispatch-------->Store
      //What is action reducer and store in Redux?
      //Reducers: As we already know, actions only tell what to do, but they don't tell how to do, so reducers are the pure functions that take the current state and action and return the new state and tell the store how to do

      //46. Reducer
      //Reducers are Pure Javascript function
      //Pure functions are functions that : with a given input,always return the same output.they do not relay on any variables outsides their scope
      //Pure function is a function(a block of code) that always returns the same result if the same arguments are passed.It does not depend on the any state,or data change during a program's execution rather it only depends on its input arguments.
      //Also a pure function does not produce any observable side effects such as network requests or data manupulation.

      //Each Reducer Manages independent state in complete Store.
      //All reducers functions are called when action is dispatched.
      //Reducers Return the new structure of state
      //Reducers does not depend on any external variables,depend only on its arguments and does not change any of its arguments.
      //Reducers are called automatically when an Action is Dispatched.
      //Reducer are Responsibel for particular state in a Store.
      //Reducer return a new form of state.
      //Reducers split into multiple small reducers to manage a small set of data in store

      // What is the use of Reducer?
      //In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action. It may seem simple, but it does have to be a pure function with no side effects.
      // The reducer will accept a state and an action and then return a new state

      //47. Connect Component with Redux
      //1.react-redux provides a function called "connect"
      //2.useSelector hook can be used to select a part from state to use in component
      //3.connect(mapStateToPropsFunc,mapDispatchToPropsFunc)(Component)
      //4.mapStateToProps Function name can be Anything,
      //Argument -- State(ApplicationState)
      //Whenever state changes Props  value willbe also changes,then our component will be rerender we return object of Props
      //5 mapDispatchToPropsFunc
      //Argument Dispatch function
      //dispatch function is used to dispatch an Action ,Action object get from action Creators return objects of Props
      //6. We use useDispatch hook to dispatch action directly from component
      //7. React Redux provides us "Provider" Component it accept our Store

      //useSelector used for get data from store

      //Virtual Dom
      //Virtual Dom exist in the memory it is never painted on the screen there is an actual Dom that is painted on the screen.
      // Virtual Dom is the blueprint of the Real Dom which exist in the memory Of React and it is Synchronize by library using React
      //1st time when render() that time Actual Dom and Virtual Dom is created
      //when you make any changes in Dom that time Virtual Dom 2 is Created by Copying the 1 st virtual Dom
      //There are 2 Virtual Dom how these 2  Virtual Dom is created react has render() so first time render method is called the Actual Dom tree is created and  Virtual Dom tree is created but the moment when you make any change instead of blindly updating the Dom tree React insteady made the copy of these Actual Dom Known as Virtual Dom 2.
      //Now we have 2 Virtual Dom and one Actual Dom By using the "Diffing Algorithm" these two Virtual Dom is Compare and Minimum Number of Steps were found to make the changes in the Dom 2 in Virtual Dom 1 and these changes are send to Actual Dom for Patching and hence in this Manner the Dom is Updated
      //Key Prop is Provided when you mapping through an Array , Whenever we called the Render Method react see that the element is not change by comparing the key propery of two element key property of previous state key === key  key property of current state then this particular component is ignore and move to the next component so this make the Algorithm very Fast so therefore always recommanded to use unique keys while mapping your Array or Creating a list

      //React
      //Ek Component ke Andar Agar Data Transfer karna ho to ham state use karte hai(Inside single Page)
      //Agar hamko two component ke bitch communication karvana ho to ham props use karte hai .


      // How does React Work?
      
      // React creates a VIRTUAL DOM in memory.
// Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
// React only changes what needs to be changed!
// React finds out what changes have been made, and changes only what needs to be changed.

//useEffect Hook
//The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
//useEffect(<function>, <dependency>)






      //SideEffects in React
      //Binding some Event,Fetching some Data

      //useEffect : cleanupfunction

      











      //React - Thunk
      //Redux Sync
      //Thunk Async

      //1.Thunk is function which is used to delay functionality
      //var x = 1+2
      // var thuncfunc =()=>{
      //     return 1 + 2
      // }
      // var x = thuncfunc();

      //2.Action are by default Synchronous

      //3.To have an Asynchronous function, we can wrap it inside thunk function

      // 4.login(){
      //     return(type : "login", Payload:"1234")
      // }

      // 5. login(){
      //     return()=>{ thunk
      //         return {
      //             type : "login" , payload : "1234"
      //         }
      //     }
      // }

      //6. login(){
      //     return()=>{ thunk
      //         return {
      // fetch("http://www.google.com").then(res=>res.json()).then((date)=>{

      //             type : "login" , payload : "1234"
      // })
      //         }
      //     }
      // }

      //7.install Redux-Thunk
      //npm install redux-thunk

      //8.connect redux-thunk with react-project
      //1.go to store
      //2.import applymiddleware from redux
      //3.use applymiddleware from createStore func
      //4. pass thunk in applymiddleware function

      //9.create action creators after redux-thunk
      //fetchProducts(){
      //     return(dispach,getstate)=>{
      //         // fetch("http://www.google.com").then(res=>res.json()).then((date)=>{

      //                 dispatch(setProducts(data))
      //     })
      // } }

      //Interview Rounds
      //Platform : Google Meet
      //Coding Environment : CodeSandbox

      //1 Machine Coding Round
      //
      //Task:- A UI will be given with specific functionalities where you have to code the whole UI within a specific time frame which is generally between 60-120 minutes.

      //Tech used:- Generally you have to code it using #html , #css and vanilla #javascript without use of any external library like jquery, react and bootstrap. There are some companies which may allow you to use #reactjs (very few companies).

      //How it is evaluated:-
      //Generally after given time interval they will check for functionality , edge cases and your coding approach. You dont need to complete 100% of the task but around 60-70% completion also works. The main focus is on quality of the code and the approach you take for a problem.

      //1. Nested component
      //2. Calendar App
      //3. Toast
      //4. Modal
      //5.Progress Bar
      //6.Create Star rating utility using HTML,CSS & JAVASCRIPT
      //7. Implement chess board using HTML, CSS and Vanilla Javascript, where if you click on any of the block it should highlight its diagonals.
      //8.Implement Progress bar using HTML, CSS and Vanilla Javascript ,it run on button click
      //9.Machine Coding - implement a basic react app to fetch and display from external API, follow questions were to add some features like searching, filtering, etc
      //10. Image Slider/Carousal

      //2. UI TECH ROUND

      // 1.How browser work
      //2. Prop drilling
      //3. prototypes
      //4. What is Browser object Model
      //5. Dom content load vs onload
      //6. Shadow Dom
      //7. What are Interceptors
      //8.How react work under Hood
      //9. Redux vs context Api and concept of Prop Drilling
      //10. Critical Rendering Path and Preload Scanner
      //11. SetTimeout with Date
      //12. React Performance Methodology and react fiber
      //13. Promises and Implement Promises.all
      //14. Implement trottle and debounce without using SetTimeout
      //15. How internals of Javascript works
      //16. Deep dive into React Fiber
      //17. What is Redux and How it Works
      //18. Question on git
      //19.How to Improve Web Performance
      //20. Mention those skill in resume you know
      //21. Question on Event Loop and Browser Object Model
      //22. what is Compose Function its Polyfill and minor tweaks to make it more generic
      //23. What is currying and coding question related to curring
      //24. question on project which did in college
      //25. What is Pipe and compose in Javascript and its polyfill for compose
      //26. What is server side rendering and its props and cons
      //27. Explain about Promises in javascript and write the Promise Polyfill
      //28. What is SetTimeout and how it works
      //29. Closures
      //30. this
      //31. asynch/await
      //32. Promises and Promises.all
      //33. Basics questions What is React , State ,  hooks, class components to coding a counter , cleanups and custom hooks
      //34. Object , new operator and event loop
      //35. Qustions on  Performance optimizations like debounce and throttle
      //36. How web Works
      //37. Familiar with HTML,CSS ,JAVASCRIPT (especially ES6 + Syntax)
      //38. Array Methods Map, filter, find, reduce, forEach
      //Ex Return the word more than 6 word
      //  const words = ["react","script","interview","style","javascript"]
      // const ans = words.filter((word)=> word.length>6)
      //  console.log(ans);
      //do it without the array method?
      //let newArr = []

      // for (let i = 0; i < words.length; i++) {
      //   if (words[i].length > 6) {
      //     newArr.push(words[i])
      //   }
      // }
      // console.log(newArr)

      //Difference between map and forEach
      // map returns a new Array, forEach doesn't
      // Return a new array where even numbers are multiplied by 2
      //with Map
      // let arr = [1, 2, 3, 4, 5, 6, 7]

      // function consoleEven(arr) {
      //   let data = arr.map((num) => (num % 2 === 0 ? num * 2 : num * 1))
      //   console.log(data)  // [1,  4, 3, 8, 5, 12, 7]
      // }
      // consoleEven(arr)

      //with ForEach
      // function consoleEven(arr) {
      //   let data = arr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1))
      //   console.log(data) // undefined
      // }
      // consoleEven(arr)

      //method chaining can be done in map but not forEach
      // we are converting the new array back to original
      // function consoleEven(arr) {
      //   let data = arr
      //     .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
      //     .map((item) => (item % 2 === 0 ? item / 2 : item / 1))
      //   console.log(data)
      // }
      // consoleEven(arr)

      //Note: map and forEach don't mutate the original array

      //39. Polyfill of map https://rajatgupta.xyz/js-interview-1
      //40. == vs ===
      // == converts the operand to the same type and then compares them

      // === depicts strict equality check. It checks for same type and same content
      //ex let a = null
      // let b

      // console.log(a == b) // true
      // console.log(a === b) // false

      // // why?

      // console.log(typeof a) // object
      // console.log(typeof b) // undefined

      //41. Implicit vs Explicit Binding
      // Implicit binding is when you invoke a function in an object using dot notation.
      //ex
      //function myFunc() {
      //     console.log(this)
      //   }

      // const obj = {
      //   bool: true,
      //   myFunc: myFunc,
      // }

      //Explicit binding is when you force a function to use a certain object as its this.

      // Ways to do that:
      //              call()                  apply()           bind()
      //execution    runs instantlay      runs instantlay        assing and use later
      //parameter     list of items           arrary []          list of items

      //ex
      //const myData = {
      //     name: 'Rajat',
      //   city: 'Delhi',
      //   displayStay: function () {
      //     console.log(this.name, 'stays in', this.city)
      //   },
      // }
      // myData.displayStay()

      // // create an object yourData and try to use displayStay
      // const yourData = {
      //  name: 'name',
      //  city: 'city'
      // }

      // // answer
      // myData.displayStay.call(yourData)

      //Note: For an arrow function, it depends on the lexical scope, that is to say, the outer function where the arrow function is declared.

      //42.Async and defer
      //Async and defer are boolean attributes which can be loaded along with the script tags. They are useful for loading external scripts into your web page.
      //If there are multiple scripts which are dependant on each other, use defer. Defer script are executed in the order which they are defined.
      // If you want to load external script which is not dependant on execution of any other scripts, use async.
      // Note: Async attribute does not guarantee the order of execution of scripts.

      //43.  Difference between Local and session storage
      // localStorage: Data persists even after closing your session

      // sessionStorage: Data is lost when your session is over, ie, on closing the browser on the tab

      // save
      // localStorage.setItem('key', 'value')
      // // get saved data
      // let data = localStorage.getItem('key')
      // // remove saved data
      // localStorage.removeItem('key')
      // // Same for sessionStorage

      //44.setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
      // setInterval() does the same for specified intervals.
      // Finally, clearInterval() is used to stop the timer.

      //44. Performance Optimization
      // Debouncing
      // Throttling
      // Caching
      // Code Splitting
      // Bundling, Minification
      // Server-side rendering
      // Note: Generally not asked to freshers 👶 but good to know

      //https://rajatgupta.xyz/js-interview-2

      //45. HTML, CSS questions as well, ex: async vs defer, position properties, box modal, event listeners, etc
      //46.1.Why and what is JS ?2.Different types of function calling 3.Arrow functions 4 Call,apply,bind 5.Complete Event loop working (Asynchronous handling in JS) 6.Closures (explain and create it,including merits and demerits) 7.let,var,const 8.Hoisting 9 General output questions in JS and some more questions related to JS
      // Important : Be ready to code while explaining for all concepts.
      //47. React life-cycle Props and States A simple task in it (take input and show changes while inputting ) Hooks Working of states Class based and functional based components. and some more..//48.Ex - debounce + throttling (very common nowadays), event handling with delegation, event capturing phase, scope, let/var, promise + promise.all, convert setTimeout to promise, async, fetch/XHR, REST methods (when to use which), how does a webpage load from start, layout, rendering, etc.
      //47. Polyfill for bind Method
      //48. Recurssion questions
      //49. Api given then you want filter out product 
      //50. Prototype Inheritance
      //51. promise with Asncy await
      //52. What is Service Workers
      //53. null vs undefined
      //54. Event Delagation
      //55. Flatter the Array
      //56. var vs let vs const
      //57. Explain call() apply() and bind()
      //58. Composition Polyfill
      //59. Explain life cycle method with class and functional component
      //60. What is CSS box model
      //61. Ways to Center a Div
      //62. Implement Debounce Function in React Js
      //63. TDZ and Hoisting
      //64. Implement caching and Memoize Function
      //65. Infinite Currying without using a Method
      //66. Polyfill of map, filter, reduce




      //3. Problem solving and Data Structure
      //Prepare basic leetcode questions for algo/ds. The questions are not going to build on top of popular algorithms. Interviewers will explain the problem and expect you to come up with atleast some naive solution and then optimise it (with hints).
      //1.Easy question on binary search
      //2.medium question on Array
      //3. Given an array of objects [{banana: 5, apples:5}, {pear: 6}, {apples: 5}, {banana:2}], return an object with the sum of all the fruits
      // Ex: { apples: 10, banana: 7, pear:6 }

      //4. Given a number in string format, return a single-digit no by recursively adding the digits in a string format

      // Ex:
      //  - Input: '345'
      //  - Output: '3'
      //5.Build a dynamic form component with a progress bar indicating the progress of the inputs that were filled. We have to use an object and render the form accordingly
      //6.And later on, the interviewer asked me some situational questions like

      // How do you review a pull request.
      // Is there any situation where there was a huge gap of understanding between me and the product manager.
      // What's the motivation to join ZestMoney
      // After that, I also asked some questions related to projects, tech stack, culture, etc.
      //7.Find the repeating and the missing | Added 3 new methods
      //8. Next Greater Element
      //9. problem solving question (leetcode easy problem - search from both sides, basic dynamic programming, etc) and
      //10. data structure question (ex. tree traversal in various orders, stack, etc).
      //11.This is an online test on Hackerrank which consisted of 3 questions 👇
      //12.// DSA question: Brackets pair-matching matching problem.
      // JavaScript Problem Solving: Flatten Array problem.
      // HTML, CSS question: It was a simple UI question, where I have to build 3 circles circumcised inside one other UI(I'm not really getting how can I frame this 😅)
      //13. Problem solving in JS: implement deepCopy() https://saideepesh.hashnode.dev/frontend-engineer-interview-experience-at-tekion-corp
      //14.DSA - two sum problem with and without a sorted array
        //15. DFS AND BFS tree Searching



      //4. HR manager Round
      //1.Question on Projects and previous work experience and some interpersonal skills
      //2. The interviewer asked me questions related to my projects, mostly about 'How I implemented a particular feature.
      //3.Most of the questions were based on web security and core JavaScript. https://reactsecurity.io/
      //4.some tech questions (authentication, cookies in details, localstorage, new react features, some repeat questions from prev round, etc).
      //5.Web Performance Optimization
      //6. How you can improve web page speed
      //7.Know deep about your Project 

//       Winners of the 20 most exciting portfolio webisite/blog 🎉
//1.shubhamchopade.com - Shubham Chopade
//2. https://yashmantri20.me/ - Yash Mantri
//3. https://medhavimb.me/ - Medhavi Basera
//4. https://nsabita.com.np/web-designing/ - Sabita Neupane
//5.saurabhgupta.netlify.app - Saurabh Gupta
//6.Learnersbucket.com - Prashant Yadav
//7.debugmode.net  - Dhananjay Kumar
//8 .manojsatishkumar.com - Manoj Satish Kumar
//9. https://rjitsu.github.io - Rishav Jadon
//10.My portfolio : https://oswalgopal.github.io/ - Gopal Oswal
// My 3D portfolio:- https://oswalgopal.github.io/3D.html
// My CLI portfolio:- https://oswalgopal.github.io/cli.html 
//11. arn4b.tech - Arnab Chatterjee
//12. anukritik.com - Anukritik .
//13. rashimnarayantiku.github.io - Rashim N Tiku
// 14.codingpal.org - Sai Krishna Dronavalli
//15. sumitdey.tech - Sumit Dey ✨
//16. hugs4bugs.me - SHUBHENDU S.
//17. shubhamrath.dev - Shubham Rath
// 18.ashutoshhathidara.com - Ashutosh Hathidara
//19.smithgajjar.dev - Smith Gajjar
//20.codewithdolly.netlify.app - Dolly Singh





      //DSA Important
      //1.Array 
      //2.Stack
      //3.Queue
      //4.Searching and Sorting  
      //5.Recurssion

      //6. Linked-list
      //7. Tree(Binary Tree and Heaps Tree)
      //8. Graph(depth-first and breadth first)
      //10. Algorithm Complexity
      //11. Time and Space Complexity of 1. Binary Search 2. Bubble Sort
            //3.Insertion Sort 4. Merge Sort 5. Quick Sort 6. Selection Sort
     

        // () => () directly return we cant use conts inside it
        //() => { return} can't return directly we want declare return inside it



      //   <div className="row">
      //       <h4>Here are a few technologies I've been working with recently:</h4>
      //     <div className="col-md-2">
      //      <span>&#9655; CSS 3</span> 
      //      <span>&#9655; Bootstrap</span> <span>&#9655; Material UI</span> 
      //      <span>&#9655; Jest</span>  <span>&#9655; SaaS</span>
      //     </div>
      //     <div className="col-md-2">
      //     <span>&#9655; JavaScript(ES6+)</span> <span>&#9655; React</span> 
      //      <span> &#9655; Redux</span> <span>&#9655; Git and Gitlab</span> 
      //      <span>&#9655; HTML 5</span> </div>
      //     <div className="col-md-8">
      //       <div id='Email-id'>
      //       Email:abhaybhongade63@gmail.com
      //       </div>
      //   </div>
      // </div>
