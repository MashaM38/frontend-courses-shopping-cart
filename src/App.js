import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import CourseApp from './component/CourseApp';


class App extends Component {
  render() {
    return (
      <div className="container">
        <CourseApp />
      </div>
    );
  }
}

export default App;
