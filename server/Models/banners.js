const mongoose = require("mongoose");

const bannersSchema = mongoose.Schema({
  images: [
    {
      type: String,
      required: true,
    },
  ],
  catId: {
    type: String,
  },
  catName: {
    type: String,
  },
  subCatId:{
    type: String,
  },
  subCatName:{
    type: String,
  }
});

bannersSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

bannersSchema.set("toJSON", {
  virtuals: true,
});

exports.Banner = mongoose.model("Banners", bannersSchema);
exports.bannersSchema = bannersSchema;
