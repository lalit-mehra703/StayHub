const mongoose = require('mongoose');
const Review = require('./review');
const { ref, string } = require('joi');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        // required:true,
    },
    image:{
       url: String,
       filename: String
    },
    price:{
        type:Number,
        // required:true,
    },
    location:{
        type:String,
        // required:true,
    },
    country:{
        type:String,
        // required:true,
    },
    reviews : [
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref: "User",
    },

    geometry:{
        type:{
            type:String,
            enum :['Point'],
        },
        coordinates:{
            type:[Number],
        }
    }
});

listingSchema.post('findOneAndDelete',async(listing)=>{
    if(listing){
        await Review.deleteMany({_id : {$in : listing.reviews}})
    }
})

const Listing = mongoose.model('Listing',listingSchema);
module.exports = Listing;