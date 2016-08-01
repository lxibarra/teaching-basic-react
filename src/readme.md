### App.js ###

This component is responsible for putting the app together.
As you can see, it invokes other components that are already on the page.

Components used in the app are loaded using the script tag
and they must be defined before invoking the App.js code.
```html
<script src="src/components/TopBar.js" type="text/jsx"></script>
<script src="src/components/Categories.js" type="text/jsx"></script>
<script src="src/components/ArticleForm.js" type="text/jsx"></script>
<script src="src/components/ArticleList.js" type="text/jsx"></script>
<!-- App.js comes last -->
<script src="src/App.js" type="text/jsx"></script>
```

Each one of this files defines a global variable

```js
var TopBar = ...//component code
var Categories = ...//component code

//and so on
```

Feel free to inspect this files inside the components folder.
