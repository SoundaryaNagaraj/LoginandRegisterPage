import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { FormDataModel } from './models/FormData.js'; // Updated import statement

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json("Already registered");
      } else {
        FormDataModel.create(req.body)
          .then(log_reg_form => res.json(log_reg_form))
          .catch(err => res.json(err));
      }
    });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Wrong password");
        }
      } else {
        res.json("No records found!");
      }
    });
});

app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
