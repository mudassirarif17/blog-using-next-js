import React from 'react'

async function fetchData(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}

const page = async () => {
    let items = await fetchData();
    console.log(items);

  return (
    <div>
      <h1>Item List</h1>
      {
        items.map((item , index)=>{
            return(
                <div>
                    <h1>Title : {item.title}</h1>
                    <p>Price : {item.price}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default page
