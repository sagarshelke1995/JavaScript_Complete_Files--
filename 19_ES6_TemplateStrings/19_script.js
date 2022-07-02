let employee = {
    empId : 100,
    name : 'John',
    age : 40,
    designation : 'Manager',
    company : 'Infosys'
};

// String Concatenation
let stringConcat = "<tr> " +
                     "<td>"+ employee.empId  +"</td>" +
                     "<td>"+ employee.name  +"</td>" +
                     "<td>"+ employee.age  +"</td>" +
                     "<td>"+ employee.designation  +"</td>" +
                     "<td>"+ employee.company  + "</td>" +
                    "</tr>";
// document.querySelector('#table-body').innerHTML = stringConcat;

// Template String
let templateString = `<tr>
                        <td>${employee.empId}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                        <td>${employee.company}</td>
                      </tr>`;
document.querySelector('#table-body').innerHTML = templateString;