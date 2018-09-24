// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jsierra/code/juan-sierra.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jsierra/code/juan-sierra.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jsierra/code/juan-sierra.github.io/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/jsierra/code/juan-sierra.github.io/src/pages/page-2.js"))
}

