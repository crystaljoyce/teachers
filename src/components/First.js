import React,{useEffect} from 'react';
import { ProductsView, SmallProduct, product, products} from './Product';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
    getProductById,
    getAllProducts
  } from '../api';

const First = ({order, token, user, product, products, getProducts, reviews, fetchOrder, setOrder, ProductsView, getAllProducts}) => { 
    const {id,name,grade, prek, jrkinder, kinder, first, second, third, fourth, fifth, sixth, seventh, eighth, admin, imageURL, birthday, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = product;


    useEffect(() => {
        getAllProducts();
      },[]);

        const teachers = products.map(teacher => { 
          const {id,name,grade, prek, jrkinder, kinder, first, second, third, fourth, fifth, sixth, seventh, eighth, admin, imageURL, birthday, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = teacher;
          console.log('do you teach prek? ',first)
          if(first === true){
          return teacher} 
        })

        console.log('teachers: ', teachers)

return ( 
<>
<br/> 
<div className="bg-image img1">
<p className='home-intro'> The following teachers teach children in first grade: </p> <br/> 
<div className="products">

  {products.map((teacher) => { 
    const {id, firstname, lastname, imageURL, first} = teacher
    console.log('teacher in the return', teacher)
    if(first === true){
    return ( <div key={id} > 
    <div className="">
    <div > 
    <div className="small-teacher">
      {<Link to={`/products/${id}`}><img  src={imageURL ? imageURL : "/images/no-image.png"} alt={name}/><div className='teach-info'>{firstname} {lastname}</div> </Link> 
      
      }
      </div>
      </div>
      </div>
    </div>)}
  })}

</div>
</div>
</> 
)

}
    export default First;