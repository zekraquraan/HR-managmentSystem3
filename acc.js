
let { log } = console;


let data = localStorage.getItem('Employee');
employeesData = JSON.parse(data);

log(employeesData);


function findNumberOfEmployee(arrOfEmployee) {
    let adminstration = 0;
    let development = 0;
    let finance = 0;
    let marketing = 0;

    for (let i = 0; i < arrOfEmployee.length; i++) {
        if (arrOfEmployee[i].department == 'Administration') {
            adminstration += 1;
        } else if (arrOfEmployee[i].department == "Development") {
            development++;
        } else if (arrOfEmployee[i].department == "Finance") {
            finance++;
        } else if (arrOfEmployee[i].department == "Marketing") {
            marketing++;
        }
    }

    return {
        'adminstration': adminstration,
        'development': development,
        'finance': finance,
        'marketing': marketing,
    }
}

function totalEmployees(arr) {
    let total = findNumberOfEmployee(arr).adminstration + findNumberOfEmployee(arr).development + findNumberOfEmployee(arr).marketing + findNumberOfEmployee(arr).finance
    return total;
}



let numberEmp = totalEmployees(employeesData);
let AllSalary = totalSalary(employeesData);
let avgSalary = totalAvgSalary(employeesData);


function tableRow(obj) {
    let body = document.getElementById("body");

    let row = document.createElement('tr');
    let numberCell = document.createElement('td');
    numberCell.innerText = obj.adminstration
    let salaryCell = document.createElement('td');
    salaryCell.innerText=obj.adminstrationSal;
    let averageCell = document.createElement('td');
    averageCell.innerText=obj.adminstrationAvgSal;
    
    row.appendChild(numberCell);
    row.appendChild(salaryCell);
    row.appendChild(averageCell);

    body.appendChild(row);
}



// let admRow = document.getElementById('adm') ;
// let numberCell = document.createElement('td');
// numberCell.textContent = findNumberOfEmployee(employeesData).adminstration;
// admRow.appendChild(numberCell);


function addCellToRow(rowId,arr,department) {
    let row = document.getElementById(rowId);
    let cell = document.createElement('td');
    cell.textContent = findNumberOfEmployee(arr)[department];
    row.appendChild(cell);
}

addCellToRow('dev',employeesData,'development');
addCellToRow('adm',employeesData,'adminstration');
addCellToRow('mar',employeesData,'marketing');
addCellToRow('fin',employeesData,'finance');


function totalSalaryForEachDept(arrOfEmployee) {
    let adminstrationSal = 0;
    let developmentSal = 0;
    let financeSal = 0;
    let marketingSal = 0;

    for (let i = 0; i < arrOfEmployee.length; i++) {
        if (arrOfEmployee[i].department == 'Administration') {
            let adSal=arrOfEmployee[i].salary;
            adminstrationSal += adSal;
        } else if (arrOfEmployee[i].department == "Development") {
                   let devSal=arrOfEmployee[i].salary;
            developmentSal += devSal;
        } else if (arrOfEmployee[i].department == "Finance") {
    let fiSal=arrOfEmployee[i].salary;
            financeSal += fiSal;
        } else if (arrOfEmployee[i].department == "Marketing") {
    let maSal=arrOfEmployee[i].salary;
            marketingSal += maSal;
        }
    }

    return {
        'adminstration': adminstrationSal,
        'development': developmentSal,
        'finance': financeSal,
        'marketing': marketingSal,
    }
}


function totalSalary(arr) {
    let totalSalary = totalSalaryForEachDept(arr).adminstrationSal + totalSalaryForEachDept(arr).developmentSal + totalSalaryForEachDept(arr).marketingSal + totalSalaryForEachDept(arr).financeSal;
    return totalSalary;
}

function addCell2ToRow(rowId,arr,department) {
    let row = document.getElementById(rowId);
    let cell = document.createElement('td');
    cell.textContent = totalSalaryForEachDept(arr)[department];
    row.appendChild(cell);
}

addCell2ToRow('dev',employeesData,'development');
addCell2ToRow('adm',employeesData,'adminstration');
addCell2ToRow('mar',employeesData,'marketing');
addCell2ToRow('fin',employeesData,'finance');





function avgSalaryForEachDept(arrOfEmployee) {
    let adminstrationAvgSal = 0;
    let developmentAvgSal = 0;
    let financeAvgSal = 0;
    let marketingAvgSal = 0;

    for (let i = 0; i < arrOfEmployee.length; i++) {
        if (arrOfEmployee[i].department == 'Administration') {
            let adAvgSal=arrOfEmployee[i].salary;
            adminstrationAvgSal=adAvgSal/arrOfEmployee[i].adminstration;
        } else if (arrOfEmployee[i].department == "Development") {
            let devAvgSal=arrOfEmployee[i].salary/arrOfEmployee[i].development;
            developmentAvgSal= devAvgSal;
        } else if (arrOfEmployee[i].department == "Finance") {
            let fiAvgSal=arrOfEmployee[i].salary/arrOfEmployee[i].finance;
            financeAvgSal= fiAvgSal;
        } else if (arrOfEmployee[i].department == "Marketing") {
        let maAvgSal=arrOfEmployee[i].salary/arrOfEmployee[i].marketing;
        marketingAvgSal= maAvgSal;
        }
    }

    return {
        'adminstration': adminstrationAvgSal,
        'development': developmentAvgSal,
        'finance': financeAvgSal,
        'marketing': marketingAvgSal,
    }
}


function totalAvgSalary(arr) {
    let totalSalaryAvg = avgSalaryForEachDept(arr).adminstration+ avgSalaryForEachDept(arr).developmentAvgSal + avgSalaryForEachDept(arr).marketingAvgSal + avgSalaryForEachDept(arr).fiAvgSal;
    return totalSalaryAvg;
}

function addCell4ToRow(rowId,arr,department) {
    let row = document.getElementById(rowId);
    let cell = document.createElement('td');
    cell.textContent = avgSalaryForEachDept(arr)[department];
    row.appendChild(cell);
}

addCell4ToRow('dev',employeesData,'development');
addCell4ToRow('adm',employeesData,'adminstration');
addCell4ToRow('mar',employeesData,'marketing');
addCell4ToRow('fin',employeesData,'finance');

function addRow() {
    let row = document.getElementById('total');
    let cell = document.createElement('td');
    cell.textContent = numberEmp;
    row.appendChild(cell);

    let cell2 = document.createElement('td');
    cell2.textContent = AllSalary;
    row.appendChild(cell2);

    let cell3 = document.createElement('td');
    cell3.textContent = AllSalary;
    row.appendChild(cell3);
}
addRow()
