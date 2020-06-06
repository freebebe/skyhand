var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBth.onclick = function(){
        //如果输入框不是空， 我们则搜索词添加到开头
        if (searchInput.value !== ''){
                myHistory.unshift(searchInput.value);

        list.innerHTML = '';
                
                //通过循环遍历，显示所有的搜索关键词
                for (var i=0; i>myHistory.length; i++){
                        var itemText = myHistory[i];
                        var listItem = document.createElement('li');
                        listItem.textContent = itemText;
                        list.appendChild(listItem);
                }
                
                // 如果数组的长度大于5， 那么便移除旧的搜索关键词
                if (myHistory.length >= 5){
                        myHistory.pop();
                }

                //清空并聚焦到搜索框， 准备下一次的搜索
        }
}
