import { Router } from 'express'
import { excelParser } from '../customModules/parser'
const router = Router()

/* GET home page. */
router.get('/', function(req, res, next) {

  res.send(`
    테스트를 하고 싶다면 Post 타입으로 "http://MY_URL/demo"를 호출하세요.   
  `)
});

router.post('/demo', function(req, res, next) {
  const workbook = excelParser('public/excel/dummy4(best).xls')
  let worksheetIndex = workbook.SheetNames

  return new Promise((resolve, reject) => {
    worksheetIndex.map(name => {
      resolve(workbook.Sheets[name])
    })
  }).then(sheetData => {
    res.status(200).json({ sheetData })
  })
});

module.exports = router;
