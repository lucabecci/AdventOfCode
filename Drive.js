class Solution {
    static solve(data) 
    {
        let depth = 0;
        let horizontal = 0;
        for(let k = 0; k < data.length; k++)
        {
            if(data[k]){
                if(data[k].startsWith("forward")){
                    horizontal += Number(data[k].split(" ")[1])
                }else if(data[k].startsWith("up")){
                    depth -= Number(data[k].split(" ")[1])
                }else if(data[k].startsWith("down")){
                    depth += Number(data[k].split(" ")[1])
                }
            }
        }
        console.log("Location:", (depth * horizontal))
    }
}

module.exports = Solution;
