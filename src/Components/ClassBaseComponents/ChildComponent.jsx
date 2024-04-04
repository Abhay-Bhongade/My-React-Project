import React,{Component} from 'react'

class ChildComponent extends Component{
    constructor(props){
        //props
        super(props);

        //state
        this.state = {
            count:1,
        }

        console.log("constructor in child");

    }

    componentDidMount(){
        console.log("cmpdidmount in child");
    }



    render(){
        console.log("render in child");

        return(
            <>
            <div>This is the Class Base Component</div>
            <h3>count Value {this.state.count}</h3>
            <button onClick={()=>
                this.setState({
                    count:this.state.count + 1
                })
            }>Count Increase</button>
            </>
        )
    }
}

export default ChildComponent;