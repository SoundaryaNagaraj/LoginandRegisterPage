import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const FormDataModel = mongoose.model('FormData', FormDataSchema);

export { FormDataModel }; // Exporting FormDataModel
