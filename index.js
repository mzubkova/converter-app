// - У нас есть функция, у которой в качестве аргументов строки '*', '2', 's', '2d',
//     реализуйте ее так что бы вернулась строка '2*s*2d'
// - Есть массив['maz', 'zam', 'amz'] нужно определить, состоят ли все эти слова из
// одних и тех же букв, ответ должен быть true или false

const getString = (sym1, sym2, sym3, sym4) => {
  let arr = [];
  arr.push(sym1, sym2, sym3, sym4);
  let star = arr.shift(0);
  return `${sym2}${star}${sym3}${star}${sym4}`;
};

getString("*", "2", "s", "2d");

const isAnagram = (arr) => {
  if (!Array.isArray(arr)) {
    return "Not an array";
  }
  let firstWord = arr[0].split("").sort().join("");

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].split("").sort().join("") !== firstWord) {
      return false;
    }
  }
  return true;
};

isAnagram(["maz", "zam", "amz"]);

module.exports = {
  getString,
  isAnagram,
};
