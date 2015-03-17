## Rashomon
Cut code in two.<br/>
Rashomon let you split code to comment and code description in one linear.<br/>
![978590B696E581I8CB489E6.jpg](https://qiita-image-store.s3.amazonaws.com/0/16301/135862f1-81ac-e832-ff00-ffc974d97025.jpeg "978590B696E581I8CB489E6.jpg")


## Dependencies
- line-reader(^0.2.4)

## Installation
```
npm install rashomon
```

## How to use
Prepare the target code you'd split.<br/>
(In this introduction, we use following test.js)

```js:test.js
// this is comment
var Say = "YoHo";
```

Then, you can save comment and code separetely with Rashomon library.

```js:usecase
var Rashomon = require('rashomon');
var target   = path.join(__dirname, './test.js');
var result   = Rashomon.parseCode(target);

console.log(result);
// [{"docsText":"this is comment", "codeText": "var Say = "YoHo";"}]
```
