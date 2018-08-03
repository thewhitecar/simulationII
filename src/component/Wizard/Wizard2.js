import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleNameInput, handleImageInput} from '../../ducks/reducer'


class Wizard2 extends Component{

    render(){
        console.log(this.props)
        const {handleImageInput, image, name} = this.props;
    return (
        <div class="Wiz">
            <div class="wiz_subheader">
                <h2 class="wiz_heading">Add New Listing</h2>
                <Link to="/"><button class="wiz_subheader_button" >Cancel</button></Link>
            </div>
            <div>
                <div class="wiz_input_container">
                    <div class="wiz_input_box">
                        <p>Image URL</p>
                        <input value={image} onChange={ ( e ) => handleImageInput( e.target.value ) } style={{width: "35vw"}}/>
                    </div>
                </div>
                <Link to="/wizard/step1"><button class="wiz_button wiz_prev_button">Previous Step</button></Link>
                <Link to="/wizard/step3"><button class="wiz_button wiz_step_button">Next Step</button></Link>
             </div>
        </div>
    )
}
}


function mapStateToProps( state ) {
    const { image } = state;
  
    return {     
        image
    };
  }

export default connect (mapStateToProps, {handleImageInput})( Wizard2 );