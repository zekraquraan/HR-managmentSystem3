/* employee object  constructor   */


const webEmployee = [];

function Employee(id, name, department, level, image, salary) {
  this.id = id;
  this.name = name;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = 0;
  // this.netSalary=this.salary;
  webEmployee.push(this);
}

let Ghazi = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assets/Ghazi.jpg"
);

let Lana = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "./assets/Lana.jpg"
);

let Tamara = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assets/Tamara.jpg"
);

let Safi = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assets/Safi.jpg"
);

let Omar = new Employee(
  1004,
  "Omar Zaid	",
  "Development",
  "Senior",
  "./assets/Omar.jpg"
);

let Rana = new Employee(
  1005,
  "Rana Saleh",
  "Developmen",
  "Junior",
  "./assets/Rana.jpg"
);

let Hadi = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assets/Hadi.jpg"
);

Employee.prototype.netSalary = function () {
  if (this.level == "Senior") {
    let net = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    this.salary = net * (1 - 0.075);
  } else if (this.level == "Mid-Senior") {
    let net = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    this.salary = net * (1 - 0.075);
  } else if (this.level == "Junior") {
    let net = Math.floor(Math.random() * (1000 - 500)) + 500;
    this.salary = net * (1 - 0.075);
  }

  return this.salary;
};

function employeeId() {
  for (let i = 0; i < webEmployee.length; i++) {
    let randomId = Math.floor(Math.random() * 9000 + 1000);
    this.id = randomId;
    return this.id;
  }
}

///////////////////////////////////////////////////////



let container = document.createElement("div");
document.body.appendChild(container);


let h1El = document.createElement("h1");
h1El.textContent = "Employee Cards";

container.appendChild(h1El);
h1El.style.paddingTop = "20px";
h1El.style.color = "rgba(24, 32, 65, 0.5)";

container.style.width = "800px";
container.style.marginLeft = "70px";
container.style.marginTop = "-40px";
container.style.marginBottom = "100PX";
container.style.textAlign = "center";
container.style.display = "inline-block";
container.style.borderRadius = "20px";
container.style.backgroundColor="rgba(50,10,50,0.5";
//Card function
Employee.prototype.render = function () {
  let card = document.createElement("div");

  card.style.backgroundColor = "rgba(65, 11, 46, 0.19)";
  card.style.display = "inline-block";
  card.style.width = "200px";

  card.style.borderColor = "black";
  card.style.margin = "30px";
  card.style.padding = "10px";
  card.style.display = "inline-block";
  card.style.borderRadius = "5px";
  card.style.fontFamily = "";

  let cardimg = document.createElement("img");
  let cardname = document.createElement("p");
  let cardid = document.createElement("p");
  let cardepartment = document.createElement("p");
  let cardlevel = document.createElement("p");
  let cardsalary = document.createElement("p");

  cardimg.src = this.image;
  cardname.textContent = "Name: " + this.name;
  cardid.textContent = "Id:" + employeeId();
  cardepartment.textContent = "Department: " + this.department;
  cardlevel.textContent = "Level: " + this.level;
  cardsalary.textContent = "Salary: " + this.netSalary();

  card.appendChild(cardimg);

  card.appendChild(cardname);
  card.appendChild(cardid);
  card.appendChild(cardepartment);

  card.appendChild(cardlevel);

  card.appendChild(cardsalary);

  container.appendChild(card);
};




let form = document.getElementById("Einformatiom");
// let submit = document.getElementById("submit");


form.addEventListener("submit", clickGet);

function clickGet(event) {
  event.preventDefault();
console.log("jjj")
  let nameFull = (event.target.Ename.value);

  let departmentS = (event.target.Edepartment.value);

  let levelS = (event.target.Elevel.value);

  let imageE = (event.target.Eimage.value);

console.log(employeeId(),nameFull ,departmentS, levelS ,imageE);

 let formData = new Employee( employeeId(),nameFull ,departmentS, levelS ,imageE   );

  
formData.render();
 
}






Ghazi.render();
Safi.render();

Omar.render();
Rana.render();

Hadi.render();
Lana.render();

Tamara.render();

function addNewEmployee(event) {
  event.preventDefault();
  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let imgURL = event.target.imgURL.value;

  let newEmployee = new Employee(fullName, department, level, imgURL);

  let jsonArr = JSON.stringify(all);
  localStorage.setItem('allEmployees', jsonArr);

  
  render();

}
function getEmployees() {
  let jsonArr = localStorage.getItem('allEmployees');
  all = JSON.parse(jsonArr);
}


render();
function saveData(data){
  let stringArr=JSON.stringify(data);
  localStorage.setItem('Employee',stringArr);
  
}

function getData(){
  let retriveArr=localStorage.getItem('Employee');
  let objArr=JSON.parse(retriveArr);
  console.log("after gitting from LS",objArr);
  if( objArr !==null ){
      allEmployee=[];
      for(let i=0;i<objArr.length;i++){
          new Employee(objArr[i].employeeId ,objArr[i].fullName,
           objArr[i].department ,objArr[i].level, objArr[i].imageUrl ,objArr[i].salary)
       }
  }
  
}
getData();  
allEmployeeCaller(allEmployee);
console.log(all);