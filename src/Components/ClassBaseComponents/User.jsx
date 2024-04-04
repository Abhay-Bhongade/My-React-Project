import { Component } from "react";



class User extends Component{
constructor(props){
  super(props);

  this.state={
    userInfo: {
      user :"",
      location :"",
    }

  }
  console.log("constructor is Called");

}

async componentDidMount(){
const data = await fetch(`https://api.github.com/users/Akshaymarch7`);
const json = await data.json()
console.log("data",data);
console.log("json",json);

this.setState({
  userInfo: json
})

console.log("Component Did Mount is Called");
}

componentDidUpdate(){
  console.log("Component Did Update is Called");
}

componentWillUnmount(){
  console.log("Component will Unmount is Called");
}

render(){
  console.log("Render is Called");

  const {name,location} = this.state.userInfo;
  return(
    <>
    <h3>In this User Component we make an API call</h3>
    <h5>His name is {name} and he lives in the {location}</h5>
    </>
  )
}


}

export default User;