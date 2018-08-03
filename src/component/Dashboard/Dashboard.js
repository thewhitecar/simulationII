import React, { Component } from 'react';
import House from '../House/House'

export default class Dashboard extends Component{
    constructor(){
        super();
        // this.state ={
        // }
    }

    render(){
        return(
                <div class="Dash">
                    <div class="dash_subheader">
                        <h2 class="dash_heading">Dashboard</h2>
                        <button class="dash_subheader_button">Add New Property</button>
                    </div>
                    <div class="dash_prop_container">
                        <h3 class="dash_prop_heading">Home Listings</h3>
                        <House/>
                    </div>
                </div>
        )
    }

}