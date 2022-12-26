let count=0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

function increment(){
    console.log("clicked")
    count+=1
    // change the count-el in the HTML to reflect the new count
    countEl.innerText=count
    console.log(count)
}

function save(){
    let myS= count + " - "
    saveEl.textContent+=myS
    countEl.innerHTML=0
    count=0
    
    console.log(count)
}
