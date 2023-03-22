// let Title = document.getElementsByClassName('title');
// //console.log(headerTitle);

// console.log(Title);
// console.log(Title[0]);
// Title[0].style.fontWeight ='bold';
// Title[0].style.color='green';

// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000'


// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor='Green';

// for (let i =0; i <items.length; i++){
//     items[i].style.fontWeight='bold';
// }


// //GETELEMENTSBYTAG
// let li= document.getElementsByTagName('li');
// console.log(li);

// for (let i=0;i<li.length;i++){
//     li[i].style.backgroundColor="darkgrey";
// }

// // QUERYSELECTOR

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor="green";

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility ='hidden';
 


//TRAVERSING THE DOM//

let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes); 

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//first child

//console.log(itemList.firstChild);

//firstElementCHild
console.log(itemList.firstElementChild) ;
//itemList.firstElementChild.textContent ='Hello 1'


//last child

console.log(itemList.lastChild);

//firstElementCHild
console.log(itemList.lastElementChild) ;
itemList.lastElementChild.textContent ='Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previoiuselementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement

//create a div
let newDiv= document.createElement('div');

//add class
newDiv.className= 'hello';

//add Id
newDiv.id= 'hello1';

//add attr
newDiv.setAttribute('title','Hello Div');

//Create text Node
let newDivText= document.createTextNode('Hellow world');

//add text to div 
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1= document.querySelector('header h1');  

console.log(newDiv);

newDiv.style.fontSize='30px';    

container.insertBefore(newDiv,  h1);


//get the element by queryselector 

let a = document.getElementById("items");

let b = document.createElement("li");
b.textContent = "Hello World";

a.insertBefore(b, a.firstChild);


