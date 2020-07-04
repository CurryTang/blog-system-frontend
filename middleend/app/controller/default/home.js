'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        const result = await this.app.mysql.get("blog_content", {});
        this.ctx.body = result;
    }

    async getAllArticle() {
        const ctx = this.ctx;
        const query = {
            attributes: ['id', 'name', 'introduction', 'content', 'created_at', 'view_count', 'type_id'],
            include:{
                as: "type",
                model: ctx.model.Type,
                attributes: ['id', 'name', 'order']
        }};
        ctx.body = await ctx.model.Article.findAll(query);
        
    }

    async addArticle() {
        const ctx = this.ctx;
        const res = await ctx.model.Article.create({
            name: ctx.request.body.name,
            introduction: ctx.request.body.introduction,
            content: ctx.request.body.content,
            created_at: ctx.request.body.date,
            view_count: 0,
            type_id: ctx.request.body.category
        });
        if (res){
            ctx.body = {
                data: "success", 
            }
        } else {
            ctx.body = {
                data: "fail"
            }
        }
    }

    async updateArticle() {
        const ctx = this.ctx;
        const res = await ctx.model.Article.update({
            name: ctx.request.body.name,
            introduction: ctx.request.body.introduction,
            content: ctx.request.body.content,
            created_at: ctx.request.body.created_at,
            type_id: ctx.request.body.type_id
        }, {where: {
                id: ctx.request.body.id
            }}
        );
        if (res) {
            ctx.body = {
                data: "success"
            }
        } else {
            ctx.body = {
                data: "failure"
            }
        }
    }

    async getArticleById() {
        const ctx = this.ctx;
        const article = await ctx.model.Article.findById(ctx.params.id);
        ctx.body = article;
    }

    async deleteArticle() {
        const ctx = this.ctx;
        const res = await ctx.model.Article.destroy({
            where: {
                id: ctx.request.body.id
            }
        });
        console.log(res);
    }


}

module.exports = HomeController