import {URL} from '../js_folder/metaData.js'

const nameInput=document.getElementById("name")
const addbtn=document.getElementById("addbtn")
const list=document.getElementById("list")

//creation 

addbtn.onclick=function(){
    const name=nameInput.value 
    fetch(`${URL}.json`,{method:"POST",
        body:JSON.stringify({name})
         }).then(()=>{nameInput.value=""
          loadData()
    })
}

function loadData(){
    fetch(`${URL}.json`)
    .then(Response=>Response.json())
    .then(data=>{
        list.innerHTML=""
        for(let key in data){
            list.innerHTML+=`<li>${data[key].name}</li>`
        }
    })
}

loadData()