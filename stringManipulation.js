// You have a list of employees, each with their name, job title, and age, all in a single string. Your task is to split and process each employee's information, check if they are under 40 years old, and if so, append a note indicating they're eligible for a junior position. Display the result in a clear and readable format.
const employeeData = "Alice,Developer,30|Bob,Manager,45|Charlie,Designer,25";
const employeeList = employeeData.split("|");

employeeList.forEach(employee => {
    // TODO: Tokenize the employee data and determine eligibility for a junior position
    const [name, role, age] = employee.split(",");
    const isEligible = parseInt(age) < 40;
    console.log(`Name: ${name} - Role: ${role} - Age: ${age} - ${isEligible ? "Eligible" : "Not Eligible"}`);
        //
    });
    // TODO: Display the result in format `Name: <name> - Role: <role> - Age: <age> - <Eligible/Not Eligible>`