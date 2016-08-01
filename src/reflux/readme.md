# "Flux" Pattern to update component state #

### Actions ###

Actions are used to describe events that occur on your application. Most of the time these actions are triggered by the user. User may click on a button or input some text and our application needs to do something with this new information.

Whenever we want to communicate that something happened in our app we trigger actions. Actions are just methods that receive a payload as an argument.

In **Reflux** which is a variation of flux we define actions as follows.

```js
var Actions = Reflux.createActions([
  'createdArticle'
]);
```

Whenever we want to communicate events we simply invoke actions.

```js
  Actions.createdArticle({ payload:{...props} }
```

Actions can be triggered from our components.

### Stores ###

Our components listen to stores not actions. With this in mind we need to remember to "bind" our components to stores that listen to specific actions.

The flow can be described as:
  1. Component triggers an action.
  1. Store listens to this actions and dispatches the action with a payload.
  1. Components listing to this store trigger a local method and usually modify the state and re render if necessary.

  ```
  ╔═════════╗       ╔════════╗       ╔═════════════════╗
  ║ Actions ║──────>║ Stores ║──────>║ View Components ║
  ╚═════════╝       ╚════════╝       ╚═════════════════╝
       ^                                      │
       └──────────────────────────────────────┘

  ```

The view component can be either number **1 or 3** in the flow. Because a component can be a listener but it can also trigger actions.

Defining stores is straight forward
```js
var ArticleStore = Reflux.createStore({
    init:function() {
      this.listenTo(Actions.createdArticle, this.createdArticle);
    },
    createdArticle:function(payload) {
      this.trigger(payload);
    }
});
```

There are more thing you can do with Reflux follow this link to lear more about it.

[https://github.com/reflux/refluxjs](https://github.com/reflux/refluxjs)
