// This is a script to search for a string within a string.
// by Sarah Dawson

var text = "Sarah is a really common \
name.  In fact almost every girl in \
Somerville is named Sarah. Sarah, \
Sarah, Sarah!";
var myName = "Sarah";
var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] === myName[0] && text[i + myName.length - 1] === myName[4] ) {
        for (var j = i; j < i + myName.length; j++) {
            hits.push(text[j]);    
        }
    }    
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);   
}