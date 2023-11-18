const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Specify the main public folder
const publicFolder = 'public';

// Create the public folder if it doesn't exist
if (!fs.existsSync(publicFolder)) {
    fs.mkdirSync(publicFolder);
}

const templatesFolder = path.join(publicFolder, 'templates');

// Create the templates folder if it doesn't exist
if (!fs.existsSync(templatesFolder)) {
    fs.mkdirSync(templatesFolder);
}

const userFolder = path.join(publicFolder, 'user');

// Create the user folder if it doesn't exist
if (!fs.existsSync(userFolder)) {
    fs.mkdirSync(userFolder);
}

for (let x = 1; x <= 5; x++) {
    const templatePath = path.join(templatesFolder, 'marketing.ejs');
    const outputPath = path.join(userFolder, `user${x}.html`); // Use path.join to create the full path
    const data = {
        pageTitle: `User ${x}`,
        title: 'Welcome to my site!',
        content: `I am User ${x}.`,
    };

    ejs.renderFile(templatePath, data, (err, html) => {
        if (err) throw err;
        fs.writeFileSync(outputPath, html);
        console.log('HTML generated successfully for', outputPath);
    });
}
