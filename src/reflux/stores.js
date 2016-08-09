var ArticleStore = Reflux.createStore({
    init:function() {
      this.listenTo(Actions.createdArticle, this.createdArticle);
    },
    createdArticle:function(payload) {
      this.trigger(payload);
    }
});

var ArticleStoreDelete = Reflux.createStore({
  init:function() {
    this.listenTo(Actions.deleteArticle, this.deleteArticle);
  },
  deleteArticle:function(payload) {
      this.trigger(payload);
  }
});
