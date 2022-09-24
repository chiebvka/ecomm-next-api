const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')



const allRooms = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'All Rooms'
    })
}

// Create new product  =>/api/v1/admin/product/new
const newProduct = catchAsyncErrors (async (req, res, next) => {

    // req.body.user = req.user.id;


    const product = await Product.create(req.body)

    res.status(200).json({
        success: true,
        product
    })
})


// Get all Products => /api/v1/products?keyword=apple
const getProducts =  catchAsyncErrors (async (req, res, next) => {


    const resPerPage = 4;
    const productCount = await Product.countDocuments()

    const apiFeatures = new APIFeatures(Product.find(), req.query)
                            .search()
                            .filter()
                            .pagination(resPerPage)

    let products = await apiFeatures.query;
    let filteredProductsCount = products.length
                        
    apiFeatures.pagination(resPerPage)
    // added a .clone() method because of mongoose v6 executing query a second time should remove if problems arise
    products = await apiFeatures.query.clone();

    res.status(200).json({
        success: true,
        productCount,
        resPerPage,
        filteredProductsCount,
        products
    })
})


// Get Single Product details => /api/v1/products/:id

const getSingleProduct = catchAsyncErrors (async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success: true,
        product
    })
})


// Update Product => /api/v1/admin/product/:id
const updateProduct = catchAsyncErrors (async (req, res, next) => {

    let product = await Product.findById(req.query.id);

    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    product = await Product.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        product
    })
})


// Deleet product => /api/v1/admin/product/:id
const deleteProduct = catchAsyncErrors (async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Product deleted'
    })
})



// Create new review   =>   /api/v1/review
const createProductReview = catchAsyncErrors(async (req, res, next) => {

    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        r => r.user.toString() === req.user._id.toString()
    )

    if (isReviewed) {
        product.reviews.forEach(review => {
            if (review.user.toString() === req.user._id.toString()) {
                review.comment = comment;
                review.rating = rating;
            }
        })

    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length
    }

    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })

})


// Get Product Revciew => /api/v1/reviews
const getProductReviews = catchAsyncErrors (async (req, res, next) => {
    const product = await Product.findById(req.query.id);


    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})



// Delete Product Revciew => /api/v1/reviews
const deleteReview = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.query.productId);

    console.log(product);

    const reviews = product.reviews.filter(review => review._id.toString() !== req.query.id.toString());

    const numOfReviews = reviews.length;

    const ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})


export {
    allRooms,
    newProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview
}