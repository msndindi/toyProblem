function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates, NHIF deductions, and NSSF deductions
    const taxRate = 0.3;
    const nhifDeductions = 0.02;
    const nssfDeductions = 0.12;
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate payee (tax)
    const payee = grossSalary * taxRate;
  
    // Calculate NHIF deductions
    const nhif = grossSalary * nhifDeductions;
  
    // Calculate NSSF deductions
    const nssf = grossSalary * nssfDeductions;
  
    // Calculate net salary
    const netSalary = grossSalary - payee - nhif - nssf;
  
    // Create an object to store the calculated values
    const salaryDetails = {
      grossSalary: grossSalary,
      payee: payee,
      nhif: nhif,
      nssf: nssf,
      netSalary: netSalary
    };
  
    return salaryDetails;
  }
  
  // Prompt user for input
  const basicSalary = parseFloat(prompt("Enter basic salary:"));
  const benefits = parseFloat(prompt("Enter benefits:"));
  
  // Check if input is a valid number
  if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log("Invalid input. Please enter valid numbers.");
  } else {
    // Call the function to calculate net salary
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
  
    // Print the calculated values
    console.log("Gross Salary: KES " + salaryDetails.grossSalary.toFixed(2));
    console.log("Payee (Tax): KES " + salaryDetails.payee.toFixed(2));
    console.log("NHIF Deductions: KES " + salaryDetails.nhif.toFixed(2));
    console.log("NSSF Deductions: KES " + salaryDetails.nssf.toFixed(2));
    console.log("Net Salary: KES " + salaryDetails.netSalary.toFixed(2));
  }
  