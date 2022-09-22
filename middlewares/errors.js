// const ErrorHandler = require('../utils/errorHandler');

// module.exports = (err, req, res, next) => {
//     err.statusCode = err.statusCode || 500;

//     if(process.env.NODE_ENV === 'DEVELOPMENT') {
//         res.status(err.statusCode).json({
//             success: false,
//             error: err,
//             errMessage: err.message,
//             stack: err.stack
//         })
//     }

//     if(process.env.NODE_ENV === 'PRODUCTION') {
//         let error = { ...err }

//         error.message = err.message

//         // Wrong mongoose Object ID Error 
//         if(error.name === 'CastError') {
//             const message = `Resource  not found. Invalid: ${err.path}`
//             error = new ErrorHandler(message, 400)
//         } 

//         // Handling mongoose validation Error
//         if(err.name === 'validationError') {
//             const message = Object.values(err.errors).map(value => value.message)
//             error = new ErrorHandler(message, 400)
//         }

//         //Handling the mongoose duplicate key error 
//         if(err.code === 11000) {
//             const message =  `Duplicate ${Object.keys(err.keyValue)} entered`
//             error = new ErrorHandler(message, 400)
//         }

//         // Handling wrong jwtError
//         if(err.name === 'JsonWebTokenError') {
//             const message = 'JSON web Token is Invalid. Please try again'
//             error = new ErrorHandler(message, 400)
//         }

//         // Handling wrong jwtError
//         if(err.name === 'TokenExpiredError') {
//             const message = 'JSON web Token is Expired. Please try again'
//             error = new ErrorHandler(message, 400)
//         }

//         res.status(error.statusCode).json({
//             success: false,
//             message: error.message || 'Internal Server Error'
//         })
//     }
// }




import ErrorHandler from '../utils/errorHandler';


export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = { ...err }

    error.message = err.message

    // Wrong Mongoose Object ID Error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new ErrorHandler(message, 400);
    }

    // Handling mongoose Validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    })


}