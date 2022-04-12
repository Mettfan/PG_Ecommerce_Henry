import './index.css';
import React from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const handleSelect = (e) => {
  e.preventDefault();
  console.log('e.target.value', e.target.value)
}
const createOrder = (data, actions) =>  {
  return actions.order.create({
    purchase_units: [
      {
        amount: {
          value: "0.01",
        },
      },
    ],
  });
}
const onApprove = (data, actions) =>  {
  return actions.order.capture();
}
function  handleSubmit(e){
  e.preventDefault()
}

const CartPay = () => { 

  return (
    <div>
        <div className="form-pay-container">
          <div className="pay-container">

            <div className="title-pay">
                <p>
                  Pagá con tu Visa Electron
                </p>
            </div>
            <div className="total-pay">
              <h3>TOTAL</h3>
              <h2>$350</h2>
            </div>
              <div className="pay">
                <p>Seleccione las cuotas</p>
                <select className="select-cart" onClick={(e) => handleSelect(e)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>6</option>
                    <option>9</option>
                    <option>12</option>
                </select>
              </div>  
              <div className="form-submit-pay">
              <input 
                type="submit"
                value="Cancelar"
                />
              <input 
                type="submit"
                value="Pagar"
                />
            </div>
          </div>
        </div>
                <div>

                <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
              />
                </div>
    </div>
  )
}

export { CartPay }