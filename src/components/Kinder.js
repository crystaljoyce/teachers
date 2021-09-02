import React,{useEffect} from 'react';
import { ProductsView, SmallProduct} from './Product';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    getProductById,
    getAllProducts
  } from '../api';

const Kinder = ({order, token, user, product, products, getProducts, reviews, fetchOrder, setOrder, ProductsView}) => { 
    const {id,name,grade, prek, jrkinder, kinder, first, second, third, fourth, fifth, sixth, seventh, eighth, admin, imageURL, birthday, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = product;

        console.log('before the fetch')

        useEffect(() => {
            getProducts();
          },[]);
       
    // const fetchTeacher = async () => {
    //     try {
    //         const response = await fetch(`api/products`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'Application/json',
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         const data = await response.json();
    //         console.log('this is the fetched data: ', data)
    //         // setReviews(userReviews);
    //         // getReviews();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
     
    // fetchTeacher(); 
    

    console.log('this screen is for prek', products)
    


    // const teachers = product.filter( teacher => { 
    //         if (product.prek === true) { 
    //             return teacher;
    //         }
    //     })

    return ( 
    <>
    <br/> <br/>
    <p> The following teachers teach children in Kindergarten: </p>

   { product.kinder === true ? 
          <SmallProduct user={user} key={product.id} product={product}  token={token} order={order} fetchOrder={fetchOrder} setOrder={setOrder}/>
    : ''
   }

    </> 
    )
    
}

export default Kinder;