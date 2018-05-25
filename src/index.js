const scriptCache = {};
const cssCache = {};

const loadScriptUrl = (src) => new Promise((resolve, reject) => {
  if (!scriptCache[src]) {
    const scriptEl = document.createElement('script');

    scriptCache[src] = [];
    scriptEl.src = src;
    // This is the clincher; wait for all scripts first, then execute in order.
    scriptEl.async = false;

    scriptEl.onload = scriptEl.onreadystatechange = () => {
      scriptEl.onreadystatechange = scriptEl.onload = null;
      resolve(src);
      // resolve every other script that's waiting in cache
      scriptCache[src].forEach((promise) => promise(src));
      // keep a reference to the script that's loaded, so we don't load it again
      scriptCache[src] = true;
    };

    scriptEl.onerror = (error) => reject(error);
    document.body.appendChild(scriptEl);
  } else if (scriptCache[src] === true) {
    // script already been loaded from another loadUrl call, resolve it right away.
    resolve(src);
  } else {
    // script is still being loaded, add to cache.
    scriptCache[src].push(resolve);
  }
});

const loadCssUrl = (src) => new Promise((resolve, reject) => {
  if (!cssCache[src]) {
    const cssEl = document.createElement('link');

    cssCache[src] = [];
    cssEl.type = 'text/css';
    cssEl.rel = 'stylesheet';
    cssEl.href = src;
    // temporarily set media to something inapplicable to ensure it'll fetch without blocking render
    cssEl.media = 'only x';

    cssEl.onload = () => {
      cssEl.media = 'all';
      resolve(src);
      // resolve every other css file that's waiting in cache
      cssCache[src].forEach((promise) => promise(src));
      // keep a reference to the css files that's loaded, so we don't load it again
      cssCache[src] = true;
    };
    cssEl.onerror = (error) => reject(error);
    document.head.insertBefore(cssEl, document.head.firstChild);
  } else if (cssCache[src] === true) {
    // css file has already been loaded from another loadUrl call, resolve it right away.
    resolve(src);
  } else {
    // css file is still being loaded, add to cache.
    cssCache[src].push(resolve);
  }
});

export const loadCss = (urls) => Promise.all(urls.map(loadScriptUrl));
export const loadScripts = (urls) => Promise.all(urls.map(loadCssUrl));