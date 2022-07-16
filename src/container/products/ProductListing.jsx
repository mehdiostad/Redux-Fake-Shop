import React, { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import axios from 'axios';
import {setProducts} from '../../Redux/actions/ProductActions';


const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state)
    console.log(products)
    const fetchProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("err", err)
        })
        console.log(response.data)
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts()   
       }, [])
       
    console.log("products: " , products)

    return ( 
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
     );

}
 
export default ProductListing;