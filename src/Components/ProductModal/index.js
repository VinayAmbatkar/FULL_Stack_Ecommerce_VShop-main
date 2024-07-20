import react from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoCloseOutline } from "react-icons/io5";

const productModal = (props) => {
    return (
        <div>
            <Dialog open={true} onClose={()=>props.closeProductModal(false)}>
                <Button className='closeb' ><IoCloseOutline /></Button>
                <h4 className='mb-0'>Fresh Brown Coconut</h4>


            </Dialog>
        </div>
    )
}


export default productModal;