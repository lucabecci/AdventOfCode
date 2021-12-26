class Solution {
    static solve(data) 
    {
        let depth = 0;
        let horizontal = 0;
        let aim = 0;
        for(let k = 0; k < data.length; k++)
        {
            if(data[k]){
                let n = Number(data[k].split(" ")[1])
                if(data[k].startsWith("forward")){
                    horizontal += n;
                    depth += aim*n;
                }else if(data[k].startsWith("up")){
                    aim -= n;
                }else if(data[k].startsWith("down")){
                    aim += n;
                }
            }
        }
        console.log(aim)
        console.log(horizontal)
        console.log(depth)
        console.log("Location:", (horizontal*depth))
    }
}

module.exports = Solution;
