import React from 'react';

export default function House(props){
    
    return(
        <div class="House">
            <div class="house_detail_box">
                <div class="house_img">
                </div>
            </div>
            <div class="house_detail_box">
                <p>Property Name: {props.info.house_name}</p>
                <p>Address: {props.info.address}</p>
                <p>City: {props.info.city}</p>
                <p>State: {props.info.state}</p>
                <p>Zip: {props.info.zipcode}</p>
            </div>
            <img onClick={() => props.delete(props.info.id)}src={'https://image.flaticon.com/icons/svg/69/69381.svg'} alt="delete button" style={{height: "15px", width: "15px"}}/>
        </div>
    )
}