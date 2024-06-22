import React, { useEffect, useState } from 'react'
import GradeIcon from "@mui/icons-material/Grade";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";




const ProductsDetails = () => {
    const dispatch = useDispatch();
    const pId = useParams();
    let [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+pId['id'])
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                throw "Error in API"
            }
        }).then((data)=>{
            setProduct(data);
        }).catch((err)=>{
            console.log("Some Error : "+err);
        })
    })

  return (
    <div className='max-w-screen-2xl mx-auto w-full px-8 py-8 flex flex-cols gap-2'>
        <div className='w-full h-auto flex px-4 text-shadow border-[1px]'>
            <img className='w-60 h-54 mr-8' src={product.image} alt="Product Image" />
            <div className='text-black'>
                <h1 className='text-black text-3xl w-full font-semibold font-titleFont'>{product.title}</h1>
                <div className='flex'>
                    <GradeIcon className='text-yellow-400' />
                    <GradeIcon className='text-yellow-400' />
                    <GradeIcon className='text-yellow-400' />
                    <GradeIcon className='text-yellow-400' />
                   
                </div>
                <div className='font-bodyFont mt-5'>{product.description}</div>
                <div className='text-black font-semibold text-lg mt-8'>${product.price}</div>
                <button
              
              className="w-80 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
            >
              Add to cart
            </button>
            </div>
        </div>
        
      
    </div>
  )
}

export default ProductsDetails
