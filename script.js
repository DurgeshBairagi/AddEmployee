let employees = [];
let idCounter = 1;

document
  .getElementById("employeeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim();

    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";
    const status1 = document.getElementById("status");

    if (!name || !profession || !age) {
      const errorMessage = document.createElement("p");
      errorMessage.className = "error";
      errorMessage.textContent = "All fields are required!";
      messagesDiv.appendChild(errorMessage);
      status1.style.display = "block";
    } else {
      status1.style.display = "none";
      const employee = {
        id: idCounter++,
        name: name,
        profession: profession,
        age: parseInt(age),
      };

      employees.push(employee);

      const successMessage = document.createElement("p");
      successMessage.className = "success";
      successMessage.textContent = "Success : Employee Added!";
      messagesDiv.appendChild(successMessage);

      document.getElementById("employeeForm").reset();

      renderEmployees();
    }
  });

function renderEmployees() {
  const employeeListDiv = document.getElementById("employeeList");
  employeeListDiv.innerHTML = "";

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee-item";
    employeeDiv.innerHTML = `
            <p>${employee.id}.              Name :  ${employee.name}             Profession :  ${employee.profession}       Age :  ${employee.age}</p>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
    employeeListDiv.appendChild(employeeDiv);
  });
}
function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  renderEmployees();
}
