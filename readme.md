# Learning React #
### State vs Stateless components ###

This app is intended to show/help developers understand how react components work
and also help identify when to use state or stateless components.

The instructor will walk through the creation of each component and fully explain the why and the how.   

This sample App allows users to store Articles (in memory) using a variation of flux to communicate state changes.


### Before you start ###

We will be using live-server to preview our app make sure you have it on your system.
```
  npm install -g live-server
```
to use live-server navigate to your app directory and simply type live-server.

Live server is not mandatory but recommended to quickly preview changes.

### App development ###

Take a look at the general layout and identify components.

![Image of components](http://res.cloudinary.com/www-codervelop-com/image/upload/v1470014290/Screen_Shot_2016-07-31_at_6.11.58_PM_o7hi1r.png)

### Business Rules ###
When a user creates an article the following is expected:

* Category list is updated.
* Top navbar last Update label is updated with latest article date.
* Article list is updated every time we create a new article.
* The form resets to its original state after dispatching an action.

![Image of components2](http://res.cloudinary.com/www-codervelop-com/image/upload/v1470014944/Screen_Shot_2016-07-31_at_6.28.36_PM_twifhh.png)

### Create the following components ###
* Top navbar
* Category item (stateless individual list item)
* Category list (Has many category items)
* Form
* Article List

### Add flux (reflux) to communicate and change state ###

1. Create Actions.
1. Create stores.
1. Fire Actions from main form.
1. All other components must listen to this action.

### HTML quick start index.html ###
The following HTML contains the references we will be using to build the app.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple react Example</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.1/JSXTransformer.js"></script>
    <!-- Reflux -->
    <script src="https://cdn.jsdelivr.net/refluxjs/0.4.1/reflux.min.js"></script>
  </head>
  <body>
    <div id="app">Loading.....</div>
  </body>
</html>
```
