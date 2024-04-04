// Helper function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  // Example usage of helper functions
  console.log(isEven(4)); // Output: true
  console.log(isOdd(5)); // Output: true
  console.log(factorial(5)); // Output: 120