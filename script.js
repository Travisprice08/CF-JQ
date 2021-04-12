  function newItem () {
  // Adding a new item to a list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);



  if (inputValue === '') {
    alert('You must write something!')
  } else {
    $('#list').append(li);
    //list.appendChild(li);
  }

  // Crossing out an item on the list
  function crossOut() {
  		li.addClass('strike');
  	}

    li.on('dblclick', function crossOut() {
  		li.addClass('strike');
  	});

  // Adding delete button "X"

  let deleteButton = $('<deleteButton></deleteButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    deleteButton.on('click', deleteListItem);
    function deleteListItem(){
      li.addClass('delete')
    }
    // Makes list sortable
    $('#list').sortable();
  }
