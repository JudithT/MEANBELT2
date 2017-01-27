console.log('User model');
console.log('Bucketlist model');
// console.log('Post model');
// console.log('Comment model');
// console.log('Upload model');
// console.log('Download model');


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  name: {type:String, required:true},
  bucketlist: [{type: Schema.Types.ObjectId, ref: 'Bucketlist'}],
  // posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  // topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}]

},{timestamps:true});

var User = mongoose.model('User',UserSchema)

var BucketlistSchema = new mongoose.Schema({
  title: {type:String, required:true},
  description:{type:String, required:true},
  // category:{type:String, required:true},
  // posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  _user: {type: Schema.Types.ObjectId, ref: 'User'}

},{timestamps:true});

var Bucketlist = mongoose.model('Bucketlist',BucketlistSchema)

// var PostSchema = new mongoose.Schema({
//   text: {type:String, required:true},
//   comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
//   _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
//   _user: {type: Schema.Types.ObjectId, ref: 'User'}
// },{timestamps:true});
//
// var Post = mongoose.model('Post',PostSchema)
//
// var CommentSchema = new mongoose.Schema({
//   text: {type:String, required:true},
//   _post: {type: Schema.Types.ObjectId, ref: 'Post'},
//   _user: {type: Schema.Types.ObjectId, ref: 'User'}
// },{timestamps:true});
//
// var CommentSchema = mongoose.model('Comment',CommentSchema)
//
// var UploadSchema = new mongoose.Schema({
//   count: {type:Number, required:true},
//   _post: {type: Schema.Types.ObjectId, ref: 'Post'},
//   _user: {type: Schema.Types.ObjectId, ref: 'User'}
// },{timestamps:true});
//
// var UploadSchema = mongoose.model('Upload',UploadSchema)
//
// var DownloadSchema = new mongoose.Schema({
//   count: {type:Number, required:true},
//   _post: {type: Schema.Types.ObjectId, ref: 'Post'},
//   _user: {type: Schema.Types.ObjectId, ref: 'User'}
// },{timestamps:true});
//
// var DownloadSchema = mongoose.model('Download',DownloadSchema)


// console.log(Friend)
// build your friend schema and add it to the mongoose.models
