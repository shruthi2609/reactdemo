import React from "react";

class DashBoardClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username,role}=this.props.data
       
return(

    <>
       
    <h1>DashBoardComponent</h1>
    <h2>{username}</h2>
    <p>{role}</p>
    </>
)
    }
}
export default DashBoardClass