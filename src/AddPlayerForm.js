import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddLPlayerForm extends Component{

  constructor(props){
    super(props);

    this.state ={
      name : ""
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(e){
    e.preventDefault();
    this.props.addPlayer(this.state.name);

    this.setState({
      name : ""
    });
  }

  onNameChange(e){
    this.setState({
      name : e.target.value
    });
  }

  render(){
    return(
      <div className="add-player-form">
          <form onSubmit={this.addPlayer}>
              <input type="text" value={this.state.name} onChange={this.onNameChange}/>
              <input type="submit" value="Add Player"/>
          </form>
      </div>
    );
  }
}

AddLPlayerForm.propTypes = {
  addPlayer : PropTypes.func.isRequired
}



export default AddLPlayerForm;
