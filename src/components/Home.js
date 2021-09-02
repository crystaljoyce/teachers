import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({product}) => {

    // const {id,name,grade, imageURL, birthday, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = product;


    return (<>
    <div className="bg-image img1">
        <div className='FP-logo'>
            <div className="home-title">
    <p> ACDS Gifting Guide</p> </div>
    <div className="home-intro">
    <p> 2021 - 2022 School Year</p></div> <br/> 
    <p> Welcome to the ACDS Teacher Survey landing page. On the following tab you'll find updated surveys for all the teachers at ACDS.
        The answers that they have provided are to aide in gift giving (if you so choose) around the holidays, birthdays or annual 
        teacher appreciate day in May. 
    </p> <br/> 
    <p> ACDS has a very specific policy discouraging group gifting for teachers and staff. Please see the link <a href="https://www.almadencountrydayschool.org/parents/parent-handbook/school-hours-and-policies">here</a> to read 
        the full policy. </p>
    </div> 
    <br/> 
    <div className='grades'> 
    {/* <Link to="/products">All Teachers</Link> */}

    <Link className='each-grade' to="/prek"> Pre-Kindergarten </Link>
    <Link className='each-grade' to="/jrkinder"> Junior Kindergarten </Link>

    <Link className='each-grade' to="/kinder"> Kindergarten </Link>
    <div className='each-grade'> First Grade </div>
    <div className='each-grade'> Second Grade </div>
    <div className='each-grade'> Third Grade </div>
    <div className='each-grade'> Fourth Grade </div>
    <div className='each-grade'> Fifth Grade </div>
    <div className='each-grade'> Sixth Grade </div>
    <div className='each-grade'> Seventh Grade </div>
    <div className='each-grade'> Eighth Grade </div>
    <div className='each-grade'> Admin </div>
    </div>
    </div>
      
    <div className="footer"> 
    <p> <br/>   </p>
    <p></p></div>
    </>)
}

export default Home;