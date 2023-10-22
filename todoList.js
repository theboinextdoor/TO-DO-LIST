const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

const addtask = ()=>{
    if(inputBox.value === ''){
        alert("You must write Something!")
    }else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);


        //for cross after the text.
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);

    }
    inputBox.value= '';
    saveData();
}

document.getElementById("btn").addEventListener("click", addtask);


listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false)


// ************************MOST IMPORTANT PART************************
// saving the dtaa to the local storage so then when next time you refresh the page the data will still be there

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTaskList(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTaskList();