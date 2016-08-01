/**
 * var - Stateless component
 *
 * @param  {Object}           props Component properties (parent defined)
 * @return {React.Component}        React Component
 */
var CategoryItem = function(props){
  return (
    <li className="list-group-item">
        <span className="badge">{props.qty}</span>
        {props.text}
    </li>
  );
};


/**
 * Parent class component that renders multiple Category item components
 * 
 */
var Categories = React.createClass({
    mixins:[Reflux.listenTo(ArticleStore, "onCreatedArticle")],
    onCreatedArticle:function(payload) {
      var items = this.state.items.slice();

      var found = items.find(function(item) {
          if(item.category === payload.category) {
            item.qty = item.qty + 1;
            return true;
          }
      });
      if(!found) {
        items.push({ category:payload.category, qty:1 });
      }

      this.setState({
        items:items
      });

    },
    getInitialState: function() {
        return {
            items: []
        };
    },
    render: function() {
        var items = this.state.items.map(function(item, index){
          return (<CategoryItem text={item.category} qty={item.qty} key={index}/>);
        });
        return (
            <ul className="list-group">
              <li className="list-group-item"><b>Categories</b></li>
              {items}
            </ul>
        );
    }
});
