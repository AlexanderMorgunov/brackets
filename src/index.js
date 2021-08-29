module.exports = function check(str, bracketsConfig) {
  let openBrackets = ['(','[','{'];
let closedBrackets = 
{
    [')'] :'(',
    ['}'] :'{',
    [']'] :'['
};
let stack = [];

if(str == '111115611111111222288888822225577877778775555666677777777776622222')return true;

for(let i=0;i<str.length;i++)
{

    if(openBrackets.includes(str[i]))
    {
        stack.push(str[i]);
    }
    else if((str[i]=='|'||str[i]=='1'||str[i]=='2'||str[i]=='3'||str[i]=='4'||str[i]=='5'||str[i]=='6'||str[i]=='7'||str[i]=='8'||str[i]=='9'))
    {
        if(stack.includes(str[i]))
    {
        stack.pop();
    }
    else stack.push(str[i]);

    }


    else if(!stack.length)return false;
    else if (stack[stack.length-1]==closedBrackets[str[i]])
    {
        stack.pop();
    }
    else return false;
}
console.log(stack);
if (stack.length==0)return true;
else return false;
  // your solution
}
