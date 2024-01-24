let draggables = document.querySelectorAll('.draggable');
let containers = document.querySelectorAll('.container');
draggables.forEach(function(draggable){
  draggable.addEventListener('dragstart',function(){
    draggable.classList.add('dragging');
  });
  draggable.addEventListener('dragend',function(){
    draggable.classList.remove('dragging');
  });
});
containers.forEach(function(container){
  container.addEventListener('dragover',function(e){
    e.preventDefault();
    let dragging = document.querySelector('.dragging');
    container.appendChild(dragging);
  });
});
function getDragAfterElement( container, y ){
  
};