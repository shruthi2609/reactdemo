import React from "react";
class SignInComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        {console.log("child signin")}
        return(
        <>
        <h1>Please Signin to continue</h1>
        
        <button>Login</button>
        </>
        )
    }
}
export default SignInComponent