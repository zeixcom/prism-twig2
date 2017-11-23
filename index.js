Prism.languages.twig2 = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: /<!DOCTYPE[\s\S]+?>/i,
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /(<[a-zA-Z]+\s[\w="-{}\s\v]*?>|<\/.*?>)/,
    inside: {
      'attr-name': {
        pattern: /[\w-_]*?=/,
        inside: {
          punctuation: /=/,
        },
      },
      'attr-value': {
        pattern: /('|").*?('|")/,
        inside: {
          punctuation: /("|')/,
          twigVariable: {
            pattern: /{{.*?}}/,
            inside: {
              twigPunctuation: /[^\w\s]+/,
            },
          },
        },
      },
    },
  },
  twigVariable: {
    pattern: /{{.*?}}/,
    inside: {
      twigPunctuation: /[^\w\s]+/,
    },
  },
  twigFunction: {
    pattern: /{%.*%}/,
    inside: {
      twigKeywords: /in|with|only|as|is|and|\sor|not|b-and|b-or|b-xor|starts|ends|matches/,
      twigTagName: {
        pattern: /({%\s*)\w+/,
        lookbehind: true,
      },
      twigPunctuation: /[^\w\s]+/,
    },
  },
};