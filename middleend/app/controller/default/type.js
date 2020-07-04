'use strict';

const Controller = require('egg').Controller

class TypeController extends Controller{
    async getAllTypes() {
        const ctx = this.ctx;
        const result = await ctx.model.Type.findAll({
            attributes: ['id', 'name', 'order']
        });
        ctx.body = result;
    }

    async getTypeByTypeId() {
        const ctx = this.ctx;
        const result = await ctx.model.Article.findByTypeId(ctx.params.id);
        ctx.body = result;
    }
}

module.exports = TypeController