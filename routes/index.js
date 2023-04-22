var express = require('express');
// const useControllerUser = require('../controllers/user');
const useControllerNote = require('../controllers/note');
const useControllerUser = require('../controllers/user');
const useControllerStyle = require('../controllers/style');
const useController_first_card = require('../controllers/first_card');
var router = express.Router();
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/get_user', useControllerUser.showUser)
/* GET home page. */
router.get('/get_note', useControllerNote.showNote)

router.get('/get_style', useControllerStyle.showStyle)
// 登录
router.post('/api/login',useControllerUser.login)
router.post('/api/register',useControllerUser.register)
// firstCard
router.post('/api/get_first_card',useController_first_card.show_first_card)
module.exports = router;
