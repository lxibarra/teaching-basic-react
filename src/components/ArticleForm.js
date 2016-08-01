var ArticleForm = React.createClass({
    //This touches the DOM it is posible but its not the react way
    submitArticle:function(e) {
        e.preventDefault();
        Actions.createdArticle(
          {
            title:e.target.title.value,
            category:e.target.category.value||'Default',
            articleBody:e.target.articleBody.value,
            createdDate:new Date()
          }
        );
        e.target.reset();
    },
    render:function() {
    return (
        <form onSubmit={this.submitArticle}>
            <div className="form-group">
                <label htmlFor="title">Article Title</label>
                <input type="text" name="title" className="form-control" id="title" placeholder="Enter title"/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <input type="text" name="category" className="form-control" id="category" placeholder="Enter Category" />
            </div>
            <div className="form-group">
              <label htmlFor="articleBody">Body</label>
              <textarea id="articleBody" name="articleBody" className="form-control" rows="3" placeholder="Enter Article info here"></textarea>
            </div>
            <button type="submit" className="btn btn-default">Save</button>
        </form>
      );
    }
});
