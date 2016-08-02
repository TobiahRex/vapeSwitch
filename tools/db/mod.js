import mongoose from 'mongoose'

const modSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
  }],
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: { type: Number },
  description: { type: String },
  note: { type: String },
  category: { type: String },
  quantity: { type: Number },
  options: {
    popularity: { type: Number },
    rating: { type: Number },
    dateAdded: { type: Date.now },
    style: [{ type: String }],
    colors: [{ type: String }],
    sizes: [{ type: String }],
  },
});



const Mod = mongoose.model('Mod', modSchema);
export default Mod
