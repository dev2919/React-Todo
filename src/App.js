import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import FlipMove from 'react-flip-move';
let key=0;



class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      content:[{
        des:'',
        key:''
      }],
      text:'',
      date:'',
      month:'',
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
      content:content.concat({
        des:this.state.text,
        key:Date.now()
      })
    })
    this.hide();
  }

  delContent = (i) =>{
    const {content} = this.state;
    const e = document.getElementById("todo-input");
    let item = content[key];
    console.log(i);
    let index = content.findIndex(x => x.key == i);
    
    if (index !== -1) content.splice(index, 1);
    this.setState({
      content:content
    })
  }


  componentDidMount() {
    console.log = function(){};
     };

  expand = ()=>{
    document.getElementById("over").classList.add("mystyle");    
    document.getElementById("over").classList.remove("hidden");
    document.getElementById("time-smile").style.display="none";
    document.getElementById("hide-content").style.display="block";

    setTimeout(() => {
      document.getElementById("hide-content").style.opacity="1";
    }, 500);


    }

  hide = ()=>{
    document.getElementById("over").classList.add("hidden");    
    document.getElementById("over").classList.remove("mystyle");
    document.getElementById("time-smile").style.display="block";
    document.getElementById("hide-content").style.opacity="0";
    document.getElementById("hide-content").style.display="none";

  }  
  
   myFunction= ()=> {
    let d = new Date();
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let n = months[d.getMonth()];
    this.setState({
      date: d.getDate(),
      month: n
    })
  }

  componentDidMount() {
    this.myFunction();
  }
  
  render(){
    const {content,date,month} = this.state;
  return (
    <div className="App">
      <div className="list-main">
        <table>
      {content.map((string,index)=> index>0?  <FlipMove key={string.key} duration={500} easing="ease-in-out"><List key={string.key} identity={string.key} triggerParentUpdate={i => this.delContent(i)} content={string.des} /></FlipMove>:null)}
      </table>
      </div>
      <div className="add-div overlay hidden" id='over'>
        <div id="time-smile">

          <div id="time">
           <h2 id="date">{date}</h2>
           <h2 id="month">{month}</h2>
          </div>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="98.000000pt" height="134.000000pt" viewBox="0 0 98.000000 134.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M341 999 c-48 -48 -39 -128 19 -159 45 -24 109 47 110 123 0 67 -77
            89 -129 36z"/>
            <path d="M733 808 c-34 -39 -53 -72 -53 -93 0 -31 41 -65 78 -65 64 0 119 122
            74 163 -27 24 -75 21 -99 -5z"/>
            <path d="M112 715 c-42 -53 -37 -145 13 -231 31 -53 128 -143 186 -171 110
            -54 278 -33 362 45 37 35 38 97 2 136 -24 26 -26 26 -142 24 -109 -3 -121 -1
            -155 20 -21 13 -61 56 -89 95 -29 40 -62 80 -73 89 -32 26 -81 23 -104 -7z"/>
            </g>
           </svg>
        </div>
      <div id="hide-content">
        <h2>NEW TASK</h2>
          <div className="smile">

              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="189.000000pt" height="203.000000pt" viewBox="0 0 189.000000 203.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,203.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M1254 1460 c-27 -11 -68 -64 -83 -109 -17 -53 -13 -150 9 -198 46
              -102 165 -111 216 -16 37 68 48 125 35 194 -12 69 -36 103 -88 125 -36 16 -58
              17 -89 4z"/>
              <path d="M502 1435 c-67 -56 -85 -194 -38 -289 31 -63 75 -97 132 -104 39 -4
              47 -1 78 30 43 43 60 102 54 190 -6 75 -39 143 -87 177 -41 30 -101 28 -139
              -4z"/>
              <path d="M800 660 c-25 -25 -26 -72 -1 -126 22 -48 59 -80 112 -95 49 -15 111
              6 158 55 53 55 54 146 1 146 -10 0 -44 -14 -75 -30 l-58 -30 -15 22 c-28 40
              -70 78 -86 78 -9 0 -25 -9 -36 -20z"/>
              </g>
              </svg>

            </div><br/>
      <input id="todo-input" onChange={e => this.updateText(e)}></input>
      <br/>
      <button id="todo-submit" onClick={this.addContent}>SAVE</button>
      </div>
      </div>
      <button id="todo-task" onClick={this.expand}>ADD NEW TASK</button>
    </div>
  );
}
}

export default App;
