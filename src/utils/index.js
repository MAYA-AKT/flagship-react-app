import toast from "react-hot-toast";

export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) return JSON.parse(favorites);
    return [];

}

export const addFavorite = phone => {
    const favorites = getFavorites();
    const isExist = favorites.find(p => p.id === phone.id);
    if (isExist) return toast.error('exist');
    favorites.push(phone);

    toast.success('ph-added Successfully');
    localStorage.setItem('favorites', JSON.stringify(favorites));

}

export const removeFavorite=id=>{
    const favorites = getFavorites();
    const remainingFavorit = favorites.filter(f=> f.id !== id);
    localStorage.setItem('favorites', JSON.stringify(remainingFavorit));
    toast.success('Removed')
}



// cart data
export const getCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) return JSON.parse(cart);
    return [];

}

export const addToCart = phone => {
    const cart = getCart();
    const isExist = cart.find(p => p.id === phone.id);
    if (isExist) return toast.error('exist');
    cart.push(phone);

    toast.success('cart-added Successfully');
    localStorage.setItem('cart', JSON.stringify(cart));

}

export const removeCart=id=>{
    const cart = getCart();
    const remainingCart = cart.filter(f=> f.id !== id);
    localStorage.setItem('cart', JSON.stringify(remainingCart));
}