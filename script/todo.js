var checked = function(){
      let parent = this.parentNode;
      parent.classList.toggle('checked');
    }
    
    var deleteItem = function(){
      let todo = this.parentNode;
      todo.remove();
    }
    var createTodo = function(todo) {
      // copy your createTodo() code here
      const li = document.createElement('li');
    
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.onclick = checked;
      
      const label = document.createElement('label');
      label.innerHTML = todo;
      
      const button = document.createElement('button');
      button.setAttribute('class', 'delete');
      button.innerHTML = 'Delete';
      button.onclick = deleteItem;
    
      li.appendChild(input);
      li.appendChild(label);
      li.appendChild(button);
      return li;
    }
    
    var addButton = document.getElementById('add');
    
    addButton.onclick = function() {
      // store the button's parent element (.addTodo <div>) in a variable
      var parent = this.parentNode;
      // store the input, which is the *first* child element of the .addTodo <div>
      var input = parent.children[0];
          // get the input's value
          // if input isn't empty, create a new element and add it to the unordered list
      if(input.value === ""){        
        alert("Enter a valid todo item!");
      }
      else
      document.getElementById('todoList').appendChild(createTodo(input.value));
      input.value = "";
    }