var maxDepth = function(s){
var depth = 0;
var ans = 0;
var strArray = s.split("");

for (let index = 0; index < strArray.length; index++)
{
    const element = strArray[index];
    
    if(element == '(')
    {
        depth++;
        ans = Math.max(ans, depth);
    }
    else if(element == ')')
    {
        depth--;
    }
}
return ans;
} 

console.log('depth',maxDepth("(1+(2*3)+((8)/4))+1"))

