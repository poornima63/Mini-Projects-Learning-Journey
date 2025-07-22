 const addbtn = document.querySelector(".addbtn");
    const listContainer = document.querySelector(".list-container");
    

    addbtn.addEventListener("click", () => {
      const taskval = document.querySelector(".taskname");
      let taskname = taskval.value.trim();

      if (taskname === "") return;

      const li = document.createElement("li");

      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      let deletebtn = document.createElement("button")
      deletebtn.className = "delete-btn"
      deletebtn.textContent = "X"
      deletebtn.addEventListener('click',(e)=>{
     const   li = e.target.parentElement
        li.remove()
      })
     
      const span = document.createElement("span");
      span.textContent = taskname;
      span.style.marginLeft = "8px";

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          span.style.textDecoration = "line-through";
          span.style.color = "gray";
          checkbox.disabled=true;
        } else {
          span.style.textDecoration = "none";
          span.style.color = "black";
        }
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deletebtn)

      listContainer.appendChild(li);

      taskval.value = "";
    });