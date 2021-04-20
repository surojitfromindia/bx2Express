let j = [
  { name: "A", v: { p: 2, z: 3 } },
  { name: "B", v: { p: 2, z: 3 } },
];

let ag = j.reduce((a, b) => a + b.v.z, 0);
console.log(ag);
