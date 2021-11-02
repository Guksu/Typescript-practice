//인터페이스는 js파일에 포함되지 않는다.
// js에서 인터페이스 내용을 보고 싶으면 class를 사용하면 된다.
interface Human{
    name:string;
    age:number;
    gender:string;
}

const person = {
    name:"min",
    age:28,
    gender:"male"
}

//java와 비슷함

class Human2 {
    public name :string;
    public age : number;
    public gender : string;
    constructor(name:string , age:number, gender:string){
        this.name =name; this.age= age; this.gender=gender;
    }
}

const newPerson = new Human2("guksu",2,"male")

const sayHi = (person:Human):string =>{
   return `Hello ${person.name}, you are ${person.age} old, ${person.gender}`;
}

console.log("인터페이스사용 : "+sayHi(person));
console.log("class 사용 : "+sayHi(newPerson));

export {}