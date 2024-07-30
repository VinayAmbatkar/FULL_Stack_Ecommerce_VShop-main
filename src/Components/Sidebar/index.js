import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6>PRODUCT CATEGORIES</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Fashion" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Grocery" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Bakery" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Electronics" />
                            </li>
    

                        </ul>
                    </div>


                </div>

                <div className="filterBox">
                    <h6>FILTER BY PRICES</h6>
                    <div className="scroll">
                     
                    </div>


                </div>
            </div>





        </>
    )
}

export default Sidebar;
