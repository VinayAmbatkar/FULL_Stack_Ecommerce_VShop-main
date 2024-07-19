import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {


  // function to open and close model
  const [isOpenModel, setisOpenModel] = useState(false)


  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className='label'>Select Your Location</span>
          <span className='name'>India</span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>


      {/* Sate Mangemnet of Diloge box  */}

      <Dialog open={isOpenModel} onClose={() => setisOpenModel(false)} className='locationModal' TransitionComponent={Transition}>
        <h4>Choose Your Delivery Location</h4>
        <p>Enter Your Address and we will Specify the offer for Your Area</p>
        <Button className='closeb' onClick={() => setisOpenModel(false)}><IoCloseOutline /></Button>
        <div>
          <div className="headerSearch w-100 ">
            <input type="text" placeholder="Search Your Location" />
            <button><IoSearchSharp /> </button>
          </div>

          <ul className="countrylist mt-3">
            <li><Button onClick={() => setisOpenModel(false)}>India</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>USA</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>New Zealand</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>Canada</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>Australia</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>Germany</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>Japan</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>Brazil</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>France</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>South Africa</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>China</Button></li>
            <li><Button onClick={() => setisOpenModel(false)}>UK</Button></li>



          </ul>
        </div>
      </Dialog>
    </>
  );
}

export default CountryDropdown;
