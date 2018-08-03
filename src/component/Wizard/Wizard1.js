import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {handleNameInput, handleAddressInput, handleCityInput, handleStateInput, handleZipcodeInput} from '../../ducks/reducer';

class Wizard1 extends Component{


    render(){
        console.log(this.props)
        const {house_name, address, city, state, zipcode,handleNameInput, handleAddressInput, handleCityInput, handleStateInput, handleZipcodeInput} = this.props;
        return(
            <div class = "Wiz">
                <div class="wiz_subheader">
                    <h2 class="wiz_heading">Add New Listing</h2>
                     <Link to="/"><button class="wiz_subheader_button" >Cancel</button></Link>
                </div>
                <div class="wiz_input_container">
                   <div class="wiz_input_box">
                        <p>Property Name</p>
                        <input type="text" placeholder="" value={house_name} onChange={ ( e ) => handleNameInput( e.target.value ) }/>
                    </div>
                    <div class="wiz_input_box">
                        <p>Address</p>
                         <input type="text" placeholder="" value={address} style={{width: "35vw"}} onChange={ ( e ) => handleAddressInput( e.target.value ) }/>
                    </div>
                    <div class="wiz_input_box">
                        <p>City</p>
                         <input type="text" placeholder="" value={city} onChange={ ( e ) => handleCityInput( e.target.value ) }/>
                    </div>
                     <div class="wiz_input_box">
                         <p>State</p>
                         <input type="text" placeholder="" value={state} onChange={ ( e ) => handleStateInput( e.target.value ) } style={{width: "70px"}}/>
                     </div>
                    <div class="wiz_input_box">
                            <p>Zip</p>
                            <input type="number" value={zipcode} onChange={ ( e ) => handleZipcodeInput( e.target.value ) } style={{width: "100px"}}/>
                    </div>
            </div>
            <Link to="/wizard/step2"> <button 
            
            class="wiz_button" >Next Step</button></Link>
            </div>
        )
    }

}

function mapStateToProps( state ) {
    const { house_name, address, city, zipcode } = state;
  
    return {     
    house_name,
    address,
    city,
    state: state.state,
    zipcode
    };
  }


export default connect (mapStateToProps, {handleNameInput, handleAddressInput, handleCityInput, handleStateInput, handleZipcodeInput})( Wizard1 );