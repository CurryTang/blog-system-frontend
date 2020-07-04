module.exports = app =>{
    const {router,controller} = app;
    var adminauth = app.middleware.adminauth();
    router.get('/default/index',controller.default.home.index);
    router.get('/default/getAllArticles', controller.default.home.getAllArticle);
    router.get('/getAllTypes', controller.default.type.getAllTypes);
    router.post('/addArticle', adminauth, controller.default.home.addArticle);
    router.get('/article/:id', controller.default.home.getArticleById);
    router.get('/category/:id', controller.default.type.getTypeByTypeId);
    router.post('/admin/index', controller.admin.login.handleLogin);
    router.post('/admin/signup', controller.admin.login.handleSignup);
    router.post('/admin/test', controller.admin.login.index);
    router.post('/updateArticle', adminauth, controller.default.home.updateArticle);
    router.delete('/deleteArticle/:id', adminauth, controller.default.home.deleteArticle);
    router.get('/backend/getAllTypes', adminauth, controller.default.type.getAllTypes);
}