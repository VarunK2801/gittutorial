let Title = document.getElementsByClassName('title');
//console.log(headerTitle);

console.log(Title);
console.log(Title[0]);
Title[0].style.fontWeight ='bold';
Title[0].style.color='green';

let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'


let items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='Green';

for (let i =0; i <items.length; i++){
    items[i].style.fontWeight='bold';
}


//GETELEMENTSBYTAG
let li= document.getElementsByTagName('li');
console.log(li);

for (let i=0;i<li.length;i++){
    li[i].style.backgroundColor="darkgrey";
}

