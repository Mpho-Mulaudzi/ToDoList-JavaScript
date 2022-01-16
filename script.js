//select all html elements to be manipulated
const ul = document.querySelector("ul");
const input= document.querySelector("input");
const button= document.querySelector("button");


function AddItems()
  {
      //empty the input text
      let myitems= input.value;
      input.value='';     
    
    //create new html tags 
     const li = document.createElement("li");
     const span= document.createElement("span");
     const deleteBtn= document.createElement("button");
    
     
     //append childNodes to the parent node
     if(input.value === '')
     {
        li.appendChild(span);
        span.textContent= myitems;
        li.appendChild(deleteBtn);
        deleteBtn.textContent="Done";
     
       
        ul.appendChild(li);
        
     }
        
     //delete button
     deleteBtn.addEventListener("click", e=>{
        ul.removeChild(li);
    
    })
    //keeps the focus of the mouse on the textbox
     input.focus();
  }

  //adds functionality to the button
button.addEventListener("click", e=>{
    AddItems();
})

  
