const Announcement = require('../models/announcement');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

const newAnnouncement = catchAsyncErrors(async (req, res, next) => {

    const announcement = await Announcement.create(req.body)

    res.status(200).json({
        success: true,
        announcement
    });
})


const getAnnouncement = catchAsyncErrors(async (req, res, next) => {
    const resPerPage = 1;
    const announcementCount = await Announcement.countDocuments();

    const apiFeatures = new APIFeatures(Announcement.find(), req.query)
    .pagination(resPerPage)


    let announcements = await apiFeatures.query;
    let filteredAnnouncementCount = announcements.length
                        
    apiFeatures.pagination(resPerPage)
    // added a .clone() method because of mongoose v6 executing query a second time should remove if problems arise
    announcements = await apiFeatures.query.clone();

    res.status(200).json({
        success: true,
        announcementCount,
        resPerPage,
        filteredAnnouncementCount,
        announcements
    })
})

const getSingleAnnouncement = catchAsyncErrors(async (req, res) => {
    const announcement = await Announcement.findById(req.query.id)

    if(!announcement) {
        return next(new ErrorHandler('Announcement not found', 404))
    }

    res.status(200).json({
        success: true,
        announcement
    })
        
})


const updateAnnouncement = catchAsyncErrors(async (req, res, next) => {

    let announcement = await Announcement.findById(req.query.id);

    if(!announcement) {
        return next(new ErrorHandler('Announcement not found', 404))
    }

    announcement = await Announcement.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators:  true
    });
    
    
    res.status(200).json({
        success: true,
        announcement
    });
});


const deleteAnnouncement = catchAsyncErrors(async (req, res, next) => {

    let announcement = await Announcement.findById(req.query.id);

    if(!announcement) {
        return next(new ErrorHandler('Announcement not found', 404))
    }

    await announcement.deleteOne();
    
    
    res.status(200).json({
        success: true,
        announcement
    });
})



export {
    newAnnouncement,
    getAnnouncement,
    deleteAnnouncement,
    updateAnnouncement,
    getSingleAnnouncement
}