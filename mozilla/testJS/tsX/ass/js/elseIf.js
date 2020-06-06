var select = document.querySelector('select');
var pFile = document.querySelector('p');

select.addEventListener('change', setWeater);

function setWeater() {
        var choice = select.value;

        if (choice === '春') {
                para.textContent = '春色季度空间展示';
        } else if (choice === '夏') {
                para.textContent = '夏色季度空间展示';
        } else if (choice === '秋') {
                para.textContent = '秋色季度空间展示';
        } else if (choice === '冬') {
                para.textContent = '冬色季度空间展示';
        } else {
                para.textContent = '';
        }
}
