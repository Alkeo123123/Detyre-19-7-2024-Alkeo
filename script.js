const personi = {
  currentBalance: "300"
};

const detyra = ({ currentBalance }, withdraw) => {
  const balance = parseInt(currentBalance);
  if (balance >= withdraw) {
    console.log(`Ti ke para te mjaftueshme per te terhequr ${withdraw}. Balanca e re: ${balance - withdraw}`);
  } else {
    console.log(`Nuk ke para te mjaftueshme per kete transaksion, te duhen ${withdraw - balance} para per te perfunduar transaksionin.`);
  }
};

detyra(personi, 200);
