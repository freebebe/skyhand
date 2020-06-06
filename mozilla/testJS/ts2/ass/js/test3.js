const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // write your code just below here
  let keyFirst = input.slice(0, 3);
  let keySmall = keyFirst.toLowerCase();   
  let keyFirstTwo = keySmall.slice(0, 1);
  let keyFBLS = keySmall.replace(keyFirstTwo, keyFirstTwo.toUpperCase());
  let keyOut = input.indexOf(';');
  let keyLast = input.slice(keyOut + 1);
  let keyMax = keyFBLS + ':' + keyLast;
  let keyW = keyMax;
  let listItem = document.createElement('li');
  listItem.textContent = keyW;
  list.appendChild(listItem);
}
