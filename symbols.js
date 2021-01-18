// Metacharacter symbols

// Custom Function for result handling
// Regular expression test takes in re, and string

let re;

// Literal Characters and expression literal
re = /hello/;
re = /hello/i;

// first will not match, second one will match 'hello'
// the i makes it case insensitive

// Metacharacter Symbols
re = /^h/i;      // ^ = Must start with
re = /d$/i;      // $ = Must end with
re = /^hello$/i; // ^$ = Must begin and with ex: ('hello')
re = /h.llo/i;   // Matches any ONE character
re = /h*llo/i;   // Matches any character 0 or more times 

re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

const str = 'Hello World';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);