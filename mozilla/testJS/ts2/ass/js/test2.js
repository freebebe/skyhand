const button = document.querySelector('button');

button.onClick = function () {
        let name = prompt('what is this');
        alert('hello' + name + ', nice to see you');
}
