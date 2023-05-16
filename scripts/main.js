let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = () =>{
    let mySrc = myImage.getAttribute('src');
    let targetSrc = mySrc == 'images/firefox.png' ? 'images/firefox1.png': 'images/firefox.png';
    myImage.setAttribute('src', targetSrc);
}

let myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla Cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla Cool, ' + storedName;
}

myButton.onclick = () =>{
    setUserName();
}