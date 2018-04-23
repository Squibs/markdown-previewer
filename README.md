# Markdown Previewer

A markdown previewer built with React and Redux, I have created while going through the *Front End Framework Projects* on **beta freeCodeCamp**.

## Front End Libraries

<img src="./screenshot-markdown-previewer.png" target="_blank" alt="Screenshot of my markdown previewer react project." width="auto" height="400" />

### [Markdown Previewer]() (Click to view functional site)




## Future Note to Myself

In order to have all the freeCodeCamp test suite tests for this project to pass I had to edit `/node_modules/prismjs/prism.js`.

Lines at the time being: 210 and 217.

Snippet of modified code:

```JavaScript
// Set language on the element, if not present
element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + 'language-' + language; // !! CHANGED THIS

if (element.parentNode) {
  // Set language on the parent, for styling
  parent = element.parentNode;

  if (/pre/i.test(parent.nodeName)) {
    parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + 'language-' + language; // !! CHANGED THIS
  }
}
```

In the above I had to switch:

```JavaScript
.replace(/\s+/g, ' ') + ' language-' + language;
```

to (just removed the leading space):

```JavaScript
.replace(/\s+/g, ' ') + 'language-' + language;
```

Without this change the fCC test suite would not be able to detect the default markdown in the #editor field being rendered correctly on page load (test number 6 for Markdown Previewer tests). Before the change, the html would end up looking like (with the leading spaces in the class property): 

```
<pre class="  language-javascript><code class="  language-javascript></code></pre>
```
