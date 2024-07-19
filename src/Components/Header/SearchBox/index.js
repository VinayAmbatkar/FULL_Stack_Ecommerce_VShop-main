import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const Searchbox = () => {
  return (
    <div>
      <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Search for Products" />
                  <button><IoSearchSharp /> </button>
                </div>
    </div>
    
    
  )
}

export default Searchbox ;
