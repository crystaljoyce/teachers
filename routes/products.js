const express = require('express');
const productsRouter = express.Router();

const {createProduct, getProductById, getAllProducts, destroyProduct, updateProduct, getOrdersByProduct} = require('../db');
const {requireAdmin} = require('./utils');

productsRouter.get('/', async (req, res, next) => {
    try {
        const products = await getAllProducts();

        res.send(products);
    } catch (error) {
        next(error)
    }
})

productsRouter.get('/:productId', async (req, res, next) => {
    try {
        const product = await getProductById(req.params.productId);
        console.log('product params in routes: ', product)

        res.send(product);
    } catch (error) {
        next(error);
    }
})

productsRouter.post('/', requireAdmin, async (req, res, next) => {
    const {firstname, lastname, grade, prek, jrkinder, kinder, first, second, third, fourth, fifth, sixth, seventh, eighth, admin, imageURL, birthday, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = req.body;
    const productData = {};

    try {
        productData.firstname = firstname;
        productData.lastname = lastname;
        productData.grade = grade;
        productData.prek = prek;
        productData.jrkinder = jrkinder;
        productData.kinder = kinder;
        productData.first = first;
        productData.second = second;
        productData.third = third;
        productData.fourth = fourth;
        productData.fifth = fifth;
        productData.sixth = sixth;
        productData.seventh = seventh;
        productData.eighth = eighth;
        productData.admin = admin;
        productData.birthday = birthday;
        productData.imageURL = imageURL;
        productData.restaurant = restaurant;
        productData.schoolstore = schoolstore;
        productData.personalstore = personalstore;
        productData.drink = drink;
        productData.treat = treat;
        productData.color = color;
        productData.flower = flower;
        productData.food = food;
        productData.place = place;
        productData.meTime = meTime;
        productData.hobbies = hobbies;
        productData.giftcard = giftcard;
        productData.pets = pets;
        productData.dislikes = dislikes;
        productData.allergies = allergies;
        productData.wishlist = wishlist;

        const product = await createProduct(productData);

        if (product) {
            res.send(product)
        } else {
            res.status(500).send({message: 'Product was not created.'});
        }

    } catch (error) {
        next(error);
    }
})

productsRouter.delete('/:productId', requireAdmin, async (req, res, next) => {
    const {productId} = req.params;

    try {
        const product = await destroyProduct(productId);

        res.send(product);
    } catch (error) {
        next(error);
    }
})

productsRouter.patch('/:productId', requireAdmin, async (req, res, next) => {
    const {firstname, lastname, grade, prek, jrkinder, kinder, first, second, third, fourth, fifth, sixth, seventh, eighth, admin, birthday, imageURL, restaurant, schoolstore, personalstore, drink, treat, color, flower, food, place, meTime, hobbies, giftcard, pets, dislikes, allergies, wishlist} = req.body;
    const {productId} = req.params;

    const updateFields = {};

    if (firstname) {
        updateFields.firstname = firstname;
    }
    if (lastname) {
        updateFields.lastname = lastname;
    }
    if (grade) {
        updateFields.grade = grade;
    }
    if (prek) {
        updateFields.prek = prek;
    }
    if (jrkinder) {
        updateFields.jrkinder = jrkinder;
    }
    if (kinder) {
        updateFields.kinder = kinder;
    }
    if (first) {
        updateFields.first = first;
    }
    if (second) {
        updateFields.second = second;
    }
    if (third) {
        updateFields.third = third;
    }
    if (fourth) {
        updateFields.fourth = fourth;
    }
    if (fifth) {
        updateFields.fifth = fifth;
    }
    if (sixth) {
        updateFields.sixth = sixth;
    }
    if (seventh) {
        updateFields.seventh = seventh;
    }
    if (eighth) {
        updateFields.eighth = eighth;
    }
    if (admin) {
        updateFields.admin = admin;
    }
    if (birthday) {
        updateFields.birthday = birthday;
    }
    if (imageURL) {
        updateFields.imageURL = imageURL;
    }
    if (restaurant) {
        updateFields.restaurant = restaurant;
    }
    if (schoolstore) {
        updateFields.schoolstore = schoolstore;
    }
    if (personalstore) {
        updateFields.personalstore = personalstore;
    }
    if (drink) {
        updateFields.drink = drink;
    }
    if (treat) {
        updateFields.treat = treat;
    }
    // if (color) {
    //     updateFields.color = color;
    // }
    if (flower) {
        updateFields.flower = flower;
    }
    if (food) {
        updateFields.food = food;
    }
    if (place) {
        updateFields.place = place;
    }
    // if (meTime) {
    //     updateFields.meTime = meTime;
    // }
    if (hobbies) {
        updateFields.hobbies = hobbies;
    }
    if (giftcard) {
        updateFields.giftcard = giftcard;
    }
    if (pets) {
        updateFields.pets = pets;
    }
    if (dislikes) {
        updateFields.dislikes = dislikes;
    }
    if (allergies) {
        updateFields.allergies = allergies;
    }
    if (wishlist) {
        updateFields.wishlist = wishlist;
    }

    try {
        const originalProduct = await getProductById(Number(productId));

        if (Number(originalProduct.id) === Number(productId)) {
            const updatedProduct = await updateProduct({id: Number(productId), ...updateFields});
            res.send(updatedProduct);
        }

    } catch (error) {
        next(error);
    }
})

productsRouter.get('/:productId/orders', requireAdmin, async (req, res, next) => {
    const {orderId} = req.params;

    try {
        const products = await getOrdersByProduct(orderId);

        res.send(products);
    } catch (error) {
        next(error);
    }
})

module.exports = productsRouter;
