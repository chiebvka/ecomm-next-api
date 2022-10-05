const mongoose =  require('mongoose');

const announcementSchema =  new mongoose.Schema({
    message: {
        type: String,
        required: [true, "Please add a product name"],
        trim: true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.models.Announcement || mongoose.model('Announcement', announcementSchema)
