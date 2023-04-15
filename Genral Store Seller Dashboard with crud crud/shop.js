var candy=100
var colddrink=100
var snacks=100

function savetoCrudCrud(event){
    event.preventDefault()
    
    const Itemname = document.getElementById('Itemname').value
    const description= document.getElementById('description').value
    const price= document.getElementById('price').value
    const quantity= document.getElementById('quantity').value

    const Item={Itemname,description,price,quantity}
    const data=axios.post(`https://crudcrud.com/api/d2530ddca9694f149beee8b82dd43254/sell`,Item)
    .then((res)=>{
        onscreen(res.data);
        if(res.data.Itemname==='Eclair'){
            candy = candy -res.data.quantity
        }   
        else if(res.data.Itemname==='Thumbs up'){
            colddrink = colddrink - res.data.quantity   

        }
        else if(res.data.Itemname==='Kurkure'){
            snacks = snacks - res.data.quantity
        }
        const parent = document.getElementById('remaining')
        parent.innerHTML = `<input type="button" value="Remaining Items" onclick="remaining(${candy},${colddrink},${snacks})">`
    })
    .catch((err)=>{document.body.innerHTML=document.body.innerHTML + `<h4>Something Went Wrong in post</h4>`})
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/d2530ddca9694f149beee8b82dd43254/sell')
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
            onscreen(res.data[i])
        } 

        for(var i=0;i<res.data.length;i++){
            if(res.data[i].Itemname==='Eclair'){
                candy = candy -res.data[i].quantity
            }   
            else if(res.data[i].Itemname==='Thumbs up'){
                colddrink = colddrink - res.data[i].quantity

            }
            else if(res.data[i].Itemname==='Kurkure'){
                snacks = snacks - res.data[i].quantity
            }
        }
        const parent= document.getElementById('remaining')
        parent.innerHTML = `<input type="button" value="Remaining Items" id="remaining-item" onclick="remaining(${candy},${colddrink},${snacks})">`
    })
    .catch((err)=>{document.body.innerHTML=document.body.innerHTML + `<h4>Something Went Wrong in window</h4>`})
}) 


function onscreen(Item){
    document.getElementById('Itemname').value=''
    document.getElementById('description').value=''
    document.getElementById('price').value=''
    document.getElementById('quantity').value=''
    const parent=document.getElementById('addlist')

    const child=`<li id='${Item._id}''> ${Item.Itemname} --> ${Item.description} --> ${Item.price} --> ${Item.quantity}</li>`

    parent.innerHTML = parent.innerHTML + child

} 

function remaining(candy,colddrink,snacks) {
    axios.get(`https://crudcrud.com/api/d2530ddca9694f149beee8b82dd43254/sell`)
    .then((res)=>{

        const parent=document.getElementById('remain')
        const child=`<li>CANDY REMAINING :${candy}</li> <br>
        <li>COLD DRINK REMAINING :${colddrink} </li> <br>
        <li>SNACKS REMAINING :${snacks}</li>`

        parent.innerHTML=child
    })
}



function quantity1(event){
        const q=document.getElementById('quantity')
        q.value=1
}
function quantity2(event){
    const q=document.getElementById('quantity')
    q.value=2
}
function quantity3(event){
    const q=document.getElementById('quantity')
    q.value=3
}