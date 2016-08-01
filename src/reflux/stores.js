var ArticleStore = Reflux.createStore({
    init:function() {
      this.listenTo(Actions.createdArticle, this.createdArticle);
    },
    createdArticle:function(payload) {
      this.trigger(payload);
    }
});
