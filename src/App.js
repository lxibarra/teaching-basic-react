var App = React.createClass({
  render:function() {
    return (
      <div className="container-fluid">
        <TopBar title="Tech Club"/>
        <div className="row">
            <div className="col-md-3 col-xs-12">
              <Categories/>
            </div>
            <div className="col-md-9 col-xs-12">
              <ArticleForm />
              <div className="row">
                <div className="col-xs-12">
                    <ArticleList/>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
