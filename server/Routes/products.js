const { Category } = require("../models/category.js");
const { Product } = require("../models/products.js");
const { MyList } = require("../models/myList");
const { Cart } = require("../models/cart");
const { RecentlyViewd } = require("../models/recentlyViewd.js");
const { ImageUpload } = require("../models/imageUpload.js");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const mongoose = require("mongoose");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

var imagesArr = [];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
    //imagesArr.push(`${Date.now()}_${file.originalname}`)
    //console.log(file.originalname)
  },
});

const upload = multer({ storage: storage });

router.post(`/upload`, upload.array("images"), async (req, res) => {
  imagesArr = [];

  try {
    for (let i = 0; i < req.files?.length; i++) {
      const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: false,
      };

      const img = await cloudinary.uploader.upload(
        req.files[i].path,
        options,
        function (error, result) {
          imagesArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${req.files[i].filename}`);
        }
      );
    }

    let imagesUploaded = new ImageUpload({
      images: imagesArr,
    });

    imagesUploaded = await imagesUploaded.save();

    return res.status(200).json(imagesArr);
  } catch (error) {
    console.log(error);
  }
});

router.get(`/`, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage);
  const totalPosts = await Product.countDocuments();
  const totalPages = Math.ceil(totalPosts / perPage);

  if (page > totalPages) {
    return res.status(404).json({ message: "Page not found" });
  }

  let productList = [];
  if (
    req.query.location !== null &&
    req.query.location !== undefined &&
    req.query.location !== ""
  ) {
    productList = await Product.find({ location: req.query.location })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();
  } else {
    productList = await Product.find()
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();
  }

  return res.status(200).json({
    products: productList,
    totalPages: totalPages,
    page: page,
  });
});

router.get(`/catName`, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage);
  const totalPosts = await Product.countDocuments();
  const totalPages = Math.ceil(totalPosts / perPage);

  if (page > totalPages) {
    return res.status(404).json({ message: "Page not found" });
  }

  let productList = [];

  if (req.query.page !== "" && req.query.perPage !== "") {
    productList = await Product.find({
      location: req.query.location,
      catName: req.query.catName,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    return res.status(200).json({
      products: productList,
      totalPages: totalPages,
      page: page,
    });
  } else {
    productList = await Product.find({
      location: req.query.location,
      catName: req.query.catName,
    });

    return res.status(200).json({
      products: productList,
    });
  }
});

router.get(`/catId`, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage);
  var totalPosts = [];
  var totalPages = 0;
  // const totalPosts = await Product.countDocuments();
  // const totalPages = Math.ceil(totalPosts / perPage);

  // if (page > totalPages) {
  //   return res.status(404).json({ message: "Page not found" });
  // }

  let productList = [];

  if (req.query.page !== "" && req.query.perPage !== "") {
    if (
      req.query.location !== undefined &&
      req.query.location !== null &&
      req.query.location !== ""
    ) {
      productList = await Product.find({
        location: req.query.location,
        catId: req.query.catId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();

       totalPosts = await productList.length;
       totalPages = Math.ceil(totalPosts / perPage);
    } else {
      productList = await Product.find({
        catId: req.query.catId,
      })
        .populate("category");

        
       totalPosts = await productList.length;
       totalPages = Math.ceil(totalPosts / perPage);

       productList = await Product.find({
        catId: req.query.catId,
      })
        .populate("category").skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }

    return res.status(200).json({
      products: productList,
      totalPages: totalPages,
      page: page,
    });
  } else {
    productList = await Product.find({
      location: req.query.location,
      catId: req.query.catId,
    });

    
    totalPosts = await productList.length;
    totalPages = Math.ceil(totalPosts / perPage);

    return res.status(200).json({
      products: productList,
    });
  }
});

router.get(`/subCatId`, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage);
  const totalPosts = await Product.countDocuments();
  const totalPages = Math.ceil(totalPosts / perPage);

  if (page > totalPages) {
    return res.status(404).json({ message: "Page not found" });
  }

  let productList = [];

  if (req.query.page !== "" && req.query.perPage !== "") {
    productList = await Product.find({
      location: req.query.location,
      subCatId: req.query.subCatId,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    return res.status(200).json({
      products: productList,
      totalPages: totalPages,
      page: page,
    });
  } else {
    productList = await Product.find({
      location: req.query.location,
      subCatId: req.query.subCatId,
    });

    return res.status(200).json({
      products: productList,
    });
  }
});

router.get(`/fiterByPrice`, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage);
  const totalPosts = await Product.countDocuments();
  const totalPages = Math.ceil(totalPosts / perPage);

  if (page > totalPages) {
    return res.status(404).json({ message: "Page not found" });
  }

  let productList = [];

  if (req.query.catId !== "" && req.query.catId !== undefined) {
    if (req.query.page !== "" && req.query.perPage !== "") {
      productList = await Product.find({
        catId: req.query.catId,
        location: req.query.location,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    } else {
      productList = await Product.find({
        catId: req.query.catId,
        location: req.query.location,
      });
    }
  } else if (req.query.subCatId !== "" && req.query.subCatId !== undefined) {
    if (req.query.page !== "" && req.query.perPage !== "") {
      productList = await Product.find({
        subCatId: req.query.subCatId,
        location: req.query.location,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    } else {
      productList = await Product.find({
        subCatId: req.query.subCatId,
        location: req.query.location,
      });
    }
  }

  const filteredProducts = productList.filter((product) => {
    if (req.query.minPrice && product.price < parseInt(+req.query.minPrice)) {
      return false;
    }
    if (req.query.maxPrice && product.price > parseInt(+req.query.maxPrice)) {
      return false;
    }
    return true;
  });

  return res.status(200).json({
    products: filteredProducts,
    totalPages: totalPages,
    page: page,
  });
});

router.get(`/rating`, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage);
  const totalPosts = await Product.countDocuments();
  const totalPages = Math.ceil(totalPosts / perPage);

  if (page > totalPages) {
    return res.status(404).json({ message: "Page not found" });
  }

  let productList = [];

  if (req.query.catId !== "" && req.query.catId !== undefined) {
    if (req.query.page !== "" && req.query.perPage !== "") {
      productList = await Product.find({
        catId: req.query.catId,
        rating: req.query.rating,
        location: req.query.location,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    } else {
      productList = await Product.find({
        catId: req.query.catId,
        rating: req.query.rating,
        location: req.query.location,
      });
    }
  } else if (req.query.subCatId !== "" && req.query.subCatId !== undefined) {
    if (req.query.page !== "" && req.query.perPage !== "") {
      productList = await Product.find({
        subCatId: req.query.subCatId,
        rating: req.query.rating,
        location: req.query.location,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    } else {
      productList = await Product.find({
        subCatId: req.query.subCatId,
        rating: req.query.rating,
        location: req.query.location,
      });
    }
  }

  return res.status(200).json({
    products: productList,
    totalPages: totalPages,
    page: page,
  });
});

router.get(`/get/count`, async (req, res) => {
  const productsCount = await Product.countDocuments();

  if (!productsCount) {
    res.status(500).json({ success: false });
  } else {
    res.send({
      productsCount: productsCount,
    });
  }
});

router.get(`/featured`, async (req, res) => {
  let productList = "";
  if (
    req.query.location !== undefined &&
    req.query.location !== null &&
    req.query.location !== "All"
  ) {
    productList = await Product.find({
      isFeatured: true,
      location: req.query.location,
    });
  } else {
    productList = await Product.find({ isFeatured: true });
  }

  if (!productList) {
    res.status(500).json({ success: false });
  }

  return res.status(200).json(productList);
});

router.get(`/recentlyViewd`, async (req, res) => {
  let productList = [];
  productList = await RecentlyViewd.find(req.query).populate("category");

  if (!productList) {
    res.status(500).json({ success: false });
  }

  return res.status(200).json(productList);
});

router.post(`/recentlyViewd`, async (req, res) => {
  let findProduct = await RecentlyViewd.find({ prodId: req.body.id });

  var product;

  if (findProduct.length === 0) {
    product = new RecentlyViewd({
      prodId: req.body.id,
      name: req.body.name,
      description: req.body.description,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      subCatId: req.body.subCatId,
      catName: req.body.catName,
      subCat: req.body.subCat,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      isFeatured: req.body.isFeatured,
      discount: req.body.discount,
      productRam: req.body.productRam,
      size: req.body.size,
      productWeight: req.body.productWeight,
    });

    product = await product.save();

    if (!product) {
      res.status(500).json({
        error: err,
        success: false,
      });
    }

    res.status(201).json(product);
  }
});

router.post(`/create`, async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(404).send("invalid Category!");
  }

  const images_Array = [];
  const uploadedImages = await ImageUpload.find();

  const images_Arr = uploadedImages?.map((item) => {
    item.images?.map((image) => {
      images_Array.push(image);
      console.log(image);
    });
  });

  product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: images_Array,
    brand: req.body.brand,
    price: req.body.price,
    oldPrice: req.body.oldPrice,
    catId: req.body.catId,
    catName: req.body.catName,
    subCat: req.body.subCat,
    subCatId: req.body.subCatId,
    subCatName: req.body.subCatName,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    isFeatured: req.body.isFeatured,
    discount: req.body.discount,
    productRam: req.body.productRam,
    size: req.body.size,
    productWeight: req.body.productWeight,
    location: req.body.location !== "" ? req.body.location : "All",
  });

  product = await product.save();

  if (!product) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }

  imagesArr = [];

  res.status(201).json(product);
});

router.get("/:id", async (req, res) => {
  productEditId = req.params.id;

  const product = await Product.findById(req.params.id).populate("category");

  if (!product) {
    res
      .status(500)
      .json({ message: "The product with the given ID was not found." });
  }
  return res.status(200).send(product);
});

router.delete("/deleteImage", async (req, res) => {
  const imgUrl = req.query.img;

  // console.log(imgUrl)

  const urlArr = imgUrl.split("/");
  const image = urlArr[urlArr.length - 1];

  const imageName = image.split(".")[0];

  const response = await cloudinary.uploader.destroy(
    imageName,
    (error, result) => {}
  );

  if (response) {
    res.status(200).send(response);
  }
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  const images = product.images;

  for (img of images) {
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    if (imageName) {
      cloudinary.uploader.destroy(imageName, (error, result) => {
        // console.log(error, result);
      });
    }

    //  console.log(imageName)
  }

  const deletedProduct = await Product.findByIdAndDelete(req.params.id);

  const myListItems = await MyList.find({ productId: req.params.id });

  for (var i = 0; i < myListItems.length; i++) {
    await MyList.findByIdAndDelete(myListItems[i].id);
  }

  const cartItems = await Cart.find({ productId: req.params.id });

  for (var i = 0; i < cartItems.length; i++) {
    await Cart.findByIdAndDelete(cartItems[i].id);
  }

  if (!deletedProduct) {
    res.status(404).json({
      message: "Product not found!",
      success: false,
    });
  }

  res.status(200).json({
    success: true,
    message: "Product Deleted!",
  });
});

router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      subCat: req.body.subCat,
      description: req.body.description,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      catId: req.body.catId,
      subCat: req.body.subCat,
      subCatId: req.body.subCatId,
      subCatName: req.body.subCatName,
      catName: req.body.catName,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
      productRam: req.body.productRam,
      size: req.body.size,
      productWeight: req.body.productWeight,
      location: req.body.location,
    },
    { new: true }
  );

  if (!product) {
    res.status(404).json({
      message: "the product can not be updated!",
      status: false,
    });
  }

  imagesArr = [];

  res.status(200).json({
    message: "the product is updated!",
    status: true,
  });

  //res.send(product);
});

// router.get(`/`, async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const perPage = parseInt(req.query.perPage);
//   const totalPosts = await Product.countDocuments();
//   const totalPages = Math.ceil(totalPosts / perPage);

//   if (page > totalPages) {
//     return res.status(404).json({ message: "Page not found" });
//   }

//   let productList = [];

//   if (req.query.minPrice !== undefined && req.query.maxPrice !== undefined) {
//     if (
//       req.query.subCatId !== undefined &&
//       req.query.subCatId !== null &&
//       req.query.subCatId !== ""
//     ) {
//       if (
//         req.query.location !== undefined &&
//         req.query.location !== null &&
//         req.query.location !== "All"
//       ) {
//         productList = await Product.find({
//           subCatId: req.query.subCatId,
//           location: req.query.location,
//         })
//           .populate("category")
//           .skip((page - 1) * perPage)
//           .limit(perPage)
//           .exec();
//       } else {
//         productList = await Product.find({
//           subCatId: req.query.subCatId,
//         })
//           .populate("category")
//           .skip((page - 1) * perPage)
//           .limit(perPage)
//           .exec();
//       }
//     }

//     if (
//       req.query.catId !== undefined &&
//       req.query.catId !== null &&
//       req.query.catId !== ""
//     ) {
//       if (
//         req.query.location !== undefined &&
//         req.query.location !== null &&
//         req.query.location !== "All"
//       ) {
//         productList = await Product.find({
//           catId: req.query.catId,
//           location: req.query.location,
//         })
//           .populate("category")
//           .skip((page - 1) * perPage)
//           .limit(perPage)
//           .exec();
//       } else {
//         productList = await Product.find({ catId: req.query.catId })
//           .populate("category")
//           .skip((page - 1) * perPage)
//           .limit(perPage)
//           .exec();
//       }
//     }

//     const filteredProducts = productList.filter((product) => {
//       if (req.query.minPrice && product.price < parseInt(+req.query.minPrice)) {
//         return false;
//       }
//       if (req.query.maxPrice && product.price > parseInt(+req.query.maxPrice)) {
//         return false;
//       }
//       return true;
//     });

//     if (!productList) {
//       res.status(500).json({ success: false });
//     }
//     return res.status(200).json({
//       products: filteredProducts,
//       totalPages: totalPages,
//       page: page,
//     });
//   } else if (req.query.page !== undefined && req.query.perPage !== undefined) {
//     if (
//       req.query.location !== undefined &&
//       req.query.location !== null &&
//       req.query.location !== "All"
//     ) {
//       productList = await Product.find({ location: req.query.location })
//         .populate("category")
//         .skip((page - 1) * perPage)
//         .limit(perPage)
//         .exec();
//     } else {
//       productList = await Product.find()
//         .populate("category")
//         .skip((page - 1) * perPage)
//         .limit(perPage)
//         .exec();
//     }

//     if (!productList) {
//       res.status(500).json({ success: false });
//     }
//     return res.status(200).json({
//       products: productList,
//       totalPages: totalPages,
//       page: page,
//     });
//   } else {
//     if (
//       req.query.location !== undefined &&
//       req.query.location !== null &&
//       req.query.location !== "All"
//     ) {
//       productList = await Product.find(req.query)
//         .populate("category")
//         .skip((page - 1) * perPage)
//         .limit(perPage)
//         .exec();
//     } else if (
//       req.query.catId !== "" &&
//       req.query.catId !== null &&
//       req.query.catId !== undefined
//     ) {
//       productList = await Product.find({ catId: req.query.catId })
//         .populate("category")
//         .skip((page - 1) * perPage)
//         .limit(perPage)
//         .exec();
//     } else if (
//       req.query.catName !== "" &&
//       req.query.catName !== null &&
//       req.query.catName !== undefined
//     ) {
//       productList = await Product.find({ catName: req.query.catName })
//         .populate("category")
//         .skip((page - 1) * perPage)
//         .limit(perPage)
//         .exec();
//     } else if (
//       req.query.subCatId !== "" &&
//       req.query.subCatId !== null &&
//       req.query.subCatId !== undefined
//     ) {
//       productList = await Product.find({
//         subCatId: req.query.subCatId,
//       })
//         .populate("category")
//         .skip((page - 1) * perPage)
//         .limit(perPage)
//         .exec();
//     }

//     if (
//       req.query.rating !== "" &&
//       req.query.rating !== null &&
//       req.query.rating !== undefined
//     ) {
//       if (
//         req.query.catId !== "" &&
//         req.query.catId !== null &&
//         req.query.catId !== undefined
//       ) {
//         if (
//           req.query.location !== undefined &&
//           req.query.location !== null &&
//           req.query.location !== "All"
//         ) {
//           productList = await Product.find({
//             rating: req.query.rating,
//             catId: req.query.catId,
//             location: req.query.location,
//           }).populate("category").skip((page - 1) * perPage)
//           .limit(perPage)
//           .exec();
//         } else {
//           productList = await Product.find({
//             rating: req.query.rating,
//             catId: req.query.catId,
//           }).populate("category").skip((page - 1) * perPage)
//           .limit(perPage)
//           .exec();
//         }
//       }
//     }

//     if (
//       req.query.rating !== "" &&
//       req.query.rating !== null &&
//       req.query.rating !== undefined
//     ) {
//       if (
//         req.query.subCatId !== "" &&
//         req.query.subCatId !== null &&
//         req.query.subCatId !== undefined
//       ) {
//         if (
//           req.query.location !== undefined &&
//           req.query.location !== null &&
//           req.query.location !== "All"
//         ) {
//           productList = await Product.find({
//             rating: req.query.rating,
//             subCatId: req.query.subCatId,
//             location: req.query.location,
//           }).populate("category").skip((page - 1) * perPage)
//           .limit(perPage)
//           .exec();
//         } else {
//           productList = await Product.find({
//             rating: req.query.rating,
//             subCatId: req.query.subCatId,
//           }).populate("category").skip((page - 1) * perPage)
//           .limit(perPage)
//           .exec();
//         }
//       }
//     }

//     if (!productList) {
//       res.status(500).json({ success: false });
//     }

//     return res.status(200).json({
//       products: productList,
//       totalPages: totalPages,
//       page: page,
//     });
//   }
// });

module.exports = router;
