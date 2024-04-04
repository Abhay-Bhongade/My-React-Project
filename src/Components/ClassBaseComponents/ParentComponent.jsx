import { Component } from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component{
    constructor(props){
        super(props);
        console.log("constructor in parent");

    }

componentDidMount(){
    console.log("cmpdidmount in parent");
}


render(){
    console.log("render in parent");
    return(
        <div>
        <h5>This is the Parent Component</h5>
        <ChildComponent />
        </div>
    )
}


}

export default ParentComponent