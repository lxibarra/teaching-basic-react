/**
 * Main application is a stateless component it will not manage state on this example.
 * Each individual component will be responsible for managin its own state.
 * (we are not using containers)
 *
 * We are invoking other components inside our main component
 *   1. TopBar
 *   2. Categories
 *   3. ArticleForm
 *   4. ArticleList
 *
 * @return {JSX}
 */
function App() {
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

//Mount the main component on the page
ReactDOM.render(<App/>, document.getElementById('app'));
