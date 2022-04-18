import React from "react";
import ReactDOM from "react-dom"
// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


export default function CreateUser(){
    // const stripe = useStripe()
    // const elements = useElements()

    // const createOrder = (data, actions) =>  {
    //     return actions.order.create({
    //       purchase_units: [
    //         {
    //           amount: {
    //             value: "0.01",
    //           },
    //         },
    //       ],
    //     });
    //   }

    // const onApprove = (data, actions) =>  {
    //     return actions.order.capture();
    //   }
    function  handleSubmit(e){
        e.preventDefault()
    }
    const CheckoutForm = ( ) => {
        return <form onSubmit={(e) => handleSubmit(e)}>
        {/* <PaymentElement></PaymentElement> */}
    </form>
    }

    return (<>
    
    {/* HERE YOU CAN CREATE AN USER 

    {/* <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
     */}
    </>)
}