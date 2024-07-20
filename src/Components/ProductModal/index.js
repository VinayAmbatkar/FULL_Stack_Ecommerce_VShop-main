import react from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoCloseOutline } from "react-icons/io5";

const productModal = () => {
    return (
        <div>
            <Dialog open={true}>
                <Button className='closeb' ><IoCloseOutline /></Button>


            </Dialog>
        </div>
    )
}


export default productModal;