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
    })

    useEffect(() => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            tempProducts = [...tempProducts, item];
        });
        setState((state) => {
            return { ...state, products: tempProducts };
        })
    }, [])

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
        // setState({
        //     ...state,
        //     products: tempProducts,
        //     cart:[...state.cart, product],
        // })
        console.log(state, product);
        setState((state) => { 
            return { ...state, products: tempProducts, cart: [...state.cart, product] };
        })
    }
    const openModal = (id) => {
        const product = getItem(id);
        // setState({
        //     ...state,
        //     modalOpen: true,
        //     modalProduct: product,
        // }) //bug
        setState((state) => {
            return {...state, modalOpen: true, modalProduct: product}
        })
    }
    const closeModal = () => {
        setState((state) => {
            return ({ ...state, modalOpen: false })
        })
    }
    return (
        <ProductContext.Provider value={{
            ...state,
            handleDetail,
            handleAddToCart,
            openModal,
            closeModal,
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