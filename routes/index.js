import express from 'express'
import { excelParser } from '../customModules/parser'
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  const parser = excelParser('public/')

  res.send(parser)
});

module.exports = router;
