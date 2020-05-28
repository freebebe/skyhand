const button = document.querySelector('button');

button.onClick = function() {
        let name = prompt('what is your name');
        alert('hello ' + name + ', nice to see you ');
}
