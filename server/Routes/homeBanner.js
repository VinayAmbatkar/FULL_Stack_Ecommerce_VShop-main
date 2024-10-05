const { HomeBanner } = require('../models/homeBanner');
const { ImageUpload } = require('../models/imageUpload');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require("fs");

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
    secure: true
});

var imagesArr = [];

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
        //imagesArr.push(`${Date.now()}_${file.originalname}`)

    },
})


const upload = multer({ storage: storage })

router.post(`/upload`, upload.array("images"), async (req, res) => {
    imagesArr=[];

    try{
    
        for (let i = 0; i < req?.files?.length; i++) {

            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: false,
            };
    
            const img = await cloudinary.uploader.upload(req.files[i].path, options,
                function (error, result) {
                    imagesArr.push(result.secure_url);
                    fs.unlinkSync(`uploads/${req.files[i].filename}`);
                });
        }


        let imagesUploaded = new ImageUpload({
            images: imagesArr,
        });

        imagesUploaded = await imagesUploaded.save();
        return res.status(200).json(imagesArr);

       

    }catch(error){
        console.log(error);
    }


});


router.get(`/`, async (req, res) => {

    try {
      
        const bannerImagesList = await HomeBanner.find();


        if (!bannerImagesList) {
            res.status(500).json({ success: false })
        }

        return res.status(200).json(bannerImagesList);

    } catch (error) {
        res.status(500).json({ success: false })
    }


});



router.get('/:id', async (req, res) => {
    slideEditId = req.params.id;

    const slide = await HomeBanner.findById(req.params.id);

    if (!slide) {
        res.status(500).json({ message: 'The slide with the given ID was not found.' })
    }
    return res.status(200).send(slide);
})



router.post('/create', async (req, res) => {
    
    let newEntry = new HomeBanner({
        images: imagesArr,
    });



    if (!newEntry) {
        res.status(500).json({
            error: err,
            success: false
        })
    }


    newEntry = await newEntry.save();
    
    imagesArr = [];


    res.status(201).json(newEntry);

});


router.delete('/deleteImage', async (req, res) => {
    const imgUrl = req.query.img;

   // console.log(imgUrl)

    const urlArr = imgUrl.split('/');
    const image =  urlArr[urlArr.length-1];
  
    const imageName = image.split('.')[0];

    const response = await cloudinary.uploader.destroy(imageName, (error,result)=>{
       // console.log(error, res)
    })

    if(response){
        res.status(200).send(response);
    }
      
});

router.delete('/:id', async (req, res) => {

    const item = await HomeBanner.findById(req.params.id);
    const images = item.images;

    for(img of images){
        const imgUrl = img;
        const urlArr = imgUrl.split('/');
        const image =  urlArr[urlArr.length-1];
      
        const imageName = image.split('.')[0];

        cloudinary.uploader.destroy(imageName, (error,result)=>{
           // console.log(error, result);
        })
      //  console.log(imageName)
    }


    const deletedItem = await HomeBanner.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
        res.status(404).json({
            message: 'Slide not found!',
            success: false
        })
    }

    res.status(200).json({
        success: true,
        message: 'Slide Deleted!'
    })
});



router.put('/:id', async (req, res) => {

    const slideItem = await HomeBanner.findByIdAndUpdate(
        req.params.id,
        {
            images: req.body.images,
        },
        { new: true }
    )

    if (!slideItem) {
        return res.status(500).json({
            message: 'Item cannot be updated!',
            success: false
        })
    }

    imagesArr = [];

    res.send(slideItem);

})




module.exports = router;

