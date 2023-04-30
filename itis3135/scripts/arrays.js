  const person=[];
  const salaries=[];

  document.getElementById('addButton').addEventListener('click',addSalary);
  document.getElementById('displayButton').addEventListener('click',displaySalary);
  
  function addSalary(){
    let name=document.getElementById('nameInput').value;
    let salary=document.getElementById('salaryInput').value;
    if(name==='' || salary=== '' || isNaN(salary)){
        alert('Please enter valid name and salary.');
        return;
    }
    person.push(name);
    salaries.push(parseInt(salary));
    document.getElementById('nameInput').value='';
    document.getElementById('salaryInput').value='';
    document.getElementById('nameInput').focus();
  }
  function displaySalary(){
        let select = document.getElementById('employeeSelect');
        select.innerHTML = '';
        for (let i = 0; i < person.length; i++) {
          let option = document.createElement('option');
          option.value = person[i];
          option.textContent = person[i];
          select.appendChild(option);
        }
        let table = document.getElementById('results_table');
        table.innerHTML = '<tr><th>Employee Name</th><th>Salary</th></tr>';
        for (let i = 0; i < person.length; i++) {
          let row = table.insertRow();
          let nameCell = row.insertCell();
          let salaryCell = row.insertCell();
          nameCell.textContent = person[i];
          salaryCell.textContent = salaries[i];
        }
      }
  
  function displayResults(){
    let total = 0;
    let highest = 0;
    for (let i = 0; i < salaries.length; i++) {
      total += salaries[i];
      if (salaries[i] > highest) {
        highest = salaries[i];
      }
    }
    let average = total / salaries.length;
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Results</h2><p>Average Salary: ' + average.toFixed(2) + '</p><p>Highest Salary: ' + highest + '</p>';
  }
  
  