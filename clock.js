let fun=()=>
{
    let b=document.getElementById("a")
    b.innerHTML=new Date().toLocaleTimeString()

}
setInterval(fun,1000)
