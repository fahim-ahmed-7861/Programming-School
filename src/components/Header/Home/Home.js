import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Course from '../../Course/Course';
import './Home.css'

const Home = () => {

  const  data=[{
        "Name": "Fahim Ahmed",
        "price": 1.26,
        "sub": "Machine Learning"
      }, {
        "Name": "Machine Learning",
        "price": 8.94,
        "sub": "Artificial Intelligence"
      }, {
        "Name": "Vulture, lappet-faced",
        "price": 9.12,
        "sub": "C++ Programming"
      }, {
        "Name": "Brown antechinus",
        "price": 0.40,
        "sub": "C programming"
      }, {
        "Name": "Java",
        "price": 1.49,
        "sub": "Java"
      }, {
        "Name": "Boar, wild",
        "price": 7.41,
        "sub": "React"
      }, {
        "Name": "Lemming, collared",
        "price": 0.91,
        "sub": "HTML"
      }, {
        "Name": "Malagasy ground boa",
        "price": 0.58,
        "sub": "SQL"
      }, {
        "Name": "Wolf, common",
        "price": 8.91,
        "sub": "Phython"
      }, {
        "Name": "Crab-eating fox",
        "price": 6.93,
        "sub": "Data Structure"
      }, {
        "Name": "American marten",
        "price": 6.94,
        "sub": "Algorithm"
      }, {
        "Name": "Mouse, four-striped grass",
        "price": "3.33",
        "sub": "JAVA SCRIPT"
      }, {
        "Name": "Gazer, sun",
        "price": 9.35,
        "sub": "Node js"
      }, {
        "Name": "Mongo DB",
        "price":  6.69,
        "sub": "Quire"
      }, {
        "Name": "PHP",
        "price": 3.92,
        "sub": "Shuffletag"
      }]

   const [cart,setCart]=useState([]);

  const AddProduct=(product)=>
   {
       console.log('product added',product);

       const newCart=[...cart,product];

       setCart(newCart);


   }

   

    return (
        <div className='home-container'>
            <div className="course-container">
            { 
                
         data.map(c=><Course course={c}
           AddProduct={AddProduct}></Course>)
           }
            </div>

            <div className="cart-container">

              <Cart cart={cart}></Cart>
              
            </div>
      

        </div>
    );
};

export default Home;