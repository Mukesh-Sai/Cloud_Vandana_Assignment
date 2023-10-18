function reverseString(str){
    str=str.split(" ");
    let result="";
    for(let i=0;i<str.length;i++){
        let temp=str[i].split("").reverse().join("");
        result+=temp+" ";
    }
    return result;
}

const str="This is a sunny day"
console.log(reverseString(str));