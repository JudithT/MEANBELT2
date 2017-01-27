
var mongoose = require('mongoose'),
Bucketlist = mongoose.model('Bucketlist');
User = mongoose.model('User');

module.exports ={
  index:function(req,res){
    console.log('Bucketlist index');
    Bucketlist.find({},function(err,data){
      if (err){
        console.log(err);
        res.json(err);
      }else{
        console.log(data)
        res.json(data);
      }
    })

  },
  create:function(req,res){
    console.log('User create');
    // console.log('REQ.body' req.body);
    var user = new User({name:req.body.name});
    console.log(user);
    User.save(function(err){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        res.json({sucess:true});
      }
    })
},

createbucketlist:function(req,res){
  console.log('bucketlist create');
  // console.log('REQ.body' req.body);
  var bucketlist = new Bucketlist({title:req.body.newbucketlist.title, description:req.body.newbucketlist.description});
  console.log(bucketlist);
  Bucketlist.save(function(err){
    if(err){
      console.log(err);
      res.json(err);
    }else{
      res.json({sucess:true});
    }
  })
},

show:function(req,res){
  console.log(req.params);
  User.findOne({_id: req.params.id}, function(err,data){
    if (err){
      console.log(err);
      res.json(err);
    }else{
      console.log(data);
      res.json(data);
    }
  })
},

update: function(req,res){
  console.log(req.params,req.body);
  User.findOne({_id:req.params.id}, function(err,data){
    if (err){
      console.log(err);
      res.json(err);
    }else{
      for(var i in req.body){
        if (req.body[i]!= data[i]){
          data[i] = req.body[i];
        }
      }
      console.log(data);
      data.save(function(err,data){
        if(err){
          console.log(err);
          res.json(err);
        }else{
          console.log(data);
          res.json(data);
        }
      })
    }
  })
},

destroy:function(req,res){
  console.log(req.params.id)
  User.findOne({_id: req.params.id}, function(err,data){
    if (err){
      console.log(err);
      res.json(err);
    }else{
      User.remove(data,function(err){
        if(err){
          console.log(err);
          res.json(err);
        }else{
          console.log('deleted');
          res.json({sucess:true});
        }
      })
    }
  })
}
}
