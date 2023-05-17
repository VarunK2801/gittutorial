// const a = document.getElementById('list-items1');
// a.innerText = 'Now or never';
// const mainHeader = document.getElementById('main-header');
// mainHeader.style.border= '3px solid orange';
// mainHeader.style.textAlign='center';

// let posts = [
//   {'title':'post1'},
//   {'title': 'post2'}
// ]

// function getPosts(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post,index) =>{
//             output += `<li> ${post.title}</li>`
//         })
//         document.body.innerHTML= output;
//     },1000);
// }

// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error){
//                 resolve();
//             }else{
//                 reject("error");
//             }
//         }, 1000);   
//     })
    
// }

// createPost({'title':'post 3'})
// .then(getPosts)
// .catch(err => console.log(err))



////PLANNING A TRIP TO MANALI YASH VIDEO

// function  buyCar(callBack){
//     setTimeout(()=>{
//         console.log('bought a car');
//         callBack();
//     },5000)
// }

// function planAtrip(){
//     setTimeout(()=>{
//         console.log('lets go to manali');
//     },2000);
// }

// buyCar(planAtrip);


//with PROMISES 

// function buyCar(){
//     return new Promise((res,rej) =>{
//         setTimeout(() => {
//             res('bought a car');
//         },2000);
//     })
// }

// function planAtrip(){
//     return new Promise((res,rej) => {
//         setTimeout(() =>{
//             res('lets go to Manali');
//         },3000);
//     })
// }

// function reachManali(){
//     return new Promise((res,rej) =>{
//         setTimeout(() =>{
//             res('reached Manalli');
//         },3000);
//     })
// }

// function gotoFamousMountain(){
//     return new Promise((res,rej) =>{
//         setTimeout(() =>{
//             res('reached Mountain');
//         },1000);
//     })
// }

// buyCar().then((msg) => {
//     console.log(msg);
//     planAtrip().then((msg2) =>{
//         console.log(msg2);
//         reachManali().then((msg3)=>{
//             console.log(msg3);
//             gotoFamousMountain().then((msg4) =>{
//                 console.log(msg4);
//             })
//         })
//     })
// })


// ///USING ASYNC await
// async function fun1(){
//     const msg = await buyCar();
//     console.log(msg);
//     const msg2 = await planAtrip();
//     console.log(msg2);
//     const msg3 = await reachManali();
//     console.log(msg3);
//     const msg4 = await gotoFamousMountain();
//     console.log(msg4);
// }
// fun1();



///LETS BREAK PROMISES TASK 10 

// const posts = [{'title': 'post 1'}];

// function create2ndPost(){
//     return new Promise((res,rej) =>{
//         setTimeout(() =>{
//             posts.push({'title':'post 2'});
//             res();
//         },1000);
//     })
// }

// function create3rdPost(){
//     return new Promise ((res,rej) =>{
//         setTimeout(() =>{
//             posts.push({'title':'post 3'});
//             res();
//         },1000);
//     })
// }

// function create4thPost(){
//     return new Promise((res,rej) =>{
//         setTimeout(()=>{
//             posts.push({'title': 'post 4'});
//         },1000);
//     })
// }

// function printPost(){
//     posts.forEach((post,index) =>{
//         console.log(post.title);
//     })
// }

// function deletePost(){
//     return new Promise((res,rej) =>{
//         setTimeout(() =>{
//             if (posts.length >0){
//                 const poppedEle = posts.pop();
//                 res(poppedEle);
//             }else{
//                 rej("error: array is empty");
//             }
//         },1000);
//     })
// }

// create2ndPost()
//     .then(()=> {
//         deletePost().then((deletedPost1) => {
//             console.log(deletedPost1.title)
//             create3rdPost()
//                 .then(() => {
//                         deletePost().then((deletedpost2) => {
//                             console.log(deletedpost2.title)
//                             deletePost().then((deletedpost3) => {
//                                 console.log(deletedpost3.title)
//                                 deletePost().catch((msg) => console.log(msg))
//                             })
//                     })
//                 })
//             })
//         })


// const blogs=[];

// function create1stBlog(){
//     return new Promise((res,rej) =>{
//         setTimeout(()=>{
//             blogs.push({"title":"Blog 1"});
//             res()
//         },1000);
//     })
// }

// function create2ndBlog(){
//     return new Promise((res, rej) =>{
//         setTimeout(() =>{
//             blogs.push({"title":"Blog 2"});
//             res();
//         },1000);
//     })
// }

// function deletePost(){
//     return new Promise((res,rej) =>{
//         setTimeout(()=>{
//             if(blogs.length>0){
//                 const popEle = blogs.pop();
//                 res(popEle);
//             }else{
//                 rej("Error");
//             }
//         })
//     })
// }

// create1stBlog().then(() =>{
//     create2ndBlog().then(()=>{
//         deletePost().then((popEle)=>{
//             console.log(popEle.title);
//             deletePost().then((popEle)=>{
//                 console.log(popEle.title);
//                 deletePost().then((popEle)=>{
//                     console.log(popEle.title);
//                 }).catch((error) => {
//                     console.log(error);
//                 });
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }).catch((error) => {
//             console.log(error);
//         });
//     })
// })




const posts = [];
const user = {
    name: 'Varun',
    lastActivityTime: new Date().getTime()  
};

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });
};

const updateLastUserActivityTime = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime);
        }, 1000);
    });
};

const deletePost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length !=0 ) {
                posts.pop();
                resolve();
            }
            else
                reject('Error: Array is Empty');
        }, 1000);
    });
};

Promise.all([createPost({ title: 'Post1' }), createPost({ title: 'Post2' }), createPost({ title: 'Post3' }), createPost({ title: 'Post4' }), updateLastUserActivityTime()])
    .then(values => {
        values.forEach(value => console.log(value));
        deletePost()
            .then(() => {
                posts.forEach((post) => console.log(post));
            })
            .catch(err => console.log(err));
    });


        
