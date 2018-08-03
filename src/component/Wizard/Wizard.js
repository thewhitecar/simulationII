import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Wizard1 from './Wizard1'
import Wizard2 from './Wizard2'
import Wizard3 from './Wizard3'
import { connect } from 'react-redux'
import {  initialState } from '../../ducks/reducer'


export default class Wizard extends Component{

    render(){

        return(
          <div class="Wiz">

          <Route component={Wizard1}  path='/wizard/step1'/>
          <Route component={Wizard2}  path='/wizard/step2'/>
          <Route component={Wizard3}  path='/wizard/step3'/>

          <div class="Wiz">
          <div class="wiz_subheader">
          <h2 class="wiz_heading">Add New Listing</h2>

          <Link to="/"><button class="wiz_subheader_button" >Cancel</button></Link>

          </div>
          </div>
          </div>
        )
    }

}
