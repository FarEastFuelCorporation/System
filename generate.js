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


// marketing user
// Use path.join to create the full path for the EJS template
const marketingTemplatePath = path.join(templatesFolder, 'page.ejs');

// Data to pass to the EJS template
const marketing_data = {
    user: 'marketing',
};

// Pass data to the ejs.renderFile function
ejs.renderFile(marketingTemplatePath, marketing_data, (err, html) => {
    if (err) throw err;
    const marketingOutputPath = path.join(userFolder, 'marketing.html');
    fs.writeFileSync(marketingOutputPath, html);
    console.log('HTML generated successfully for', marketingOutputPath);
});


// dispatching user
const logisticsTemplatePath = path.join(templatesFolder, 'page.ejs');

const logistics_data = {
    user: 'dispatching',
};

// Pass data to the ejs.renderFile function
ejs.renderFile(logisticsTemplatePath, logistics_data, (err, html) => {
    if (err) throw err;
    const logisticsOutputPath = path.join(userFolder, 'dispatching.html');
    fs.writeFileSync(logisticsOutputPath, html);
    console.log('HTML generated successfully for', logisticsOutputPath);
});

// dispatching user
const warehouseTemplatePath = path.join(templatesFolder, 'page.ejs');

const warehouse_data = {
    user: 'warehouse',
};

// Pass data to the ejs.renderFile function
ejs.renderFile(warehouseTemplatePath, warehouse_data, (err, html) => {
    if (err) throw err;
    const warehouseOutputPath = path.join(userFolder, 'warehouse.html');
    fs.writeFileSync(warehouseOutputPath, html);
    console.log('HTML generated successfully for', warehouseOutputPath);
});


// employee user
const employeeTemplatePath = path.join(templatesFolder, 'page.ejs');

const employee_data = {
    user: 'employee',
};

// Pass data to the ejs.renderFile function
ejs.renderFile(employeeTemplatePath, employee_data, (err, html) => {
    if (err) throw err;
    const employeeOutputPath = path.join(userFolder, 'employee.html');
    fs.writeFileSync(employeeOutputPath, html);
    console.log('HTML generated successfully for', employeeOutputPath);
});
