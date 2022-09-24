const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");

const box2 = document.querySelector('.box-2');

const listOfInputBox1 = document.querySelector(".listOfInputBox1");
const listOfInputBox2 =  document.querySelector(".listOfInputBox2");
const listOfInputBox3 =  document.querySelector(".listOfInputBox3");

const urgent = [];
const notUrgent = [];

// let val = localStorage.getItem('list');
// let list;


input1.addEventListener("keypress", function(e){;
  let li = document.createElement('li');
  li.setAttribute("class", "list1");
  
 li.innerText = input1.value;

   if(input1.value != ""){
  if (e.key == "Enter") {
    urgent.push(input1.value);
    listOfInputBox1.appendChild(li);
    input1.value = "";
  }

}
li.setAttribute('draggable', true);

li.addEventListener('dragstart',function(){

 this.className += ' hold';
 
setTimeout( () => this.className  = 'invisible', 0);
  
})

li.addEventListener('dragend', function(){
  this.className = 'list1';
})

box2.addEventListener('dragover', function(e){
  e.preventDefault();
 
})

box2.addEventListener('drop', function(){
this.className = 'box-2'
this.append(li);

})

box2.addEventListener('dragleave', function(){
this.className = 'box-2'

})

box2.addEventListener('dragenter', function(e){
   e.preventDefault();

})

})

function inputBox2(e) {

  let li = document.createElement('li');
  li.setAttribute("class", "list2");

   li.innerText = input2.value;
 
   if(input2.value != ""){
  if (e.key == "Enter") {
    listOfInputBox2.appendChild(li);
    input2.value = "";
    
 
  }
}
 
}



function inputBox3(e) {
  let li = document.createElement('li');
  li.setAttribute("class", "list3");

   li.innerText = input3.value;
 
   if(input3.value != ""){
  if (e.key == "Enter") {
    listOfInputBox3.appendChild(li);
    input3.value = "";
  }
}
}

function inputBox4() {}




input2.addEventListener("keypress", inputBox2);
input3.addEventListener("keypress", inputBox3);

// hello