import React from 'react';
import './App.css';

class List extends React.Component{

  render(){
  return (
    <div className="list">
      <ul>
  <li>{this.props.content}</li>
      </ul>
    </div>
  );
}
}

export default List;
