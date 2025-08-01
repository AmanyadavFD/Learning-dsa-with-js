const studentNames = [
  "Aman",
  "Priya",
  "Rahul",
  "Sneha",
  "Vikram",
  "Anjali",
  "Rohit",
  "Neha",
  "Karan",
  "Pooja",
];

for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames[i]);
}

const obj = {
  math: 85,
  science: 90,
  english: 78,
  history: 88,
};

const total = Object.values(obj).reduce((a, b) => a + b, 0);
console.log("Total marks:", total);
