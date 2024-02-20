const multer = require("multer");
const router = require("express").Router();

const Image = require("../models/utilModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

// router.get("/downloadfile", (req, res) => {
//   res.download("./uploads/1.jpg");
// });

// multiple file upload
const myStorage2 = multer({ storage: storage });
router.post("/uploadmultiple", myStorage2.array("myfiles", 3), (req, res) => {
  res.status(200).json({ status: "success" });
});

router.post('/image-upload',(req,res)=>{
  console.log(req.body);
  const {image} = req.body
  new Image(req.body).save()
  .then((result) => {
      res.json(result)
  }).catch((err) => {
      console.error(err);
      res.json(err)
  });
})

router.get('/get-image',(req,res)=>{
  Image.find()
  .then((result) => {
      res.json(result)
  }).catch((err) => {
      console.error(err);
      res.json(err)
  });
})

module.exports = router;