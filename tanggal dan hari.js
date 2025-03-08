const date1 = Date.UTC(2024, 2, 19);  
const date2 = Date.UTC(2024, 2, 21);

const dayDifference = Math.abs((date2 - date1) / 86400000); // 86400000 = 1000 * 60 * 60 * 24

console.log(`Output: ${dayDifference}`);

