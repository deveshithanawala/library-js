const mongoose = require('mongoose');

const BookSchema =mongoose.Schema ({

    title:{
        type: String,
        required: [true,'title is required'],
        maxLength: 30
    },
    price:{
        type: Number,
        required:[true,'price is required']
    }

})

module.exports = mongoose.model('Books', BookSchema);