
divTodo = document.querySelector('.todo');

function addClockDiv(){
    

    divClock = document.querySelector('.divClock');

    divHours = document.createElement("div");
    divHours.classList.add(`divHours`);
    divClock.append(divHours);

    divDots = document.createElement("div");
    divDots.classList.add(`divDots`);
    divDots.setAttribute('id',"visible")
    divClock.append(divDots);
    divDots.textContent = ":"

    divMinutes = document.createElement("div");
    divMinutes.classList.add(`divMinutes`);
    divClock.append(divMinutes);

    startClock();
}
addClockDiv();

// function interval(){
//     setInterval(()=>{
//         if (divDots.getAttribute('visible')){
//             divDots.textContent = "";
//             divDots.getAttribute('invisible');
//         }
//         else if (divDots.getAttribute('invisible')){
//             divDots.textContent = ":";
//             divDots.getAttribute('visible');
//     }
//     }),1000}


function startClock(){
    timeNow = new Date();
    if (timeNow.getHours()<10){divHours.textContent = ` 0${timeNow.getHours()}`;}
    else {divHours.textContent = timeNow.getHours()}
    if (timeNow.getMinutes()<10){divMinutes.textContent = ` 0${timeNow.getMinutes()}`;}
    else{divMinutes.textContent = timeNow.getMinutes()}

    // document.addEventListener('mouseOver', interval)


function createAppTitle() {
    h1 = document.createElement('h1');
    h1.classList.add('h1');
    h1.textContent = "TODO-LIST";
    divTodo.append(h1);
    
}
createAppTitle()

function createTodoItemForm() {
    // form = document.createElement("form");
    // form.classList.add("input-group");
    // divTodo.append(form);

    divEnter = document.createElement("div");
    divEnter.classList.add("divEnter");
    divTodo.append(divEnter);

    input = document.createElement("input");
    input.classList.add("form-control");
    input.setAttribute('placeholder', 'Enter a new note')
    divEnter.append(input);

    divBtnAdd = document.createElement("div");
    divBtnAdd.classList.add("input-group-append");
    divEnter.append(divBtnAdd);
    
    btnAdd = document.createElement("button");
    btnAdd.classList.add("btnAdd");
    btnAdd.classList.add("btn-primary");
    divBtnAdd.append(btnAdd);
    btnAdd.textContent = 'ADD NOTE';

}
createTodoItemForm();

function createTodoList() {
   

    divList = document.createElement("div");
    divList.classList.add("divList");
    divTodo.append(divList);


    ul = document.createElement("ul");
    ul.classList.add("ul");
    divList.appendChild(ul);
}



function createTodoItems() {
    countNotes = countNotes + 1;

    li = document.createElement("li");
    li.setAttribute('id',`li`)
    li.classList.add(`divEnter${countNotes}`);
    // ul = document.querySelector('.ul');
    ul.appendChild(li);

    divNote = document.createElement("div");
    divNote.setAttribute('id',`divNote`)
    // divNote.classList.add(`divNote`);
    li.append(divNote);

    p_note = document.createElement("p");
    p_note.setAttribute('id',`p_note`) 
    p_note.classList.add(`p_note${countNotes}`);
    divNote.append(p_note);
    p_note.textContent = input.value;

    divButtons = document.createElement("div");
    divButtons.setAttribute('id',`divButtons`)
    divButtons.classList.add(`divButtons${countNotes}`);
    divNote.append(divButtons);

    buttonDone = document.createElement("button");
    buttonDone.setAttribute('id',`buttonDone`)
    buttonDone.classList.add(`buttonDone${countNotes}`);
    buttonDone.classList.add("btn-success");
    divButtons.append(buttonDone);
    buttonDone.textContent = "Done"

    buttonDelete = document.createElement("button");
    buttonDelete.setAttribute('id',`buttonDelete`)
    buttonDelete.classList.add(`buttonDelete${countNotes}`);
    buttonDelete.classList.add("btn-danger");
    divButtons.append(buttonDelete);
    buttonDelete.textContent = "Delete";

    input.value = "";

}


createTodoList();
let countNotes = 0;

btnAdd.addEventListener('click', createTodoItems);

divTodo.addEventListener('click', (event)=>{
    // console.log(event.target.className.indexOf('Delete'))
    if (event.target.className.indexOf('buttonDelete') != -1){
        console.log(event.target);
        event.target.closest('#li').remove();
    }
})

divTodo.addEventListener('click', (event)=>{
    console.log(event.target.className);
    if(event.target.className.indexOf('buttonDone') != -1){
        (event.target.closest('#divNote')).classList.toggle('backColor');
        
    }

})}
