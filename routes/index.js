import { Router } from 'express'
import { excelParser } from '../customModules/parser'
const router = Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  const parser = excelParser('public/excel/dummy2.xlsx')

  res.send(parser)
});

module.exports = router;
