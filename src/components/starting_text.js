export default function StartingText() {
  return (`# Markdown Previewer
    This is a **Markdown Previewer** I created while going through the *Front End Libraries* challenges at [beta freeCodeCamp](https://beta.freecodecamp.org).

    I decided to try and create an experience that I am familiar with at this point, the GitHub-flavored Markdown Spec. I've been using it for every previous project, so why not create something with a similar feeling.

    ## Examples of Working Markdown

    I've copied several examples from [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), mainly to see if everything is truly working correctly.

    ## Headers

    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6
    Alt-H1
    ======
    Alt-H2
    ------

    ---

    ## Emphasis
    
    Emphasis, aka italics, with *asterisks* or _underscores_.  
    Strong emphasis, aka bold, with **asterisks** or __underscores__.  
    Combined emphasis with **asterisks and _underscores_**.  
    Strikethrough uses two tildes. ~~Scratch this.~~

    ---

    ## Lists

    1. First ordered list item
    2. Another item
      * Unordered sub-list. 
    1. Actual numbers don't matter, just that it's a number
      1. Ordered sub-list
    4. And another item.

      You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

      To have a line break without a paragraph, you will need to use two trailing spaces.  
      Note that this line is separate, but within the same paragraph.  
      (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

    * Unordered list can use asterisks
    - Or minuses
    + Or pluses

    ---

    ## Links

    [I'm an inline-style link](https://www.google.com)  
    [I'm an inline-style link with title](https://www.google.com "Google's Homepage")  
    [I'm a reference-style link][Arbitrary case-insensitive reference text]  
    [I'm a relative reference to a repository file](../blob/master/LICENSE)  
    [You can use numbers for reference-style link definitions][1]  
    Or leave it empty and use the [link text itself].

    URLs and URLs in angle brackets will automatically get turned into links. 
    http://www.example.com or <http://www.example.com> and sometimes 
    example.com (but not on Github, for example).

    Some text to show that the reference links can follow later.

    [arbitrary case-insensitive reference text]: https://www.mozilla.org
    [1]: http://slashdot.org
    [link text itself]: http://www.reddit.com

    ---

    ## Images

    Hover to see the title text:

    Inline-style: 
    ![alt text](https://raw.githubusercontent.com/Squibs/markdown-previewer/master/assets/images/react-logo.png "Logo Title Text 1")

    Reference-style: 
    ![alt text][logo]

    [logo]: https://raw.githubusercontent.com/Squibs/markdown-previewer/master/assets/images/react-logo.png "Logo Title Text 2"

    ---

    ## Code and Syntax Highlighting

    The markdown, here, is being parsed and compiled into html by [Marked.js](https://github.com/markedjs/marked).  
    The syntax highlighting is being done by [Prism.js](https://github.com/PrismJS/prism).

    By default Prism.js only loads \`markup\`, \`css\`, \`clike\`, and \`javascript\`. While there is an option to load more languages, I have decided to leave only these defaults, as I do not see myself using this project for much more than demonstration purposes.

    This may cause syntax highlighting to be slightly different than how GitHub would highlight blocks of code.

    \`\`\`markup
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>I can haz embedded CSS and JS</title>
      <style>
        @media print {
          p { color: red !important; }
        }
      </style>
    </head>
    <body>
      <h1>I can haz embedded CSS and JS</h1>
      <script>
      if (true) {
        console.log('foo');
      }
      </script>

    </body>
    </html>
    \`\`\`

    \`\`\`css
    @main-color: red;
    .foo {
      background: @main-color;
    }
    \`\`\`

    \`\`\`javascript
    // Regex "y" and "u" flags
    /[a-zA-Z]+/gimyu
    
    // for..of loops
    for(let x of y) { }
    
    // Modules: import
    import { foo as bar } from "file.js"
    
    // Template strings
    \`Only on \${y} one line\`
    \`This template string \${x} is on
    
    multiple lines.\`
    \`40 + 2 = \${ 40 + 2 }\`
    \`The squares of the first 3 natural integers are \${[for (x of [1,2,3]) x*x].join(', ')}\`
    \`\`\`

    \`\`\`
    No language indicated, so no syntax highlighting. 
    But let's throw in a <b>tag</b>.
    \`\`\`

    ---

    ## Tables

    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |

    Markdown | Less | Pretty
    --- | --- | ---
    *Still* | \`renders\` | **nicely**
    1 | 2 | 3

    ---

    ## Blockquotes

    > Blockquotes are very handy in email to emulate reply text.
    > This line is part of the same quote.

    Quote break.

    > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure
    this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

    ---

    ## Inline HTML

    <dl>
      <dt>Definition list</dt>
      <dd>Is something people use sometimes.</dd>

      <dt>Markdown in HTML</dt>
      <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
    </dl>

    ---

    ## Horizontal Rule

    Three or more...

    ---

    Hyphens

    ***

    Asterisks

    ___

    Underscores
  `).replace(/^ {4}/gm, '').trimRight();
}
