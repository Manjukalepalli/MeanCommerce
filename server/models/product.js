const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter the product's name."],
        minlength: [3, "The product's name should be a minimum of 3 characters."],
        trim: true,
    },
    qty:  {
      type: Number,
      required: [true, "Please enter the product's qty."],
      min: [0, "Qty need to be greater than or equals to zero"] ,
    },
    price: {
      type: Number,
      required: [true, "Please enter the product's price."],
      min: [0,"Price need to be greater than or equals to zero"]
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model("product", productSchema);
