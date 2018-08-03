import React, { Component } from 'react';

export default class Wizard extends Component{
    constructor(){
        super();
        // this.state ={
        // }
    }

    render(){
        return(
            <div class = "Wiz">
                <div class="wiz_subheader">
                    <h2 class="wiz_heading">Add New Listing</h2>
                     <button class="wiz_subheader_button">Cancel</button>
                </div>
                <div class="wiz_input_container">
                   <div class="wiz_input_box">
                        <p>Property Name</p>
                        <input value=""/>
                    </div>
                    <div class="wiz_input_box">
                        <p>Address</p>
                         <input value="" style={{width: "35vw"}}/>
                    </div>
                    <div class="wiz_input_box">
                        <p>City</p>
                         <input value=""/>
                    </div>
                     <div class="wiz_input_box">
                         <p>State</p>
                         <input value="" style={{width: "70px"}}/>
                     </div>
                    <div class="wiz_input_box">
                            <p>Zip</p>
                            <input type="number" value="0" style={{width: "100px"}}/>
                    </div>
            </div>
                <button class="wiz_button">Complete</button>
            </div>
        )
    }

}