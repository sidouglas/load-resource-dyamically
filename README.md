# Load Resource Dynamically

Promise based ([use a polyfill if needed](https://polyfill.io/v2/docs/)) loader that takes an array of urls and loads them into the head. That's it. Automatically caches the request.

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
 let result = await loadScripts(['/your-url/script1.js','/your-url/script1.js'])
 } catch (error){
   throw new Error('...etc...')
 }
})()
```

Based on https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135