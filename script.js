console.dir(document);
let headerElement = document.getElementById('header');
headerElement.style.color = 'yellow';
headerElement.style.backgroundColor = 'rgb(232,23,123)';
headerElement.style.borderRadius = '10px';
headerElement.style.padding = '5px';

let img = document.images;
img[0].style.borderRadius = '50%';
console.log(img[0]);
// console.dir(document.body);
// document.title="play with dom";
// console.log(document.all);
// console.log(typeof (document.all.filter));
// for(let element of document.all){
//     console.log(element)
// }
// console.log(document.images);
// console.log(document.links);
// console.log(document.forms);
//get element by id
// console.log(document.getElementById('new-task'));
//diu vabe change kora jai
// headerElement.textContent='to do apps';//code theke read kre
// headerElement.innerText='to do apps';//inner text browser theke read kore


// console.log(headerElement.textContent);
// console.log(headerElement.innerText);
// console.log(headerElement.innerHTML);

// headerElement.style.fontSize='48px';

// document.body.style.backgroundColor='red';
// document.getElementsByClassName("item").style.color='blue';

// let ul=document.getElementById('items');
// let items=ul.getElementsByClassName('item');
// console.log(items);
// for(let i=0; i<items.length;i++){
//     items[i].style.color='red';
// }

// let li=document.getElementsByTagName('li');
// console.log(li);


// let head1 = document.querySelector('#header');
// head1.style.fontSize = "23px";

// let item = document.querySelectorAll('.item:nth-child(odd)');
//  item[3].style.color = 'blue';
// console.log(item);
// for (let e of item) {
//     e.style.color = 'green';
// }


    // let dada=document.querySelector('.todolistbox');
    // // let bap=dada.children;
    // let chele=dada.querySelectorAll('.item');
    // console.log(chele);
    // for(let a of chele){
    //     a.style.backgroundColor='black';
    // }
    // let child=document.querySelector('.item');
    // // let parent=child.parentElement;
    // let grand=child.closest('.todolistbox');
    // // console.log(parent);
    // console.log(grand);
    // const chone=document.querySelector('.item');
    // const chtwo=chone.nextElementSibling;
    // console.log(chtwo);
    // chtwo.style.color='white';
    // chtwo.previousElementSibling.style.color='yellow';

    //creating element
    // const divelement = document.createElement('div');
    // divelement.className='red';
    // // divelement.id='blue';
    // divelement.setAttribute('id','ok');
    // divelement.setAttribute('title','red text');
    // divelement.innerText='sakib';
    // console.log(divelement);
    // const content=document.querySelector('.todolistbox');
    // const h2lem=content.querySelector('h2');
    // content.insertBefore(divelement,h2lem);
    // content.appendChild(divelement);
    // content.append('divelement');

    //event listener
    // const eve=document.querySelector('.mouse');
    // eve.addEventListener('mousemove',(event)=>{
    //     console.log(event);
    // });
    // const inputelement = document.querySelector('input[type="text"]');
    // inputelement.addEventListener('keydown',(event)=>{
    //     console.log(event.target.value);
    // });

    // Finally i am creating a todo apps
    // at first this is my first project

    // select all element and assing them to variable
    let newTask=document.querySelector('#new-task');
    let form=document.querySelector('form');
    let todoul=document.querySelector('#items');
    let completeul=document.querySelector('.complete-list ul');

    // functions

    let creatTask=function(task){
        let listItem = document.createElement('li');
        let checkbox= document.createElement('input');
        let label = document.createElement('label');

        label.innerText=task;
        checkbox.type='checkbox';

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        return listItem;
    }

    let addTask=function(event){
        event.preventDefault();
        let listItem = creatTask(newTask.value);
        todoul.appendChild(listItem);
        newTask.value="";
        bindincompleteitems(listItem,completeTask);
        
    }

    let completeTask=function(){
        let listItem=this.perentNode;
        let deletebtn=document.createElement('button');
        deletebtn.innerText='Delete';
        deletebtn.className ='delete';
        listItem.appendChild(deletebtn);

        let checkbox=listItem.querySelector('input[type="checkbox"]');
        checkbox.remove();

        completeul.appendChild(listItem);

        bindcompleteitems(listItem,deleteTask);
    }

    let deleteTask=function(){
        let listItem=this.perentNode;
        let ul=listItem.perentNode;
        ul.removeChild(listItem);
    }

    

    let bindincompleteitems=function(taskItem,checkboxclick){
        let checkbox=taskItem.querySelector('input[type="checkbox"]');
        checkbox.onChange=checkboxclick;

    }
    let bindcompleteitems=function(taskItem,deletebtnclick){
        let deletebutton=taskItem.querySelector('.delete');
        checkbox.onClick=deletebtnclick;

    }

    form.addEventListener('submit',addTask);





    // let a=document.querySelector('#addTask');
    //     a.addEventListener('click',addTask);