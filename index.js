
// function countProperties(obj) {
//   return Object.keys(obj).length;
// }

// const user = { name: "Алексей", age: 30, city: "Москва", job: "Разработчик" };

// console.log("Количество свойств объекта:", countProperties(user));






// function getMaxSalary(salaries) {
//   if (Object.keys(salaries).length === 0) return null;
  
//   let maxName = '';
//   let maxSalary = -Infinity;
  
//   for (const [name, salary] of Object.entries(salaries)) {
//       if (salary > maxSalary) {
//           maxSalary = salary;
//           maxName = name;
//       }
//   }
  
//   return maxName;
// }

// const salaries = {
//   "Иван": 120000,
//   "Ольга": 150000,
//   "Дмитрий": 110000,
//   "Елена": 180000
// };

// console.log(Сотрудник с максимальной зарплатой:", getMaxSalary(salaries));







// function averageValues(obj) {
//   const values = Object.values(obj);
//   if (values.length === 0) return 0;
  
//   const sum = values.reduce((total, num) => total + num, 0);
//   return sum / values.length;
// }

// const numbers = {
//   a: 15,
//   b: 25,
//   c: 35,
//   d: 45
// };

// console.log("Среднее арифметическое:", averageValues(numbers));





