# Extract text from the image
This API will extract the text(PAN Number) from image(PAN card)

## Installation instruction

Install the following open source application

``sudo apt-get install tesseract-ocr-eng``


## Bug Fixation

NodeJs 10 unlink function will have the callback issue.
 /var/www/nodejs/services/extract-text-image/node_modules/node-tesseract/lib/tesseract.js:99:14
 Update the following file.

 ```
 fs.unlink(files[0]);
```
Replace with 
 ```
 fs.unlink(files[0], (err) => {
            // if (err) throw err;
            // console.log('successfully deleted');
          });
```