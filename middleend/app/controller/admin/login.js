const Controller = require('egg').Controller;
const util = require('util');
const bcrypt = require('bcryptjs');

class LoginController extends Controller {
    async index() {
        this.ctx.body = "Hello World";
    }   


    async handleLogin() {
        const ctx = this.ctx;
        const username = ctx.request.body.username;
        const passwordHash = ctx.request.body.passwordHash;
        const res = ctx.model.User.findByName(username);
        if (!res) {
            ctx.body = {
                "data": "No such user"
            }
            return;
        }
        const userid = new Date().getTime();
        ctx.session.userid = userid;
        ctx.body = {
            "data": "success",
            "userid": userid
        };
    }

    async handleSignup() {
        const ctx = this.ctx;
        const username = ctx.request.body.username;
        const passwordHash = ctx.request.body.passwordHash;
        const res = ctx.model.User.findByName(username);
        if(res.length > 0) {
            ctx.body = {
                "data": "Duplicated Username"
            }
            return;
        }
        const userid = new Date().getTime();
        const newUser = await ctx.model.User.create(
            {name: username, password: passwordHash, role: "user"}
        );
        ctx.session.userid = userid;
        ctx.body = {
            "data": "success",
            "userid": userid
        };
    }
}

module.exports = LoginController;