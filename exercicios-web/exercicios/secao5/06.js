const jurosSimples = (capital, taxa, tempo) => capital + (capital * taxa * tempo)
const jurosComposto = (capital, taxa, tempo) => capital * Math.pow(1 + taxa, tempo)

console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosComposto(100, 10 / 100, 2));
