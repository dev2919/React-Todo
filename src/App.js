import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      content:[],
      text:'',
      key:0
    }    
  }

  updateText= (e) =>{
    this.setState({
      text:e.target.value
    })
  }

  addContent = ()=>{
    const {content,key} = this.state;
    this.setState({
      text:'',
      content:content.concat(this.state.text)
    })
    console.log(content);
    
  }

  delContent = () =>{
    const {content,key} = this.state;
    const e = document.getElementById("todo-input");
    let item = e.value;
    let index = content.indexOf(item);
    console.log(content,index,item);
    if (index !== -1) content.splice(index, 1);
    this.setState({
      content:content
    })
  }


  render(){
    const {content} = this.state;
  return (
    <div className="App">
      <input id="todo-input" onChange={e => this.updateText(e)}></input>
      <button className="todo-submit" onClick={this.addContent}>+</button>
      <button className="todo-submit" onClick={this.delContent}>-</button>
      {content.map(string=><List content={string} />)}
    </div>
    
  );
}
}

export default App;
