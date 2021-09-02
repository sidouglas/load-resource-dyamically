# Load Resource Dynamically

Promise based ([use a polyfill if needed](https://polyfill.io/v2/docs/)) loader that takes an array of urls and loads them into the document. 
That's it. Automatically caches the request.


##### Install:
```
npm install load-resource-dynamically --save

//OR

yarn add load-resource-dynamically --save
```

##### Use:

```
import { loadScripts, loadCss }  from 'load-resource-dynamically';
```

##### Example

```
import loadScripts from 'load-resource-dynamically';
loadScripts(['/your-url/script1.js','/your-url/script1.js']).then(response => {
//...carry on
}).catch(error => {
// ...handle the error
})
```

##### Example ES2017 Style

```
(async () => {
 try {
 let result = await loadCss(['/your-url/css1.css','/your-url/css2.css'])
 result[0].src // contains the path of the script you just loaded, e.g. /your-url/css1.css
 result[0].fromCache // whether or not it was from cache. (true or undefined)
 result[1].src // /your-url/css2.css
 result[1].fromCache // true or undefined
 } catch (error){
   throw new Error('...etc...')
 }
})()
```

Based on https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135