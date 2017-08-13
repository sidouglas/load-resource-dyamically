/*
 * loadScripts
 * @param urls:Array
 * @param callBack:Function
 * @link https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135
 */
export const loadScripts = (() => {
  let cache = []
  return (urls) => {
    let scripts = [...urls]
    return new Promise((resolve, reject) => {
      const loader = (src, handler) => {
        if (cache.indexOf(src) >= 0) {
          taskRunner(scripts, loader, resolve)
        } else {
          let script = document.createElement('script')

          script.src = src

          script.onload = script.onreadystatechange = () => {
            script.onreadystatechange = script.onload = null
            taskRunner(scripts, loader, resolve)
          }
          document.body.appendChild(script)
          cache.push(src)
        }
      }
      taskRunner(scripts, loader, resolve)
    })
  }
})()

/*
 * loadCss
 * @param urls:Array
 * @param callBack:Function
 * @link https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135
 */
export const loadCss = (() => {
  let cache = []
  const head = document.getElementsByTagName('head')[0]
  return (urls) => {
    let cssFiles = [...urls]
    return new Promise((resolve, reject) => {
      function loader (url, taskRunner) {
        if (cache.indexOf(url) >= 0) {
          taskRunner(cssFiles, loader, resolve)
        } else {
          let cssnode = document.createElement('link')
          cssnode.type = 'text/css'
          cssnode.rel = 'stylesheet'
          cssnode.href = url
          cssnode.onload = () => {
            cache.push(url)
            taskRunner(cssFiles, loader, resolve)
          }
          head.appendChild(cssnode)
        }
      }
      taskRunner(cssFiles, loader, resolve)
    })
  }
})()

function taskRunner (files, loader, resolver) {
  if (files.length !== 0) {
    loader(files.shift(), taskRunner)
  } else {
    resolver(files)
  }
}
