import React, { Component } from 'react';


class Stopwatch extends Component{

constructor(props){
  super(props);
  this.state={
    running : false,
    time : 0,
    previousTime : 0
  }
  this.onStart = this.onStart.bind(this);
  this.onStop = this.onStop.bind(this);
  this.onReset = this.onReset.bind(this);
  this.onTick = this.onTick.bind(this);
}

onTick(){
  this.setState({
    time: this.state.time + 1
  });
}

componentDidMount(){
  
}

componentWillUnmount(){
  clearInterval(this.interval);
}

onStart(){
  this.setState({
    running : true
  });
  this.interval = setInterval(this.onTick, 1000);
}

onStop(){
  this.setState({
    running : false
  });

  clearInterval(this.interval);
}

onReset(){
  this.setState({
    time : 0
  });
  if(this.state.running){
    this.setState({
      running : false
    });
    clearInterval(this.interval);
  }
}


  render(){
    return(
        <div className="stopwatch">
          <h2>Stopwatch</h2>
          <div className="stopwatch-time">
            {this.state.time}
          </div>
          {(this.state.running) ?
            <button onClick={this.onStop}>Stop</button>
            :
            <button onClick={this.onStart}>Start</button>
          }
          <button onClick={this.onReset}>Reset</button>
        </div>
    );
  }

}

export default Stopwatch;
