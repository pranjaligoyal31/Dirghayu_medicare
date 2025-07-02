import express from 'express';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.status(200).json({
    imageUrl: req.file.path,
    publicId: req.file.filename,
  });
});

export default router;
