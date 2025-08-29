const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Ensure uploads directory exists
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const MAX_UPLOAD_SIZE = parseInt(process.env.MAX_UPLOAD_SIZE || String(10 * 1024 * 1024), 10); // default 10MB
const ALLOWED_MIMES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain'
];

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const safeName = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
    cb(null, safeName);
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: MAX_UPLOAD_SIZE },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIMES.includes(file.mimetype)) cb(null, true);
    else cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'Invalid file type'), false);
  }
});

const app = express();
app.use(cors()); // allow requests from your static site during testing
app.use(express.json());

// POST /upload  (field name: "file")
app.post('/upload', (req, res) => {
  upload.single('file')(req, res, function(err) {
    if (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') return res.status(400).json({ error: 'File too large.' });
        if (err.code === 'LIMIT_UNEXPECTED_FILE') return res.status(400).json({ error: 'Invalid file type.' });
      }
      return res.status(500).json({ error: 'Upload error.' });
    }
    if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });
    // Optional: access req.body.name for uploader name
    const uploaderName = req.body.name || '';
    console.log(`Received file: ${req.file.filename} from ${uploaderName}`);
    res.json({ message: 'File uploaded successfully.', filename: req.file.filename });
  });
});

// Simple health route
app.get('/', (req, res) => {
  res.send('Upload server running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Upload server listening on port ${PORT}, maxSize=${MAX_UPLOAD_SIZE}`);
});
