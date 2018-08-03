const initialState = {
    house_name: "",
    address: "",
    city: "",
    state: "",
    zipcode: {},
    image: "",
    monthly_mortgage_amount: {},
    desired_rent: {},
}

const UPDATE_HOUSE_NAME = "UPDATE_HOUSE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY= "UPDATE_CITY";
const UPDATE_STATE= "UPDATE_STATE";
const UPDATE_ZIPCODE= "UPDATE_ZIPCODE";
const UPDATE_IMAGE= "UPDATE_IMAGE";
const UPDATE_MONTHLY_MORTGAGE_AMOUNT="UPDATE_MONTHLY_MORTGAGE_AMOUNT";
const UPDATE_DESIRED_RENT="UPDATE_DESIRED_RENT";
const CANCEL_ALL = "CANCEL_ALL"



function reducer(state = initialState, action){
  console.log('REDUCER HIT: Action ->', action );
    switch (action.type){
        case UPDATE_HOUSE_NAME : 
            return {...state, house_name: action.payload};
        case UPDATE_ADDRESS : 
            return {...state, address: action.payload};
        case UPDATE_CITY: 
            return {...state, city: action.payload};
        case UPDATE_STATE: 
            return {...state, state: action.payload};
        case UPDATE_ZIPCODE: 
            return {...state, zipcode: action.payload};
        case UPDATE_IMAGE: 
            return {...state, image: action.payload};
        case UPDATE_MONTHLY_MORTGAGE_AMOUNT:
            return {...state, monthly_mortgage_amount: action.payload};
        case UPDATE_DESIRED_RENT: 
            return {...state, desired_rent: action.payload};
        case CANCEL_ALL:
            return {initialState}

        default: return state;
}
}


  export function handleNameInput(house_name){
      return { 
      type: UPDATE_HOUSE_NAME,
      payload: house_name
    };
}
  

  export function handleAddressInput(address){
     return {
      type: UPDATE_ADDRESS,
      payload: address
    };
}
  

  export function handleCityInput(city){
     return { 
     type: UPDATE_CITY,
     payload: city
    };
}
  

  export function handleStateInput(state){
     return { 
     type: UPDATE_STATE,
     payload: state
    };
}
  

  export function handleZipcodeInput(zipcode){
     return { 
     type: UPDATE_ZIPCODE,
     payload: zipcode
    };
  }

  export function handleImageInput(image){
    return { 
    type: UPDATE_IMAGE,
    payload: image
   };
 }

 export function handleMonthlyMortgageAmountInput(monthly_mortgage_amount){
    return { 
    type: UPDATE_MONTHLY_MORTGAGE_AMOUNT,
    payload: monthly_mortgage_amount
   };
 }

 export function handleDesiredRentInput(desired_rent){
    return { 
    type: UPDATE_DESIRED_RENT,
    payload: desired_rent
   };
 }

//  export function cancelAll (){
//     return { 
//     type: CANCEL_ALL,
//     payload: initialState
//    };
//  }


export default reducer; 