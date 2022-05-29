let str = "baab";
let stack = [];

for(let i=0;i<str.length;i++){
    if(stack.length==0){
        stack.push(str[i])
    }else{
        if(stack[stack.length-1]==str[i]){
            stack.pop()
        }else{
            stack.push(str[i])
        }
    }
}

if(stack.length==0){
    console.log("Empty")
}else{
    console.log(stack.join(""))
}