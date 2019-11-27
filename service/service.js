
module.exports = {
  getIdx: (str) => {
    let flag = [];
    str.split('').forEach(char => {
      if ((char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) && (char.charCodeAt(0) < 95  || char.charCodeAt(0) > 122)) {
        flag.push(char)
      }
    })
    if(flag.length !== 0) {
      return {message: "Only alphabetical characters are accepted, no numbers or signals. Try again!"};
    }
    const permArr = permutations(str);
    const sortArr = permArr.sort((a, b) => {
      return a.localeCompare(b, "en", { sensitivity: 'base' });
    });
    let clearArr = []; 
    sortArr.forEach(arr => {
      if(!clearArr.includes(arr)) clearArr.push(arr);
      })
    return clearArr.indexOf(str);
  }
}

function permutations(str) {
  var permArr = [];

  if (str.length === 1) {
    permArr.push(str);
    return permArr;
  }

  for (let i = 0; i < str.length; i += 1) {
    
    let first = str[i];
    let left = str.slice(0, i) + str.slice(i + 1);
    let middlePerm = permutations(left);
    for (let z = 0; z < middlePerm.length; z += 1) {
      permArr.push(first + middlePerm[z]);
    }
  }
  return permArr;
}

