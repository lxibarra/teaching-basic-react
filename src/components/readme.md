### Components ###

In this folder you will find the components required by the app.

This readme.md will only highlight the most important parts of each components. Feel free to open each component and inspect the full code.

### TopBar.js ###

Renders the main top nav bar and listens to a **Reflux Action** that triggers every time a new article is created and updates the text of an anchor tag with the created date.

Listens by using a mixing
```js
  mixins:[Reflux.listenTo(ArticleStore, "onCreatedArticle")],
```  
the component has a method named onCreatedArticle that receives a parameter.
```js
onCreatedArticle:function(payload) {
    this.setState({
      lastUpdate:payload.createdDate.toString()
    });
}
```

### Categories.js ###

Has **Categories** and **CategoryItem** components. Categories is a ul container and CategoryItem is a li item.

When an article is created it updates the category list accordingly.

Listens to stores in similar way as TopBar.js you may need to pay attention on how it creates child components on the render method.

```js

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
```

### ArticleForm.js ###

Renders a form and triggers a **Reflux Action** to notify other components that the user has created a new entry.

```js
Actions.createdArticle(
  {
    title:e.target.title.value,
    category:e.target.category.value||'Default',
    articleBody:e.target.articleBody.value,
    createdDate:new Date()
  }
);
```

### ArticleList ###
Renders all the information about Articles. Basically it loops through an array that resides in its current state.

It also listens to the same store as all other component s.

The articles appear in created date descending order.

Listens to a store and implements an onCreatedArticle method.
```js
  mixins:[Reflux.listenTo(ArticleStore, "onCreatedArticle")],
```

This executes every time and article is created.
```js
onCreatedArticle:function(payload) {
  this.setState({
    items:this.state.items.slice().concat([payload])
  });
},
```
