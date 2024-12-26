//your JS code here. If required.
// Simulating a JSON file with employee data
const employeeData = [
  { name: "Alice", age: 30, department: "HR" },
  { name: "Bob", age: 25, department: "Engineering" },
  { name: "Charlie", age: 35, department: "Marketing" },
  { name: "David", age: 28, department: "Finance" },
  { name: "Eve", age: 22, department: "Engineering" },
];

// Function to simulate fetching data asynchronously
function fetchEmployees() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employeeData);
    }, 1000); // Simulate network delay
  });
}

// Main function to fetch, sort, and log employees
async function displaySortedEmployees() {
  try {
    const employees = await fetchEmployees(); // Fetch the data
    const sortedEmployees = employees.sort((a, b) => a.age - b.age); // Sort by age
    console.log("Sorted Employee List:", sortedEmployees);
  } catch (error) {
    console.error("Error fetching employee data:", error);
  }
}

// Call the function
displaySortedEmployees();
