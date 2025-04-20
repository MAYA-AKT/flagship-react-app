import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Buttons from '../Components/ui/Buttons';
import { FaCartShopping } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { addFavorite, addToCart, getCart } from '../utils';
import { CartContext } from '../Providers/Context';

const PhoneDetails = () => {
    const {setCart} = useContext(CartContext);
    const data = useLoaderData();
    const { id } = useParams();

    const singlePhone = data.find(phone => phone.id === parseInt(id));
    const {
        name,
        image,
        brand,
        model,
        price,
        description,
        storage,
        camera_info
    } = singlePhone;


    const handleFavorite = () => {
        addFavorite(singlePhone);
    }
    const handleCart = () => {
        addToCart(singlePhone);
        setCart(getCart());
    }


    
     


    return (
        <div className='w-full text-4xl'>
            <img src={image} alt={name} className='w-full mx-auto md:w-auto mb-8' />
            <div className="flex justify-between">
                <h1 className='text-4xl font-thin mb-8'>{name}</h1>
                <div className='space-x-4'>
                    <Buttons onClick={handleCart} label={<FaCartShopping />} />
                    <Buttons onClick={handleFavorite} label={<MdBookmarkAdd />} />
                </div>
                {/* Details */}
                <div></div>
            </div>
        </div>
    );
};

export default PhoneDetails;