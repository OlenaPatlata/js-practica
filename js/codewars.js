function comp(array1, array2){
  //your code here
    if (array1.length !== array2.length) {
        return false;
    } else {
        const newArray1 = [...array1].map(element => Math.pow(element, 2)).sort((a, b) => a - b);
        const newArray2 = [...array2].sort((a, b) => a - b);
        for (let i = 0; i < array1.length; i += 1){
            if (newArray1[i] !== newArray2[i]) {
                
            }
        }
        return true;
    }
}

const a1 = [121, 144, 19, 161, 19, 144, 19];
const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
comp(a1, a2);