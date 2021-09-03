import React from 'react';
import {Redirect, useHistory} from 'react-router-dom';

const EditProduct = ({user, token, product, setProduct, getProducts}) => {
    const {id,firstname, lastname, grade, prek, jrkinder, kinder, first, second, third, fourth, fifth, sixth, seventh, eighth, admin, imageURL, birthday, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = product;

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response  = await fetch(`/api/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        getProducts();
        history.push(`/products/${id}`);
    }

    const handleOnChange = async (event) => {
        if (event.target.name === 'inStock') {
            setProduct({...product, [event.target.name]: !inStock});
        } else if (event.target.name === 'price') {
            setProduct({...product, [event.target.name]: Number(event.target.value)});
        } else if (event.target.name === 'prek') { 
            setProduct({...product, [event.target.name]: true })
        } else if (event.target.name === 'jrkinder') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'kinder') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'first') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'second') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'third') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'fourth') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'fifth') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'sixth') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'seventh') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'eighth') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else if (event.target.name === 'admin') { 
            setProduct({...product, [event.target.name]: true})
        } 
        else {
            setProduct({...product, [event.target.name]: event.target.value});
        }
    }

    if (user.isAdmin) {
        return (<div className='edit-product'>
            <h3>Make teacher survey edits below: </h3>
            <form onSubmit={handleSubmit}>
            <div >First Name</div>
                    <input required className='form-input' placeholder="" type="text" name='firstname' value={firstname} onChange={handleOnChange}></input>
                
                <div>
                    <div >Last Name</div>
                    <input required className='form-input' placeholder="" type="text" name='lastname' value={lastname} onChange={handleOnChange}></input>
                </div> <br/>
                {/* <div>
                    <div>Grade</div>
                    <input  type="text" name='grade' value={grade} onChange={handleOnChange}></input>
                </div> */}

                <div>
                    <div>Which grades do you teach? (Please check all that apply.)</div><br/> 
                    <label> Pre-Kindergarten <input type='checkbox' name='prek' value={prek} onChange={handleOnChange}  /> </label>
                    <label> Junior Kindergarten <input type='checkbox' name='jrkinder' value={jrkinder} onChange={handleOnChange}/> </label>
                    <label> Kindergarten <input type='checkbox' name='kinder' value={kinder} onChange={handleOnChange}/> </label>
                    <label> First Grade <input type='checkbox' name='first' value={first} onChange={handleOnChange} /> </label>
                    <label> Second Grade <input type='checkbox' name='second' value={second} onChange={handleOnChange} /> </label>
                    <label> Third Grade <input type='checkbox' name='third' value={third} onChange={handleOnChange} /> </label>
                    <label> Fourth Grade <input type='checkbox' name='fourth' value={fourth} onChange={handleOnChange} /> </label>
                    <label> Fifth Grade <input type='checkbox' name='fifth' value={fifth} onChange={handleOnChange} /> </label>
                    <label> Sixth Grade <input type='checkbox' name='sixth' value={sixth} onChange={handleOnChange} /> </label>
                    <label> Seventh Grade <input type='checkbox' name='seventh' value={seventh} onChange={handleOnChange} /> </label>
                    <label> Eighth Grade <input type='checkbox' name='eighth' value={eighth} onChange={handleOnChange} /> </label>
                    <label> Admin and Front Office <input type='checkbox' name='admin' value={admin} onChange={handleOnChange} /> </label>

                    <input  placeholder="" type="text" name='grade' value={grade} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Birthday</div>
                    <input type='text' name='birthday' value={birthday} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Restaurant</div>
                    <input  type='text' name='restaurant' value={restaurant} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Store where you like to buy school supplies</div>
                    <input required type='text' name='schoolstore' value={schoolstore} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>Store that you like to shop at for yourself</div>
                    <input required type='text' name='personalstore' value={personalstore} onChange={handleOnChange}></input>
                </div>
                <div>
                    <div>What is your favorite beverage?</div>
                    <textarea required type='text' name='drink' value={drink} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>What is your favorite treat?</div>
                    <textarea required type='text' name='treat' value={treat} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Favorite color</div>
                    <textarea required type='text' name='color' value={color} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Favorite flower</div>
                    <textarea required type='text' name='flower' value={flower} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Favorite food</div>
                    <textarea required type='text' name='food' value={food} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Favorite place</div>
                    <textarea required type='text' name='place' value={place} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>What is your favorite way to spend time outside of school?</div>
                    <textarea required type='text' name='meTime' value={meTime} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>What are your favorite hobbies?</div>
                    <textarea required type='text' name='hobbies' value={hobbies} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Favorite giftcard to receive?</div>
                    <textarea required type='text' name='giftcard' value={giftcard} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Tell us about any family pets that you have:</div>
                    <textarea required type='text' name='pets' value={pets} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Do you have any dislikes (for example: the Dodgers or anything in Dodger Blue): </div>
                    <textarea required type='text' name='dislikes' value={dislikes} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Do you have any allergies that should be noted?</div>
                    <textarea required type='text' name='allergies' value={allergies} onChange={handleOnChange}></textarea>
                </div>
                <div>
                    <div>Final question (I know, it is a lot.) Hit us with your wishlist items. What can we parents provide you with that will make your day or make the school year even better?</div>
                    <textarea required type='text' name='wishlist' value={wishlist} onChange={handleOnChange}></textarea>
                </div>
               
                <div>
                    <div>Image</div>
                    <input type='text' name='imageURL' value={imageURL} onChange={handleOnChange}></input>
                </div>
                <button type='submit' className='btn'>Update Teacher</button>
            </form>
        </div>)
    } else {
        return <Redirect to='/' />
    }

}

export default EditProduct;