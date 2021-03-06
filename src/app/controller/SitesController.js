const User = require("..//models/User");
const Department = require("..//models/Department");
const Subject = require("..//models/Subject");
const Post = require("../models/Post");
const Notification = require("../models/Notification");
const moment = require("moment");
const { mutipleMongooseToObject } = require("..//..//util/mongoose");

class SitesController {
    // [GET] /
    index(req, res, next) {

        let userID = undefined
        if (req.user) {
            // logined
            userID = req.user._id
        }
        Promise.all([
                Department.find({}),
                Post.find({ deleted: false }).sort({ "createdAt": -1 }).limit(8).populate("owner"),

            ])
            .then(function([departments, posts]) {
                moment.locale("vi"); // cau hinh tieng viet
                for (var i = 0; i < posts.length; i++) {
                    posts[i].timeAgo = moment(new Date(posts[i].createdAt)).fromNow();
                    posts[i].images = posts[i].images[0];
                }
                res.render("index", {
                    departments: mutipleMongooseToObject(departments),
                    postsNew: mutipleMongooseToObject(posts)
                });
            })
            .catch(function(err) {
                console.log(err)
            });
    }
}
module.exports = new SitesController();