let todo=[];
let req=prompt("please enter your request");

while(true)
{
    if (req=="quit"){
        console.log("quiting app");
        break;
    }
    else if(req=="list")
    {
        console.log("----------------");
        for(let i=0; i<=todo.length;i++)
        {
            console.log(i,todo[tasks]);
        }
        console.log("----------------");
    }
    else if (req=="add")
    {
        let task=prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete")
    {
        let idx=prompt("enter the task index");
        todo.splice(idx);
    }
    else{
        console.log("invalid request");
    }
    req=prompt("please enter your request");
        
}