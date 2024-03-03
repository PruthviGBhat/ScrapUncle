import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    wastetype: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    }, userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;