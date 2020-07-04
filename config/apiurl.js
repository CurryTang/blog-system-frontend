const ipUrl = 'http://localhost:7001';

const servicePath = {
    getAll: ipUrl + '/default/getAllArticles',
    index: ipUrl + '/default/index',
    types: ipUrl + '/getAllTypes',
    oneArticle: ipUrl + '/article/',
    articleByType: ipUrl + '/category/'
};

export default servicePath;