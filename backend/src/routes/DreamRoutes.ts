import express from 'express';


const router = express.Router();

import DreamService from '../services/DreamService'



router.route('/').post(async (req, res)=>{
	let dreamInfo = req.body.dream
	res.json( await DreamService.createDream(dreamInfo))
  }
);


module.exports = router;