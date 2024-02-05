let inputbox=document.getElementById("input-box")
let listcontainer=document.getElementById("list-container")


function addtask(){
    if(inputbox.value===''){
        alert('Please enter an item!')
        save()
    }
    else{
        let li= document.createElement("li")
        li.innerHTML = inputbox.value
        listcontainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    inputbox.value=" "
    save()
}
listcontainer.addEventListener('click',function(event){
    if (event.target.tagName=="LI") {
        event.target.classList.toggle("checked")
        save()
    }
    else if(event.target.tagName ==="SPAN"){
        event.target.parentElement.remove()
        save()
    }

},false)


function save(){
    localStorage.setItem("data",listcontainer.innerHTML)

}
function show(){
    listcontainer.innerHTML=localStorage.getItem("data")

    
}
show()