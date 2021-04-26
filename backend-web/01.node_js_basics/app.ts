let courseName:string = 'Backend Web development'
console.log(courseName)

let printNumber =(start : number, end:number):void=>{
    let temp:string=''
    if(start<end){
        for(let i:number=start; i<=end; i++){
            temp+=`${i} `
        }
        console.log(temp)
    }
    else{
        console.log('Invalid numbers')
    }
}
printNumber(5,20)