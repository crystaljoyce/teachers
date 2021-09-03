import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {PastOrders, AddReview} from './index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// allow profile image choice later

const Account = ({user, token, reviews, setReviews, orders, setOrders, setProduct, getReviews, product }) => {
    const {firstName, lastName, email, username, address, city, state, zip} = user;
    // const {is, name, grade, imageURL, birthday, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = product;


    // const userReviews = reviews.filter( review => { 
    //     if (user.id === review.userId) { 
    //         return review;
    //     }
    // })

    // const teacherSurveys = products.filter( product => { 
    //     if (user.id === review.userId) { 
    //         return review;
    //     }
    // })

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`api/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'Application/json',
                    // 'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json();
            console.log('this is your data ... should be teachers',data)
            setReviews(userReviews);
            getReviews();
        } catch (error) {
            console.error(error);
        }
    }

    const getPastOrders = async () => {
        const response = await fetch(`/api/users/${user.id}/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json();
        setOrders(data);
    }

    useEffect( ()=> {
        getPastOrders();
        getReviews();
    }, [])

    if (token && username) {
        return (<><div >    
            <Tabs>        
            <TabList className='tab-list'>
                <Tab> Profile</Tab>
                <Tab> Survey </Tab>
                <Tab> Reviews </Tab>
            </TabList>
            <TabPanel> 
                <div className='acct-container'> 
                    {/* <img className='profile-image' src={imageURL} alt='userphotolink' /> */}
                    <div className='profile'> 
                        <div>Username: </div> <div> {username}</div>
                        <div>Email: </div> <div> {email}</div>
                        <div>Name:</div> <div> {firstName} {lastName}</div> 
                        {/* <div>Address: </div> <div> {address}<br/> {city}, {state} {zip}</div> */}
                    </div>
                </div> 
            </TabPanel>
            <TabPanel>
            <div className='past-orders-container'>
                <h3>Past Orders</h3>
                {orders.length > 1 ? orders.map(order => {
                    return order.status === 'completed' ?
                        <PastOrders key={order.id} order={order} setProduct={setProduct} /> : ''
                }) : 'You have no past orders!'}
            </div>
            </TabPanel>
            <TabPanel>
            <div className="acct-view-revs"> 
            <h3> Your Responses to the Teacher Preferences Survey  </h3> <br/>
            {userReviews.map((review) => { 
                const {id, title, content, stars} = review;

                return (<div key={id} className='review-detail'> 
                    <br />
                    <div className='rev-stars'> {stars > 4 ? <img src={'/images/5_stars.png'}/> : <img src={'/images/4_stars.png'}/>} </div>
                    <div>Title: {title} </div> 
                    <div>Review:  {content} </div>
                    <button className='btn' onClick={() => handleDelete(review.id)}>Delete Review</button>
                </div>)
            })}
            </div>
            </TabPanel>
            </Tabs> 
            </div> 
            </>)
    } else {
        return <Redirect to='/' />
    }
}
export default Account;