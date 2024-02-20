const router=require('express').Router();
const TestController=require('../Controller/TestController');

router.post('/post',TestController.createTestController);
router.get('/getall',TestController.getAllTest)

module.exports=router;
