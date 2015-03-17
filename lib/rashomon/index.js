var fs = require('fs'),
    lineReader = require('line-reader'),
    path = require('path');

exports.testYo = function() {
  return "Yo!";
};

exports.parseCode = function(filePath) {
  return getCodeTextHash(filePath);
};

function getCodeTextHash(filePath){
    console.log("before");
    var buffer = fs.readFileSync(filePath);
    var code, sections, parsedCode;
    code = buffer.toString();
    parsedCode = parse(code.split('\n'), filePath);
    return parsedCode;
}

function parse(lines, filePath) {
    var languages = JSON.parse(fs.readFileSync(path.join(__dirname, 'resources/languages.json')));

    var buildMatchers = function(languages) {
        var ext, l;
        for (ext in languages) {
            l = languages[ext];
            l.commentMatcher = RegExp("^\\s*" + l.symbol + "\\s?");
            l.commentFilter = /(^#![/]|^\s*#\{)/;
        }
        return languages;
    };

    var langs = buildMatchers(languages);

    var getLanguage = function(config, filePath) {
        var codeExt, codeLang, ext, lang, _ref;
        var filename = path.basename(filePath);
        ext = path.extname(filePath);
        lang = languages[ext];
        return lang;
    };
    
    var lang = getLanguage(langs, filePath);
    var codeText, docsText, hasCode, i, isText, lang, line, lines, match, maybeCode, save, sections, _i, _j, _len, _len1;
    sections = [];
    hasCode = docsText = codeText = '';
    save = function() {
        sections.push({
            docsText: docsText,
            codeText: codeText
        });
        return hasCode = docsText = codeText = '';
    };
    for (_j = 0, _len1 = lines.length; _j < _len1; _j++) {
        line = lines[_j];
        if (line.match(lang.commentMatcher) && !line.match(lang.commentFilter)) {
            if (hasCode) {
                save();
            }
            docsText += (line = line.replace(lang.commentMatcher, '')) + '\n';
            if (/^(---+|===+)$/.test(line)) {
                save();
            }
        } else {
            hasCode = true;
            codeText += line + '\n';
        }
    }
    save();
    return sections;
};