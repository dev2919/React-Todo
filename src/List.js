import React from 'react';
import './App.css';

class List extends React.Component{



  toggle_tick = (e) =>{
    console.log(e.target,e.target.getAttribute('identity'));
    this.props.triggerParentUpdate(e.target.getAttribute('identity'));   
  }

  toggle_cross= (e) =>{
    
    // console.log( );
    document.getElementsByClassName(e.target.getAttribute('identity'))[0].style.display = "none";
    
    document.getElementById(e.target.getAttribute('identity')).querySelector('p').style.textDecoration = "line-through"; 
  }

  toggle_text = (e) =>{
     e.target.style.textDecoration == "line-through"? e.target.style.textDecoration = "none":e.target.style.textDecoration = "line-through";
  }

  render(){
  return (
      <tr >
    <div className="list">
    <div className="list-item">
    <td className="option" >
      <div  className="op1" key={this.props.key} onClick={e => this.toggle_cross(e)}>
<svg identity={this.props.identity} className={this.props.identity} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  identity={this.props.identity} className={this.props.identity}   d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0014.869 6.275 20.744 20.744 0 0014.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"/><path  identity={this.props.identity} className={this.props.identity}   d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"/></svg>
</div>

<div  className="op2" key={this.props.key} onClick={e => this.toggle_tick(e)}>

<svg identity={this.props.identity} height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path identity={this.props.identity} d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0"/><path identity={this.props.identity} d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0"/><path identity={this.props.identity} d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0"/></svg>
</div>
    </td>
    
    <td id={this.props.identity}>
    <p id="text-content"  onClick={e => this.toggle_text(e)}>
    {this.props.content}
    </p>
    </td>
    </div>
    </div>
    </tr>
  );
}
}

export default List;
