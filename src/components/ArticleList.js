
/**
 * Listens to a store that triggers an action everytime an article is created.
 * Updates its state and renders a list of articles.
 */
var ArticleList = React.createClass({
   mixins:[Reflux.listenTo(ArticleStore, "onCreatedArticle")],
    getInitialState:function() {
      return {
        items:[]
      };
    },
    onCreatedArticle:function(payload) {
      this.setState({
        items:this.state.items.slice().concat([payload])
      });
    },
    render:function() {
      return (
        <div>
          {this.state.items.sort((a,b)=>a.createdDate<b.createdDate).map(function(item, index) {
            return (
              <div key={index}>
                <h3>{item.title}, <small>{item.category}</small></h3>
                <p>{item.articleBody}</p>
                <div style={{textAlign:'right'}}>
                  <p>Created on: {item.createdDate.toString()}</p>
                </div>
                <hr/>
              </div>
            );
          })}
        </div>
      );
    }
});
