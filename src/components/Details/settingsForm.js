import React, { Component } from 'react';
import UnoButton from './../UnoButton/index';

class SettingsForm extends Component {
  constructor() {
    super()
    this.state = {
      min_g_h: 0.1,
      max_g_h: 2,
      min_h: 0.1,
      max_h: 0.9,
      min_lig: 0.1,
      max_lig: 0.9,
      min_temp: 0.1,
      max_temp: 0.9
    }
    this.handleChange = this.handleChange.bind(this)
   
  }
  
  componentDidMount() {
    const url = 'http://localhost:8080/settings'
    fetch(url).then(response => response.json())
    .then(response => {
      this.setState({
        min_g_h: response.data[0].min_ground_humidity,
        max_g_h: response.data[1].max_ground_humidity,
        min_h: response.data[2].min_humidity,
        max_h: response.data[3].max_humidity,
        min_lig: response.data[4].min_lighting,
        max_lig: response.data[5].max_lighting,
        min_temp: response.data[6].min_temperature,
        max_temp: response.data[7].max_temperature
      })
    })
    .catch(console.error)
  
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }
  render () {
      return (
        <form>
          <h3>Change your Settings: </h3>
          <label>Min Ground Humidity: </label>
          <input name='min_g_h' value={this.state.min_g_h} onChange={this.handleChange}></input><br/>
          <label>Max Ground Humidity: </label>
          <input name='max_g_h' value={this.state.max_g_h} onChange={this.handleChange}></input><br/>
          <label>Min Humidity: </label>
          <input name='min_h' value={this.state.min_h} onChange={this.handleChange}></input><br/>
          <label>Max Humidity: </label>
          <input name='max_h' value={this.state.max_h} onChange={this.handleChange}></input><br/>
          <label>Min Lighting: </label>
          <input name='min_lig' value={this.state.min_lig} onChange={this.handleChange}></input><br/>
          <label>Max Lighting</label>
          <input name='max_lig' value={this.state.max_lig} onChange={this.handleChange}></input><br/>
          <label>Min Temperature: </label>
          <input name='min_temp' value={this.state.min_temp} onChange={this.handleChange}></input><br/>
          <label>Max Temperature: </label>
          <input name='max_temp' value={this.state.max_temp} onChange={this.handleChange}></input><br/>

          <UnoButton
            label='Save Changes'
          />

        </form>
      )
  }

}

export default SettingsForm