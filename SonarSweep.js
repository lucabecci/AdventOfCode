class Solution
{
  static solve(data)
  {
    let count = 0;
    for(let i = 0; i < data.length; i++)
    {
      if(i > 0 && data[i] && data[i - 1])
      {
        if(Number(data[i]) > Number(data[i - 1])) 
        {
          count++
        }
      }
    }
    console.log("Total:", count);
  }
}

module.exports = Solution;
