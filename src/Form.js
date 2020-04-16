import React, { Component } from 'react'

class Form extends Component{


    constructor(props){
        super(props);
      this.state = {fullname: "sana",
                    email: "abc@mail.com",
                    phone:"1233455",
                    msg:"Enter Your review."
    
    }
        
    }

    // handlename= (event) =>{
    //     //console.log(event.target.value);
    //     this.setState({ fullname: event.target.value})
    // }
    // handleemail= (event) =>{
    //     //console.log(event.target.value);
    //     this.setState({ email: event.target.value})
    // }
    // handlenumber= (event) =>{
    //     //console.log(event.target.value);
    //     this.setState({ phone: event.target.value})
    // }
    // handlemsg= (event) =>{
    //     //console.log(event.target.value);
    //     this.setState({ msg: event.target.value})
    // }

    handlechangeall = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }



    handlesubmit=(event)=>{
        alert(`my name is ${this.state.fullname}
            my name is ${this.state.email}
            my name is ${this.state.phone}
            my name is ${this.state.msg}`);
        event.preventDefault();
    }



    render(){
        return(
            <div>
            
            <form onSubmit={this.handlesubmit}>
            <br/><br/><br/>
            <label for="fullname">First Name</label>
            <input type="text" id="fullname" name="fullname" value={this.state.fullname} onChange={this.handlechangeall}/><br></br>
            
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handlechangeall}/><br></br>

            <label for="phone">Phone</label>
            <input type="number" id="phone" name="phone" value={this.state.phone} onChange={this.handlechangeall}/><br></br>

    
            <textarea rows="4" cols="50" name="msg" value={this.state.msg} onChange={this.handlechangeall}></textarea><br></br>
            
            <input type="submit" value="Send"/>


            </form>
            
            
            </div>
        )
    }
}

export default Form