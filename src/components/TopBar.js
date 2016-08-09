
/**
 * Displays a top nav bar and listens to a store to trigger an action
 * every time an artcile is created.
 *
 * When an article is created it updates an anchor tag with the date and time of
 * the last item created.
 *
 */
var TopBar = React.createClass({
  mixins:[
    Reflux.listenTo(ArticleStore, "onCreatedArticle"),
    Reflux.listenTo(ArticleStoreDelete, "onArticleDelete")
  ],
  getInitialState:function(){
    return {
      lastUpdate:'Never'
    };
  },
  onArticleDelete:function(payload) {
    this.setState({
      lastUpdate:payload.lastUpdate&&payload.lastUpdate.createdDate.toString()||'Never'
    });
  },
  onCreatedArticle:function(payload) {
      this.setState({
        lastUpdate:payload.createdDate.toString()
      });
  },
  render:function() {
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    {this.props.title}
                  </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><b>Last Update:</b>{this.state.lastUpdate}</a></li>
                </ul>
              </div>
         </div>
      </nav>
    );
  }
});
