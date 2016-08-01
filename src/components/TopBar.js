var TopBar = React.createClass({
  mixins:[Reflux.listenTo(ArticleStore, "onCreatedArticle")],
  getInitialState:function(){
    return {
      lastUpdate:'Never'
    };
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
