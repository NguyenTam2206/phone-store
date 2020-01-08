import React, { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from '../../data';

const ProductContext = React.createContext();

const ProductProvider = (props) => {
    const [state, setState] = useState({
        products: [],
        detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    })

    useEffect(() => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            tempProducts = [...tempProducts, item];
        });
        setState((state) => {
            return { ...state, products: tempProducts };
        });
    }, [])

    useEffect(()=>{
        let subTotal = 0;
            state.cart.map(item => (subTotal += item.total));
            const tempTax = subTotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = subTotal + tax;
            setState((state)=>{
                return ({
                    ...state,
                    cartSubTotal: subTotal,
                    cartTax: tax,
                    cartTotal: total,
                })
            })
    },[state.cart])
    //useEffect dùng để callback function sau khi setState --- https://github.com/reactjs/rfcs/issues/98

    const getItem = (id) => {
        const product = state.products.find(item => item.id === id);
        return product;
    }
    const handleDetail = (id) => {
        const product = getItem(id);
        setState((state) => {
            return { ...state, detailProduct: product };
        })
    }
    const handleAddToCart = (id) => {
        const tempProducts = [...state.products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        //--------------
        setState((state) => {
            return { ...state, products: tempProducts, cart: [...state.cart, product]  };
        })
    }

    // const addTotals = () => {
    //     let subTotal = 0;
    //     state.cart.map(item => (subTotal += item.total));
    //     const tempTax = subTotal * 0.1;
    //     const tax = parseFloat(tempTax.toFixed(2));
    //     const total = subTotal + tax;
    //     setState((state)=>{
    //         return ({
    //             ...state,
    //             cartSubTotal: subTotal,
    //             cartTax: tax,
    //             cartTotal: total,
    //         })
    //     })
    // }

    const openModal = (id) => {
        const product = getItem(id);
        setState((state) => {
            return { ...state, modalOpen: true, modalProduct: product }
        })
    }
    const closeModal = () => {
        setState((state) => {
            return ({ ...state, modalOpen: false })
        })
    }
    const increment = (id) => {
        let tempCart = [...state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        setState((state)=>{
            return({...state, cart : tempCart})
        })
    }
    const decrement = (id) => {
        let tempCart = [...state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count -1;
        if(product.count === 0){
            removeItem(id);
        } else{
            product.total = product.count * product.price;
            setState((state)=>{
                return({...state, cart : tempCart})
            })
        }
    }
    const removeItem = (id) => {
        let tempProducts = [...state.products];
        let tempCart = [...state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        setState((state) => {
            return({
                ...state,
                cart : [...tempCart],
                products : [...tempProducts],
            })
        })
    }
    const clearCart = () => {
        state.cart.forEach(item => {
            item.inCart = false;
            item.count = 0;
            item.total = 0;
        })
        setState((state)=>{
            return ({
                ...state,
                cart : [],
            })
        })
    }
    
    return (
        <ProductContext.Provider value={{
            ...state,
            handleDetail,
            handleAddToCart,
            openModal,
            closeModal,
            increment,
            decrement,
            removeItem,
            clearCart,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

//https://viblo.asia/p/lam-quen-voi-new-context-api-react-RQqKLvW4l7z
//https://www.youtube.com/watch?v=wPQ1-33teR4
//Config như trên
//import ProductProvider vào index.js và bọc lớn nhất.
//import ProductConsumer vào component muốn sử dụng.
//example (hello là value ở trên)
//<ProductConsumer>
//  {(hello)=>{
//    return <b>{hello}</b>
//   }}
//</ProductConsumer>
//https://viblo.asia/p/tim-hieu-setstate-trong-reactjs-07LKXpNPKV4 (debug)