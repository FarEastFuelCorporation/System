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

const userFolder = path.join(publicFolder, 'users');

// Create the user folder if it doesn't exist
if (!fs.existsSync(userFolder)) {
    fs.mkdirSync(userFolder);
}

// Use path.join to create the full path for the EJS template
const marketingTemplatePath = path.join(templatesFolder, 'page.ejs');

// Data to pass to the EJS template
const data = {
    user: 'marketing',
};

// Pass data to the ejs.renderFile function
ejs.renderFile(marketingTemplatePath, data, (err, html) => {
    if (err) throw err;
    const marketingOutputPath = path.join(userFolder, 'marketing.html');
    fs.writeFileSync(marketingOutputPath, html);
    console.log('HTML generated successfully for', marketingOutputPath);
});