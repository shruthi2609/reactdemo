import React from "react";
class DashBoardHooks extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username}=this.props.userdata
        {console.log("child dashboard")}
        return(
        <>
        <h1>Welcome {username}</h1>
        <button onClick={this.props.toggleFunc}>logout</button>
        </>
        )
    }
}
export default DashBoardHooks