const ukraine = { 
    tax: 0.195,
    middleSalary: 1789, 
    vacancies: 11476 
  };
  const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
  };
  const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
  };
  
  function getMyTaxes(sallary){
    let myTaxes = this.tax * sallary;
    console.log(myTaxes);  
  }
  getMyTaxes.call(ukraine, 2000)
  
  function getMidleTaxes(){
    return this.tax * this.middleSalary;
  }
  
  console.log(getMidleTaxes.call(latvia))
  
  function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies;
  }
  console.log(getTotalTaxes.call(litva))
  
  
  function getMySalary(contry){
    
    const minSalary = 1500;
    const maxSalary = 2000;
    let mySalary = Math.round(minSalary - 0.5 + Math.random() * (maxSalary - minSalary + 1));
    let myTax = this.tax * mySalary;
    let myProfit = mySalary - myTax;
    let funcLog = {
      salary: mySalary,
      taxes: myTax,
      profit: myProfit
    };
    console.log(funcLog);
    setTimeout(() => getMySalary(contry), 10*1000);
  
  }
  
  getMySalary.call(ukraine)
  