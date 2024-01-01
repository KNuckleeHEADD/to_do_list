const ipt = document.querySelector('.input_box');
const list = document.querySelector('.task_container');

function addTask()
{
    console.log(ipt.value);
    if(ipt.value === '')
    {
        alert("Kuch toh task lo bhai!!");
    }
    else
    {
        let temp = document.createElement("li");
        temp.innerText = ipt.value;
        list.appendChild(temp);
        let tem = document.createElement("span");
        tem.innerHTML = '<img src="delete.png" alt="Delete Image" class = "delete_icon">';
        temp.appendChild(tem);
    }
    ipt.value = '';
    saveData();
}

list.addEventListener("click" , (value) => {
    console.log(value.target.parentElement);
    if(value.target.tagName === "LI")
    {
        value.target.classList.toggle("checked");
        saveData();
    }
    else if(value.target.tagName === "IMG")
    {
        let te = value.target.parentElement;
        te.parentElement.remove();
        saveData();
    }
} , false)


function saveData()
{
    localStorage.setItem("data" , list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();