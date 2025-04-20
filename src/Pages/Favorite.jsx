import React, { useEffect, useState } from 'react';
import { getFavorites, removeFavorite } from '../utils';
import PhoneCard from '../Components/PhoneCard';
import EmptyState from '../Components/ui/EmptyState';

const Favorite = () => {
    const [displayPhone,setDisplayPhone] = useState([]);
    useEffect(()=>{
      const savedPhone = getFavorites();
      setDisplayPhone(savedPhone);
    },[]);
    const handleDelete=(id)=>{
        removeFavorite(id);
        setDisplayPhone(getFavorites());
    }
    return (
        <div className='py-12'>
        {
            displayPhone.length === 0 && <EmptyState/>
        }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhone.map(phone => <PhoneCard key={phone.id} phone={phone} deletable={true} handleDelete={handleDelete} />)
                }
            </div>

           


            
        </div>
    );
};

export default Favorite;