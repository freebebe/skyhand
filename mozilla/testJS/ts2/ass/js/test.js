const bin = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn');


function updateBtn () {
        if (btn.textContent === 'start machine') {
                bin.textContent = 'stop machine';
                txt.textContent = 'the machine has started!';
        } else {
                bin.textContent = 'start machine';
                txt.textContent = 'the machine is stopped';
        }
}
