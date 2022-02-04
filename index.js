let prepareTea = (_addTeaLeaf) => {
  console.log('adding water....');
  console.log(`water is boiled now, you can add tealeaf ...`);
  setTimeout(() => {
    console.log(`water is boiled now, you can add tealeaf ...`);
    // add milk now
    _addTeaLeaf(addMilk);
  }, 5000);
};

let addTeaLeaf = (_addMilk) => {
  console.log('adding tea leaves....');
  _addMilk(addMilk);
};

let addMilk = () => {
  console.log('adding milk....');
};

prepareTea(addTeaLeaf);
