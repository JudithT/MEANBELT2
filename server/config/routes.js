var bucketlist = require('../controllers/bucketlist.js');

module.exports = function (myApp) {
  myApp.get('/bucketlist', function(req,res){
    bucketlist.index(req,res);
  })
  myApp.post('/bucketlist', function(req,res){
    bucketlist.index(req,res);
  })


}
