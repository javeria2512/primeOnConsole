function isPrime(numb) {
    let i;
    for (i = 2; i < numb; i++) {
        if (numb % i === 0) {
            break;
        }
    }
    if (i === numb) {
      return true;
    } else {
       return false;
    }

}
for (let i =2; i <=100; i++){
    if(isPrime (i)){
        console.log(i)
    }
}