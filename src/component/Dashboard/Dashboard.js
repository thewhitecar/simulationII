import React, { Component } from 'react';
import House from '../House/House'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state ={
            houses : []
        }
    }

    componentDidMount = () => {
        axios.get('/api/houses').then(results => {
          this.setState({
              houses: results.data
            })
        })
      }

    
      deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then( response => {
            this.setState({
                houses: response.data
            })
        })
    }

    render(){
        var housesMap =this.state.houses.map(e => {
            return <House info={e} delete={this.deleteHouse}/>})
        return(
                <div class="Dash">
                    <div class="dash_subheader">
                        <h2 class="dash_heading">Dashboard</h2>
                        <Link to="/wizard"><button class="dash_subheader_button">Add New Property</button></Link>
                    </div>
                    <div class="dash_prop_container">
                        <h3 class="dash_prop_heading">Home Listings</h3>
                        {housesMap}
                    </div>
                </div>
        )
    }

}