function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // console.log(str.slice(str.length-target.length));
    return (target == str.slice(str.length-target.length));
  }

  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Connor", "n"));
  console.log(confirmEnding("Congratulation", "on"));
  console.log(confirmEnding("BastHe has to give me a new name", "name"));
