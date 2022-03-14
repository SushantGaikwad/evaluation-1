import React from "react";

const Vegetables = () => {

    const [tomatoes,setTomato] = React.useState(10);
    const [potatoes,setPotato] = React.useState(8);
    const [carrots,setCarrot] = React.useState(5);
    const [onions,setOnion] = React.useState(7);

    function changeTomato(val){
        
        setTomato((prevCount)=>{

            return prevCount + val;
        })
    }
    function changePotato(val){
        
        setPotato((prevCount)=>{

            return prevCount + val;
        })
    }
    function changeCarrot(val){
        
        setCarrot((prevCount)=>{

            return prevCount + val;
        })
    }
    function changeOnion(val){
        
        setOnion((prevCount)=>{

            return prevCount + val;
        })
    }



    return (

        <>
        <h1>Vegetables</h1>
            <div>Tomatoes : {tomatoes} Kgs</div>
            <button onClick={()=> changeTomato(1)}>+</button> <button onClick={()=> changeTomato(-1)}>-</button>
            <div>Potatoes : {potatoes} Kgs</div>
            <button onClick={()=> changePotato(1)}>+</button> <button onClick={()=> changePotato(-1)}>-</button>
            <div>Carrots : {carrots} Kgs</div>
            <button onClick={()=> changeCarrot(1)}>+</button> <button onClick={()=> changeCarrot(-1)}>-</button>
            <div>Onions : {onions} Kgs</div>
            <button onClick={()=> changeOnion(1)}>+</button> <button onClick={()=> changeOnion(-1)}>-</button>
        </>
    )
    
}

export {Vegetables}