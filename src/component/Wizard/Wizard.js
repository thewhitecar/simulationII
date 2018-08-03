import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component{
    constructor(){
        super();
        this.state ={
            house_name: "",
            address: "",
            city: "",
            state: "",
            zipcode: {}
        }
    }

    handleNameInput = (e) => {
        this.setState({
          house_name: e.target.value
        })
      }

      handleAddressInput = (e) => {
        this.setState({
          address: e.target.value
        })
      }

      handleCityInput = (e) => {
        this.setState({
          city: e.target.value
        })
      }

      handleStateInput = (e) => {
        this.setState({
          state: e.target.value
        })
      }

      handleZipcodeInput = (e) => {
        this.setState({
          zipcode: e.target.value
        })
      }



      handleAddClick (){
        let obj = {
            house_name: this.state.house_name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: Number(this.state.zipcode)
        }
        axios.post('/api/houses', obj).then(results => {
          this.setState({
            house_name: "",
            address: "",
            city: "",
            state: "",
            zipcode: {},
        })
        this.props.history.goBack();
      })
    }

    render(){
        return(
            <div class = "Wiz">
                <div class="wiz_subheader">
                    <h2 class="wiz_heading">Add New Listing</h2>
                     <Link to="/"><button class="wiz_subheader_button" >Cancel</button></Link>
                </div>
                <div class="wiz_input_container">
                   <div class="wiz_input_box">
                        <p>Property Name</p>
                        <input type="text" placeholder="" value={this.state.handleNameInput} onChange={this.handleNameInput}/>
                    </div>
                    <div class="wiz_input_box">
                        <p>Address</p>
                         <input type="text" placeholder="" value={this.state.handleAddressInput} style={{width: "35vw"}} onChange={this.handleAddressInput}/>
                    </div>
                    <div class="wiz_input_box">
                        <p>City</p>
                         <input type="text" placeholder="" value={this.state.handleCiasdtyInput} onChange={this.handleCityInput}/>
                    </div>
                     <div class="wiz_input_box">
                         <p>State</p>
                         <input type="text" placeholder="" value={this.state.handleStateInput} onChange={this.handleStateInput} style={{width: "70px"}}/>
                     </div>
                    <div class="wiz_input_box">
                            <p>Zip</p>
                            <input type="number" value={this.state.handleZipcodeInput} onChange={this.handleZipcodeInput} style={{width: "100px"}}/>
                    </div>
            </div>
                <button class="wiz_button" onClick={this.handleAddClick.bind(this)}>Complete</button>
            </div>
        )
    }

}