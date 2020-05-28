let myImage = document.querySelector('img');

myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'image/ok_ok？ok.jpg') {
                myImage.setAttribute('src', 'image/om@1.jpg');
        } else {
                myImage.setAttribute('src', 'image/ok_ok？ok.jpg');
        }
}

//setup message
//get onclick & title 'let'
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//var -> message
function setUserName() {
        let myName = prompt('请输入你的名字。');
        if(!myName || myName === null) {
                setUserName();
        } else {
                localStorage.setItem('name', myName);
                myHeading.textContent = 'Mozilla 哭比了，' + myName;
        }
}

//recall the code on firsttime build
if(!localStorage.getItem('name')) {         //利用!（逻辑非）反向检测'name'是否不存在
        setUserName();                      //若不存在，调用setUserName()创建
} else {                                    //若存在，调用getItem('name')，
        let storedName = localStorage.getItem('name');      //调用getItem('name')，套入到textContent里。
        myHeading.textContent = 'Mozilla 哭比了，' + storedName;
}

//setup the onclick keys
myButton.onclick = function() {         //按钮onclick 按下时
        setUserName();                  //运行setUserName()函数
}                                       //则通过按下按钮来设置新名字
