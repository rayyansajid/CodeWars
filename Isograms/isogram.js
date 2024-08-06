function isIsogram(string) {
    string = string.toLowerCase();
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        for (let j = i + 1; j < string.length; j++) {
            if (char === string[j]) count += 1;
        }
    }
    return count === 0;
}

export default isIsogram;
// Example usage
// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moOse")); // false
