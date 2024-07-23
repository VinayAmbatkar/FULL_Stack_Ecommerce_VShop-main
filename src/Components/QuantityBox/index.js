import React, { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import Button from '@mui/material/Button';

const QuantityBox = () => {

const [inputVal, setInputVal] = useState(1);    

const minus = () => {
    setInputVal(inputVal - 1);
    if(inputVal <= 1){
        setInputVal(1);
    }
}


const plus = () => {
    setInputVal(inputVal + 1);
}


    return (
        <div className="quantityDrop d-flex align-item-center">
        <Button onClick={minus}><LuMinus /> </Button>
        <input type="text" value={inputVal} />
        <Button onClick={plus}><GoPlus /></Button>
    </div>
    )
}

export default QuantityBox;