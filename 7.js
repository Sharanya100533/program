const fs = require('fs');
const textToAppend = '\nThis is the new text being appended to the file.';


fs.appendFile("./example.txt", textToAppend, (err) => {
    if (err) {
        console.error("Error appending text to the file:", err);
    } else {
        console.log('Text successfully appended to the file!');
       const data=fs.readFileSync("./example.txt","utf8");
       console.log(data);
    }
});
