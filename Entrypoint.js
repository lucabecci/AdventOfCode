const fs = require("fs")
class Entrypoint
{
  static process()
  {
    const exec = process.argv[2]; 
    if(exec)
    {
      let solution = null;
      try{
         solution = require(exec)
      }catch(e){
        console.log("Invalid name file")
        return;
      }
      const data = fs.readFileSync('data.txt', 'utf8')
      const arr = data.replace(new RegExp("\n", "ig"), " ").split(" ")
      solution.solve(arr);
    }
    else
    {
      console.log("Please send a exec file name");
    }
  }
}


(() => {
  Entrypoint.process()
  process.exit(0)  
})()
