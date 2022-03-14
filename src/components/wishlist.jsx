import React from "react"


const Wishlist = () => {
    const [count,setCount] = React.useState(0);
    const [query, setQuery] = React.useState("");
    const [list, setWishlist] = React.useState([]);

   const addText = (e) => {
    // console.log(e.target.value);
    const {value} = e.target;
    setQuery(value);
   }

   const addList = () =>{
       const payload = {
           item : query,
           status : false
       };
       let updatedList = [...list, payload];
       setWishlist(updatedList);
       setCount(count+1);
   }

   if(count > 3){
    return (
    <>
    <h1>Wishlist</h1>
    <h2>"You cannot add more than 3 items to wishlist"</h2>
    </>
    )
   }

    return (
        
        <>
        <h1>Wishlist</h1>

        
            
            {/* <div>{query}</div> */}
                <input placeholder="Type Something" onChange={addText} value = {query} />

                <button onClick={addList}>Add</button>
                {
                    list.map(({item,status},index)=> (
                        <div key={index}>{item}</div>                   
                        ))
                            
                }

            
        </>
    )

}

export {Wishlist}