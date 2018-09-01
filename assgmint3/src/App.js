import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';
class App extends Component {
  constructor(){
super();
this.state={
  user:false,
  addform:false,
  currentIndex:null,
  Employeelist:[
    {
      first : "Muhammad",
      last :  "Zeeshan",
      email : "Zeeshankhan@gmail.com",
      salary : "520,000",
      Date : "31/8/2018"

    },
  ]
}

 }

logout()
{
  return this.setState({user:false});
}
 login()
{
 
return(
    <div>
      <center>
     <table>
      <tr><td><label>Email :</label></td>
   <td> <input   placeholder="Enter Email" id="email" /></td>
    </tr>
  
    <tr>
    <td><label>Password </label></td>
   
   
       <td>
    <input type="Password" placeholder="Enter Password" id="password"/>
    </td>
    </tr>

    <button onClick={
      ()=>{
        const email=document.getElementById("email").value;
        
        const password=document.getElementById("password").value;
        email=="z" && password=="z"?
        this.setState({user:true})
        :
        swal("Access Deneid", "Please Enter Correct Email And Password");

        }
      }
    > login</button>
    </table>
</center>
    </div>
)
  



}
firstupdate(e)
{
  this.setState({editfirst:e.target.value});


}
lastupdate(e)
{
  this.setState({editlast:e.target.value});


}
emailupdate(e)
{
  this.setState({editemail:e.target.value});


}
salaryupdate(e)
{
  this.setState({editsalary:e.target.value});


}
dateupdate(e)
{
  this.setState({editdate:e.target.value});


}
cancel()
{
this.setState({currentIndex:null});
}
update(i)
{
  const {editfirst,Employeelist,editdate,editemail,editsalary,editlast}=this.state;
  editfirst && (Employeelist[i].first = editfirst);
  editlast && (Employeelist[i].last = editlast);
  editemail && (Employeelist[i].email = editemail);
  editsalary && (Employeelist[i].salary = editsalary);
  editdate && (Employeelist[i].Date = editdate);
  this.setState({currentIndex:null});
}
showtable()
{
  const {currentIndex}=this.state;
  return(
    <center>
    <div> 
      <table border="1">
        <tr>
          <th>First name</th>
          <th>last name</th>
          <th>email</th>
          <th>salary</th>
          <th>Date</th>
          <th colspan="2">Action</th>
          </tr>

          {this.state.Employeelist.map((item,index)=>
          {
            return(
              currentIndex != index?
            
              <tr>
            <td>{item.first}</td>
            <td>{item.last}</td>
            <td>{item.email}</td>
            <td>{item.salary}/=</td>
            <td>{item.Date}</td>
            <td><button onClick={this.edit.bind(this,index)}>Edit</button></td>
            <td><button onClick={this.delete.bind(this,index)}>Delete</button></td>
            </tr>
            :
            <tr>

            <td><input defaultValue={item.first} onChange={this.firstupdate.bind(this)}/></td>
            <td><input defaultValue={item.last} onChange={this.lastupdate.bind(this)}/></td>
            <td><input defaultValue={item.email} onChange={this.emailupdate.bind(this)}/></td>
            <td><input defaultValue={item.salary} onChange={this.salaryupdate.bind(this)}/></td>
            <td><input defaultValue={item.Date} onChange={this.dateupdate.bind(this)}/></td>
    
    
    
            
            <td><button onClick={this.cancel.bind(this,index)}>Cancel</button></td>
            <td><button onClick={this.update.bind(this,index)}>update</button></td>
            </tr>



           )
          })
        }
        </table>
        



 <br/>
    <br/>

      <button onClick={()=>  this.setState({addform:true}) }>add form</button>
      <button onClick={()=>  this.logout()}>Log Out</button>
    </div>
    </center>
  )

}
edit(i)
{
this.setState({currentIndex:i});

}
delete(i)
{

  const {Employeelist}=this.state;
  Employeelist.splice(i,1)
  this.setState({Employeelist});
  swal("Deleted","Has been deleted","success");
  
}
addEmployee()
{
  const first=document.getElementById("firstname").value;
  const last=document.getElementById("lastname").value;
  const email=document.getElementById("email").value;
  const salary=document.getElementById("salart").value;
  console.log(first+last+email+salary);
  const Datevalue= new Date();
  const Datee=Datevalue.getDate();
  
  const {Employeelist,addform}=this.state;
  
    Employeelist.push({
    first:first,
    last:last,
    email:email,
    salary:salary,
    Date:Datee
  

  },
);
  
  
  swal("Employee Add", "Employee has been added!", "success");
 this.setState({
   addform:false,
  



})
}
addform()
{
  return(
    <div>
      <center>
      <table>
        <tr>
          <td>
      <label>First Name</label></td>
     <td> <input placeholder="Enter First Name" id="firstname"/></td>
  </tr>
    <tr><td>  <label>last Name</label></td>
      <td><input placeholder="Enter Last Name" id="lastname"/></td>
</tr>
      <tr>
        <td><label>Email :</label></td>
      <td><input type="email" placeholder="Enter email Name" id="email"/></td>
</tr>
<tr>
      <td><label>Salary</label></td>
     <td> <input placeholder="Enter Salary " id="salart"/></td>
      <br/>
    <br/>
    </tr>
    <tr>
<td>      <button  onClick={()=>
    {
      this.addEmployee();
    }}>
    Add Employee 
    </button>
    </td>
    <td></td>
    </tr>
    </table>
</center>
  </div>
  )
} 
  render() {
    const {user,addform,Employeelist}=this.state;
    return (
      <div className="App">
  <h1> Assigment No 3</h1>
     {!user && this.login()}
     {user && !addform && this.showtable()}
     {user && addform && this.addform()}

   
   
   
   
  
 
      </div>
    );
  }
}

export default App;
