import React from 'react';
import { Link } from 'react-router';
import Buttons from './Buttons';

const EmptyState = () => {
    return (
        <div className='py-24 text-center'>
            <h1 className='mb-3 text-7xl font-thin text-gray-900'>No Data Found!</h1>
            <p className='text-gray-500'>Best price to Browse, Search, Views details and purchase of top flagship phones <br /> of the current time FlagShipFaceOff.</p>
            <Link to='/'>
                <Buttons label='Browse Phones' />
            </Link>
        </div>
    );
};

export default EmptyState;