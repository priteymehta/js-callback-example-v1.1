let prepareTea = (_addTeaLeaf) => {
  console.log('adding water....');
  setTimeout(() => {
    console.log(`water is boiled now, you can add tealeaf ...`);
    // add tea leaves now
    _addTeaLeaf(addMilk);
  }, 5000);
};

let addTeaLeaf = (_addMilk) => {
  console.log('adding tea leaves....');
  setTimeout(() => {
    console.log(`water is boiled now, you can add tealeaf ...`);
    // add milk now
    _addMilk();
  }, 5000);
};

let addMilk = () => {
  console.log('adding milk....');
};

prepareTea(addTeaLeaf);
