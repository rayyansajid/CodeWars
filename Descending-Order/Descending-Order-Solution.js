function descendingOrder(n){
    //...
    if (n < 10) return n;
    let num = n;
    var Arr = [];
    while(num>0){
      var remainder = num % 10;
      Arr.push(remainder);
      num = Math.floor(num/10);
    }  
    Arr.sort((a,b)=> b - a);
    var newNum = parseInt(Arr.join(''),10)
    return newNum;
  }

export default descendingOrder;