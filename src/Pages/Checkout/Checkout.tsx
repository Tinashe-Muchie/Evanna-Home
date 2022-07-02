import { useState } from 'react';
import { FaHome, FaCreditCard } from 'react-icons/fa';
import { ADDRESSFORM } from './AddressForm';
import { PAYMENT } from './Payment';
import { CONFIRMATION } from './Confirmation';

export const CHECKOUT = () => {

    const [ active, setActive ] = useState(0);
    const Next = () => {setActive((prevActiveStep) => prevActiveStep + 1)}
    const Prev = () => {setActive((prevActiveStep) => prevActiveStep - 1)}

    /*switch statement to alternate between address form, payment form and 
  confirmation form*/
  const getStep = (step: number) => {
    switch(step) {
      case 0:
        return <ADDRESSFORM next={Next}/>
      case 1:
        return <PAYMENT 
                  next={Next}
                  prev={Prev}
                />
      case 2: 
        return <CONFIRMATION />
      default: throw new Error()
    }
  }

    return (
        <div className='stepper_wrapper'>
            <div className='stepper_container'>
                <div 
                    className={(active===0) ? 'active_tab' : 'tab'}
                > 
                    <FaHome /> 
                </div>
                <div 
                    className={(active===1) ? 'active_tab' : 'tab'}
                >  
                    <FaCreditCard /> 
                </div> 
            </div>
            { getStep(active) }
        </div>
    );
}