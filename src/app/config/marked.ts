import marked from 'marked';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/monokai.css';
/**
 * markdown and highlight
 */
hljs.configure({
  tabReplace: '  ',
  usrBR: true,
  classPrefix: 'hljs-'
});
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: code => hljs.highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

export default marked;
