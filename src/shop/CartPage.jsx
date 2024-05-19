import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png';
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // fetch items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);
    
    const calculateTotalPrices = (item) => {
        if(item.quantity==0){
            item.quantity=1
        }
        return item.price * item.quantity;
    };

    const handleIncrease = (itemId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleDecrease = (itemId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        updateLocalStorage(updatedCart);
    };

    const updateLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const handleQuantityChange = (itemId, quantity) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const cartSubTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrices(item);
    }, 0);

    const orderTotal = cartSubTotal;

    return (
        <div>
            <PageHeader title="Shop Cart" currPage="Cart Page" />
            <div className='shop-cart padding-tb'>
                <div className="container">
                    <div className="section-wrapper">
                        <div className='cart-top'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className='product-item cat-product'>
                                                <div className="p-thumb">
                                                    <Link to={`/shop/${item.id}`}><img src={item.img} alt="" /></Link>
                                                </div>
                                                <div className='p-content'>
                                                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className='cat-price'>{item.price} ₹</td>
                                            <td className='cat-quantity'>
                                                <div className='cart-plus-minus'>
                                                    <div className='dec qtybutton' onClick={() => handleDecrease(item.id)}>-</div>
                                                    <input
                                                        type="text"
                                                        className='cart-plus-minus-box'
                                                        name='qtybutton'
                                                        value={item.quantity}
                                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                                    />
                                                    <div className='inc qtybutton' onClick={() => handleIncrease(item.id)}>+</div>
                                                </div>
                                            </td>
                                            <td className='cat-toprice'>{calculateTotalPrices(item)} ₹</td>
                                            <td className='cat-edit'>
                                                <a href="#" onClick={() => handleRemoveItem(item.id)}>
                                                    <img src={delImgUrl} alt="" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="cart-bottom">
                            <div className='cart-checkout-box'>
                                <form className='coupon'>
                                    <input type="text" name="coupon" id="coupon" placeholder='Coupon code...' className='cart-page-input-text' />
                                    <input type="submit" value={"Apply Coupon"} />
                                </form>
                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        <CheckOutPage />
                                    </div>
                                </form>
                            </div>
                            <div className='shipping-box'>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className='calculate-shipping'>
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select mb-2">
                                                <select>
                                                    <option value="india">Telangana</option>
                                                    <option value="uk">Andhra Pradesh</option>
                                                    <option value="bangla">Tamil Nadu</option>
                                                    <option value="pak">Karnataka</option>
                                                    <option value="rus">Maharashtra</option>
                                                    <option value="nep">Uttar Pradesh</option>
                                                    <option value="us">J&K</option>
                                                </select>
                                            </div>
                                            <div className='outline-select shipping-select mb-2'>
                                                <select>
                                                    <option value="india">New Delhi</option>
                                                    <option value="uk">Hyderabad</option>
                                                    <option value="bangla">Kolkata</option>
                                                    <option value="pak">Bengalore</option>
                                                    <option value="rus">Mumbai</option>
                                                    <option value="nep">Chennai</option>
                                                    <option value="us">Jammu</option>
                                                </select>
                                            </div>
                                            <input type="text" name="postalCode" id="postalCode" placeholder='Enter Your Post Code' className='cart-page-input-text' />
                                            <button type="submit" className='lab-btn mt-3'>Update Address</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className='cart-overview'>
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <div className='d-flex justify-content-between'>
                                                        <span className='pull-left'>cart SubTotal</span>
                                                        <p className='pull-right text-warning'>{cartSubTotal} ₹</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between'>
                                                        <span className='pull-left'>Shipping and Handling</span>
                                                        <p className='pull-right text-warning'>0 ₹ Free Shipping</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between'>
                                                        <span className='pull-left'>Order Total</span>
                                                        <p className='pull-right text-warning'>{orderTotal.toFixed(2)} ₹</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
