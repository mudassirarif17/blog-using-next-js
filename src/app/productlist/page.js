"use client";
import React , {useEffect , useState} from 'react'

const page = () => {
    const [product , setProduct] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            // console.log(data);
            setProduct(data.products);
        }
        fetchData();
    }, [])


  return (
    <div>
      <h1>Product List</h1>
      {
        product.map((item , index)=>{
            return(
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default page
