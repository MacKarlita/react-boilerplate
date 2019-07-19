import React, { Component } from 'react';
import UnoButton from './../UnoButton/index';

class SettingsForm extends Component {
  render () {
      return (
        <form>
          <h3>Change your Settings: </h3>
          <label>Min Ground Humidity: </label>
          <input></input><br/>
          <label>Max Ground Humidity: </label>
          <input></input><br/>
          <label>Min Humidity: </label>
          <input></input><br/>
          <label>Max Humidity: </label>
          <input></input><br/>
          <label>Min Lighting: </label>
          <input></input><br/>
          <label>Min Temperature: </label>
          <input></input><br/>
          <label>Max Temperature: </label>
          <input></input><br/>

          <UnoButton
            label='Save Changes'
          />

        </form>
      )
  }

}

export default SettingsForm