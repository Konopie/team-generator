const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const fs = require('fs');


const employees = []
const employeesHTML = []

let HTMLTemplate = `
<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>`

  const HTMLEnd = `
  <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by Cody Cooper</h3>
    </footer>
  </body>
  </html>`

const generatePage = () => {
    HTMLTemplate += employeesHTML,
        HTMLTemplate += HTMLEnd,
        // console.log(HTMLTemplate);
        writeFile(HTMLTemplate);
}

// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

const empPrompt= () => {
    const employee = [];
    inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "What is the position of the employee you want to enter?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is there name?"
        }
    ])
    .then(res => {
        employee.push(res);
        res.id = employees.length + 1;
        if (res.position === "Engineer") {
           return inquirer.prompt([
                {
                    type: "input",
                    name: 'GitHub',
                    message: "What is their GitHub username?"
                }
            ])
            
        }
        else if (res.position === "Intern") {
           return inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What school do they go to?"
                }
            ])
        }
        
    })
    .then( res => {
        employee.push(res);

        if (employee[0].position === "Engineer") {
        const engineer = new Engineer(employee[0].name, employee[0].id, employee[1][Object.keys(employee[1])[0]]);
            employees.push(engineer);
    }
        if (employee[0].position === "Manager") {
            const manager = new Manager(employee[0].name, employee[0].id);
                employees.push(manager);
        }
        if (employee[0].position === "Intern") {
            const intern = new Intern(employee[0].name, employee[0].id, employee[1][Object.keys(employee[1])[0]]);
                employees.push(intern);
        }
        
        inquirer.prompt([
            {
                type: "confirm",
                name: "confirm",
                message: "Would you like to add another employee?",
                default: false
            }
        ])
        .then( res => {
        if (res.confirm) {
            return empPrompt();
        }
        else {
            for (let i=0; i < employees.length; i++ ) {
                let position = employees[i].getRole()
                const name = [Object.values(employees[i])[0]]
                const id = [Object.values(employees[i])[1]]
                const email = [Object.values(employees[i])[2]]
                const extra = [Object.keys(employees[i])[3]]
                let extraValue = [Object.values(employees[i])[3]]

                if (position === "Engineer") {
                    extraValue = `<a href="https://github.com/${extraValue}">${extraValue}<a>`
                }
                employeesHTML.push(`
                <div class="card">
                <p class="card-title">${position}</p>
                <p>Name: ${name}</p>
                <p>ID: ${id}</p>
                <p>email: <a href="mailto:${email}">${email}</a></p>
                <p>${extra}: ${extraValue}</p>
                </div>
                `)
            }
        }
        generatePage(employeesHTML)
    
     })
    
    })
}
   

empPrompt()
