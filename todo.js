let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputpield');

addtodobutton.addEventListener('click', function(){
        var paragraph = document.createElement('p')
        paragraph.classList.add('paragraph-styling');
                paragraph.innerText = inputfield.value;
        todocontainer.appendChild(paragraph);        
        inputfield.value = "";
        
})