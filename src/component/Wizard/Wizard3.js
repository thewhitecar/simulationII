import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {handleMonthlyMortgageAmountInput, handleDesiredRentInput} from '../../ducks/reducer'

class Wizard3 extends Component{



    handleAddClick=()=>{
        // let obj = {
        //     house_name: this.props.house_name,
        //     address: this.props.address,
        //     city: this.props.city,
        //     state: this.props.state,
        //     zipcode: Number(this.props.zipcode),
        //     image: this.props.image,
        //     monthly_mortgage_amount: Number(this.props.monthly_mortgage_amount),
        //     desired_rent: Number(this.props.desired_rent)
        // }
        axios.post('/api/houses').then(results => {
          this.setState({
            house_name: "",
            address: "",
            city: "",
            state: "",
            zipcode: {},
            image: "",
            monthly_mortgage_amount: "",
            desired_rent: ""
        })
        this.props.history.push('/');
      })
    }


    render(){
        const {handleMonthlyMortgageAmountInput, handleDesiredRentInput, monthly_mortgage_amount, desired_rent} = this.props;
    return (
        <div class="Wiz">
            <div class="wiz_subheader">
                <h2 class="wiz_heading">Add New Listing</h2>
                <Link to="/"><button class="wiz_subheader_button" >Cancel</button></Link>
            </div>
            <div>
                <div class="wiz_input_container">
                    <div style={{textAlign: "center", fontWeight: 700, margin: "20px"}}>Recommended Rent: $0</div>
                        <div class="wiz_input_box">
                            <p>Monthly Mortgage Amount</p>
                            <input value={monthly_mortgage_amount} onChange={ ( e ) => handleMonthlyMortgageAmountInput( e.target.value ) }type="number"style={{width: "35vw"}}/>
                        </div>
                        <div class="wiz_input_box">
                        <p>Desired Monthly Reeent</p>
                        <input value={desired_rent} onChange={ ( e ) => handleDesiredRentInput( e.target.value ) } type="number"style={{width: "35vw"}}/>
                    </div>
                </div>
                <Link to="/wizard/step2"><button class="wiz_button wiz_prev_button">Previous Step</button></Link>
                <button class="wiz_button wiz_complete_button" onClick={this.handleAddClick}>Complete</button>
            </div>
        </div>
    )
}
}

function mapStateToProps(state){
    const {monthly_mortgage_amount, desired_rent} = state;
    return{
        monthly_mortgage_amount,
        desired_rent
    }
}

export default connect (mapStateToProps, {handleMonthlyMortgageAmountInput, handleDesiredRentInput})( Wizard3);