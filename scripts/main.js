let myHeading = document.querySelector('h1');
myHeading.textContent = '嗖嗖之箭';

let myImage = document.querySelector('img');

myImage.onclick = () =>{
    let mySrc = myImage.getAttribute('src');
    let targetSrc = mySrc == 'images/first.jpg' ? 'images/second.jpg': 'images/first.jpg';
    myImage.setAttribute('src', targetSrc);
}

let myButton = document.querySelector('button');

// function setUserName(){
//     let myName = prompt('请输入你的名字。');
//     if(!myName){
//         setUserName();
//     } else {
//         localStorage.setItem('name', myName);
//         myHeading.textContent = 'Mozilla Cool, ' + myName;
//     }
// }

// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla Cool, ' + storedName;
// }

// myButton.onclick = () =>{
//     setUserName();
// }