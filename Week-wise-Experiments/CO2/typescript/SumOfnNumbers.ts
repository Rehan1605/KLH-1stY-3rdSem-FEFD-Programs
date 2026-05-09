function SumOfnNaturalNumbers(num: number): number{
    let sum: number = 0;
    while(num>0){
        sum += num;
        num--;
    }
    return sum
}
console.log(SumOfnNaturalNumbers(10));