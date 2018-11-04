import React, { Component } from 'react';
import logo from './logo.svg';
import Test from './components/Test';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: "哈哈",
            isShow: true,
            inputText: "123"
        }
    }
    myClick = () => {
        this.setState({
            text: this.state.text == "呵呵"?"哈哈":"呵呵",
            isShow: !this.state.isShow
        })
    }
    handleChange= (event) => {
        this.setState({inputText: event.target.value});
    }
  render() {
    var myStyle= {
        fontSize: '16px'
    };
    var myArr = [
        <span>123</span>,
        <br/>,
        <span>345</span>
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            我的第一个react程序
          </p>
          <a style={myStyle} 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World
          </a>
          <p style={myStyle} onClick={this.myClick}>点一下{1+1}</p>
          <Test text={this.state.text}></Test>
          {
              this.state.isShow ? (<p style={myStyle}>{myArr}</p>):(<p></p>)
          }
          <input type="text" value={this.state.inputText} onChange={this.handleChange}/>
          <p>{this.state.inputText}</p>
        </header>
      </div>
    );
  }
}

export default App;
