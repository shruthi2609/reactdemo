import React from "react";
class FormElements extends React.Component{
    constructor(props)

{
    super(props)
    this.state={
        tech:'',
        projects:'',
        agree:true
    }
}
// handleTech=(e)=>{
//     console.log(e.target.value)
//     this.setState({tech:e.target.value})
// }
// handleExp=(e)=>{
//     console.log(e.target.value)
//     this.setState({projects:e.target.value})
// }
// handleAgreement=(e)=>{
//     this.setState({agree:!this.state.agree})
// }
// handleChange=(e,keyword)=>{
// if(keyword==="technology"){
//     this.setState({tech:e.target.value})
// }
// if(keyword==="exp"){
//     this.setState({projects:e.target.value})
// }
// else{
//     this.setState({agree:!this.state.agree})
// }
// }
handleChange=(e)=>{
 const {name,value}=e.target
 console.log(name,value)
 this.setState({[name]:value})
}

render(){
    return(
        <form>
            {console.log(this.state)}
          
           Select your tech: <select name="tech" onChange={(e)=>this.handleChange(e)}>
                <option value="">---select---</option>
                <option value="React JS">React JS</option>
                <option value="Node JS">Node JS</option>
                <option value="Express JS">Express JS</option>
            </select>
            <br></br>
            Add your experience:<textarea name="projects" cols="20" rows="10" onChange={(e)=>this.handleChange(e)}>

            </textarea>
            <br></br>
           I Agree to the terms and condition <input type="checkbox" name="agree" checked={this.state.agree} onChange={(e)=>this.handleChange(e)}></input>
           <button>submit</button>
        </form>
    )
}
}
export default FormElements