const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


let comand = prompt('Enter a Command');
  if (comand === 'print'){
    for (i = 0; i < employeeList.length; i++){
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }

  if (comand === 'verify'){
    let message = 'no';
    const verifyInfo = prompt('user name');
    for (i = 0; i <employeeList.length; i++){
      if (verifyInfo === employeeList[i].name) {
        message = 'yes';
      }
    }
    render(message);
  }

  if (comand === 'lookup'){
    const verifyInfo = prompt('user name');
    for (i = 0; i < employeeList.length; i++){
      if (verifyInfo.toLowerCase() === employeeList[i].name.toLowerCase()) {
        
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
      
    }
    
  }

  if (comand === 'contains'){
    const verifyInfo = prompt('string');
    for (i = 0; i <employeeList.length; i++){
      if (employeeList[i].name.toLowerCase().includes(verifyInfo)) {
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
    }
  }

  if (comand === 'update') {
    let userName = prompt('Who are you looking for?');
    let update = prompt('Which field would you like to update?');
    let newInfo = prompt('What would you like to change it to?');
for (i = 0; i <employeeList.length; i++) {
  if (employeeList[i].name.toLowerCase().includes(userName && update)){
  employeeList[i] = newInfo;
  }
}
  }

  if (comand === 'add'){
    let newName = prompt('What is your Name?');
    let newOffice = prompt('What is youf office number?');
    let newTele = prompt('What is your telephone number?');
    const newEmployee = {
      name: newemployeeName,
      officeNum: newEmployeeOffice,
      phoneNum: newEmployeePhone
    }
  employeeList.push(newEmployee);
    }
    for (i = 0; i <employeeList.length; i++){
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }



