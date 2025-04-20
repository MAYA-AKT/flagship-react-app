import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Buttons from '../Components/ui/Buttons';
import { FaCartShopping } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";

const PhoneDetails = () => {
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




    return (
        <div className='w-full text-4xl'>
            <img src={image} alt={name} className='w-full mx-auto md:w-auto mb-8' />
            <div className="flex justify-between">
                <h1 className='text-4xl font-thin mb-8'>{name}</h1>
                <div className='space-x-4'>
                    <Buttons label={<FaCartShopping/>} />
                    <Buttons label={<MdBookmarkAdd/>} />
                </div>
                {/* Details */}
                <div></div>
            </div>
        </div>
    );
};

export default PhoneDetails;