import React from "react";
class AfterSubmit extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            password:'',
            unameErr:"",
            passwordErr:''
        }
    }
    handleChange=(e,keyword)=>{
        if(keyword==="username"){
            this.setState({username:e.target.value})
        }
       
        else{
            this.setState({password:e.target.value})
        }

    }
    handleSubmit=(e)=>{
        console.log(e.target.value)
        const {username,password}=this.state
        e.preventDefault()
        if(!username){
            this.setState({unameErr:"please enter the username"})
        }  
        if(!password){
            this.setState({passwordErr:"please enter the password"})
        }   

    }
    
    render(){
        return(
            <>
            <form>
              Username:  <input type="text" onChange={(e)=>this.handleChange(e,"username")}></input>
              <p style={{color:"red"}}>{this.state.unameErr}</p>
              Password:  <input type="text"onChange={(e)=>this.handleChange(e,"password")}></input>
              <p style={{color:"red"}}>{this.state.passwordErr}</p>
              <button onClick={(e)=>this.handleSubmit(e)}>submit</button>
            </form></>
        )
    }
}
export default AfterSubmit