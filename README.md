## Rashomon
Cut code in two.
Rashomon let you to split code to comment and code description in one linear.
![74ea3558.jpg](https://qiita-image-store.s3.amazonaws.com/0/16301/fe7e8df9-744e-be8f-abd3-6f51b3300393.jpeg "74ea3558.jpg")

## Dependencies
- line-reader(^0.2.4)

## Installation
```
npm install rashomon
```

## How to use
Prepare the target code you'd split.

```test.js
// this is comment
var Say = "YoHo";
```

Then, you can save comment and code separetely with Rashomon library.

```
var Rashomon = require('rashomon');
var target   = path.join(__dirname, './test.js');
var result   = Rashomon.parseCode(target);

console.log(result);
// [{"docsText":"this is comment", "codeText": "var Say= "YoHo";"}]
```
