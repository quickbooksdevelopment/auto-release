(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{47:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=i(o(2)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0));i(o(1)),i(o(61));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,a){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const d=e=>{let{to:t}=e,o=c(e,["to"]);return t.includes("http")?n.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=a.default.join("/auto-release/","pages/auto-changelog.html")+t),n.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(a.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(n),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,o;return o=t=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),o};h(()=>o.e(22).then(o.bind(null,62))),h(()=>o.e(22).then(o.bind(null,63)));var p=s("h1",{},void 0,s("code",{},void 0,"auto changelog")),f=s("p",{},void 0,"Prepend release notes to ",s("code",{},void 0,"CHANGELOG.md"),", create one if it doesn't exist, and commit the changes."),g=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"\u26a0\ufe0f This should be run before ",s("code",{},void 0,"npm version")," so the ",s("code",{},void 0,"CHANGELOG.md")," changes are committed before the release gets tagged."))),m=s("pre",{},void 0,s("code",{className:"language-bash"},void 0,">  auto changelog -h",s("br",{}),s("br",{}),"usage: auto changelog [-h] [--from FROM] [--to TO] [--jira JIRA]",s("br",{}),"                         [--no-version-prefix] [-d] [-m MESSAGE] [-v] [-vv]",s("br",{}),"                         [--githubApi GITHUBAPI] [--name NAME] [--email EMAIL]",s("br",{}),s("br",{}),s("br",{}),"Optional arguments:",s("br",{}),"  -h, --",s("span",{className:"hljs-built_in"},void 0,"help"),"            Show this ",s("span",{className:"hljs-built_in"},void 0,"help")," message and ",s("span",{className:"hljs-built_in"},void 0,"exit"),".",s("br",{}),"  --from FROM           Tag to start changelog generation on. Defaults to",s("br",{}),"                        latest tag.",s("br",{}),"  --to TO               Tag to end changelog generation on. Defaults to HEAD.",s("br",{}),"  --jira JIRA           Jira base URL",s("br",{}),"  --no-version-prefix   Use the version as the tag without the `v` prefix",s("br",{}),"  -d, --dry-run         Dont actually commit status. Just ",s("span",{className:"hljs-built_in"},void 0,"print")," the request",s("br",{}),"                        body",s("br",{}),"  -m MESSAGE, --message MESSAGE",s("br",{}),"                        Message to commit the changelog with. Defaults to",s("br",{}),"                        ",s("span",{className:"hljs-string"},void 0,'"Update CHANGELOG.md [skip ci]"'),s("br",{}),"  -v, --verbose         Show some more logs",s("br",{}),"  -vv, --very-verbose   Show a lot more logs",s("br",{}),"  --githubApi GITHUBAPI",s("br",{}),"                        Github API to use",s("br",{}),"  --name NAME           Git name to commit and release with. Defaults to",s("br",{}),"                        package.json",s("br",{}),"  --email EMAIL         Git email to commit with. Defaults to package.json",s("br",{}))),b=s("p",{},void 0,"To include Jira story information you must include a URL to your hosted JIRA instance as a CLI or ",s("code",{},void 0,".autorc")," config option.");var v=e=>s("div",{className:e.className},void 0,s("section",{},void 0,p,f,g,m,s("h2",{id:"jira"},void 0,"Jira ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#jira","aria-hidden":"true"})),b,s("h2",{id:"changelog-titles"},void 0,"Changelog Titles ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-titles","aria-hidden":"true"})),s("p",{},void 0,"You can customize the changelog titles and even add custom ones. To see configuration ",s(d,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#changelog-titles"},void 0,"go here"),".")));t.default=v,e.exports=t.default}}]);
//# sourceMappingURL=auto-changelog.js.map