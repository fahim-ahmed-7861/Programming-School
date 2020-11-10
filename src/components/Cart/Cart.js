import React from 'react';

const Cart = (props) => {
     const cart=props.cart;

        var total= cart.reduce((total,prod)=>total+=prod.price,0);
    
      
    
        
        return (
            <div>
                <h4>Order Summary</h4>
        <p>Item Orders :{props.cart.length}</p>

        <ol>

        { props.cart.map(sub=><li>{sub.sub}</li>)}
        </ol>
        <p>Course Price : {total}</p>
       
            </div>
    );
};

export default Cart;