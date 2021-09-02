import React, {useState, useEffect} from 'react';
import {Redirect, useLocation} from 'react-router-dom';

const ProductForm = ({user, token, getProducts, product, setProduct}) => {
    const {id,firstname, lastname, grade, prek, jrkinder, kinder, first, second, third, fourth, fifth, sixth, seventh, eighth, admin, imageURL, birthday, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = product;
    const [addMessage, setAddMessage] = useState('');

    const location = useLocation();
    useEffect( () => {
        if (location.pathname === '/products/add') {
            setProduct({id: null, firstname: '', lastname: '', grade: '', prek: false, jrkinder: false, kinder:false, first: false, second:false, third: false, fourth:false, fifth:false, sixth:false, seventh:false, eighth:false, admin:false, imageURL: '', birthday: '', restaurant: '', schoolstore: '', personalstore: '', drink: '', treat: '', color: '', flower: '', food: '', place: '', meTime: '', hobbies: '', giftcard: '', pets: '', dislikes: '', allergies: '', wishlist: ''})
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        setProduct(data);
        setAddMessage(data ? 'Product has been added' : '');
        setProduct({id: null, firstname: '', lastname: '', grade: '', prek:false, jrkinder:false, kinder:false, first:false, second:false, third:false, fourth:false, fifth:false, sixth:false, seventh:false, eighth:false, admin:false, imageURL: '', birthday: '', restaurant: '', schoolstore: '', personalstore: '', drink: '', treat: '', color: '', flower: '', food: '', place: '', meTime: '', hobbies: '', giftcard: '', pets: '', dislikes: '', allergies: '', wishlist: ''})
        getProducts();
    }

    const handleOnChange = async (event) => {

        if (event.target.name === 'inStock') {
            setProduct({...product, [event.target.name]: !inStock});
        } else {
            setProduct({...product, [event.target.name]: event.target.value});
        }
    }

    if (user.isAdmin) {
        return (<div className='add-product'>
            <h2>Add Teacher Preferences</h2> <br/>
            <p> Please fill out each question on this form to the best of your ability.</p><br/>
            {addMessage}
            <form onSubmit={handleSubmit}>
                <div>
                    <div >First Name</div>
                    <input required className='form-input' placeholder="" type="text" name='firstname' value={firstname} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div >Last Name</div>
                    <input required className='form-input' placeholder="" type="text" name='lastname' value={lastname} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Which grades do you teach? (Please check all that apply.)</div><br/> 
                    <label> Pre-Kindergarten <input type='checkbox' value={prek} /> </label>
                    <label> Junior Kindergarten <input type='checkbox' value={jrkinder} /> </label>
                    <label> Kindergarten <input type='checkbox'  value={kinder} /> </label>
                    <label> First Grade <input type='checkbox'  value={first}/> </label>
                    <label> Second Grade <input type='checkbox' value={second} /> </label>
                    <label> Third Grade <input type='checkbox' value={third} /> </label>
                    <label> Fourth Grade <input type='checkbox' value={fourth} /> </label>
                    <label> Fifth Grade <input type='checkbox' value={fifth} /> </label>
                    <label> Sixth Grade <input type='checkbox' value={sixth} /> </label>
                    <label> Seventh Grade <input type='checkbox' value={seventh} /> </label>
                    <label> Eighth Grade <input type='checkbox' value={eighth} /> </label>
                    <label> Admin and Front Office <input type='checkbox' value={admin} /> </label>

                    {/* <input  placeholder="" type="text" name='grade' value={grade} onChange={handleOnChange}></input> */}
                </div>
                <div>
                    <div>Birthday</div>
                    
                    <input className='form-input' placeholder="MM/DD" type='text' name='birthday' value={birthday} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Restaurant</div>
                    <input className='form-input'  type='text' name='restaurant' value={restaurant} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Store where you like to buy school supplies</div>
                    <input className='form-input' type='text' name='schoolstore' value={schoolstore} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Store that you like to shop at for yourself</div>
                    <input className='form-input' type='text' name='personalstore' value={personalstore} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>What is your favorite beverage?</div>
                    <input className='form-input' placeholder='Coffee, tea, milkshakes, boba, sparkling water, etc.' cols='30' rows='5' type='text' name='drink' value={drink} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>What is your favorite treat?</div>
                    <input className='form-input' type='text' name='treat' value={treat} onChange={handleOnChange}></input>
                </div>
                {/* <div>
                    <div>Favorite color</div>
                    <textarea required type='text' name='color' value={color} onChange={handleOnChange}></textarea>
                </div> */}
                <div>
                    <div>Favorite flower</div>
                    <input className='form-input' type='text' name='flower' value={flower} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Favorite food</div>
                    <input className='form-input' type='text' name='food' value={food} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Favorite place</div>
                    <input  type='text' name='place' value={place} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>What is your favorite way to spend time outside of school?</div>
                    <input className='form-input' type='text' name='meTime' value={meTime} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>What are your favorite hobbies?</div>
                    <input className='form-input' type='text' name='hobbies' value={hobbies} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Favorite giftcard to receive?</div>
                    <input  className='form-input' type='text' name='giftcard' value={giftcard} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Tell us about any family pets that you have:</div>
                    <input className='form-input' type='text' name='pets' value={pets} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Do you have any dislikes (for example, the Dodgers or anything in Dodger Blue): </div>
                    <input className='form-input' type='text' name='dislikes' value={dislikes} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Do you have any allergies that should be noted?</div>
                    <input className='form-input' type='text' name='allergies' value={allergies} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Final question (you made it!): Hit us with your wishlist. What can we parents provide you with that will make your day or make the school year even better?</div>
                    <input className='form-input' type='text' name='wishlist' value={wishlist} onChange={handleOnChange}></input>
                </div>
               
                <div>
                    <div>Image</div>
                    <input type='text' name='imageURL' value={imageURL} onChange={handleOnChange}></input>
                </div>
                <button type='submit' className='btn'>Add Teacher</button>
            </form>
        </div>)
    } else {
        return <Redirect to='/products' />
    }
}

export default ProductForm;