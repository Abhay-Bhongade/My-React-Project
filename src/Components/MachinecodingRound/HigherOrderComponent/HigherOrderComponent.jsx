

//our Higher Order Component
//Higher Order component is a function which take another component as argument and return a component with adding extra functionality or properties to it 

const HigherOrderComponent = (Component)=>{

    const sampleObject = {
        name:"Abhay",
        role:"React Developer",
        company:"Saviesa Infotech"
    }
    return ()=> <Component value={sampleObject} />

}

export default HigherOrderComponent;

