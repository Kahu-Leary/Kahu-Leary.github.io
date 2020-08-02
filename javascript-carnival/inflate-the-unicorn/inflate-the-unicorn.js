  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.getElementById('unicorn0').onclick = clickToInflate;
document.getElementById('unicorn1').onclick = clickToInflate;
document.getElementById('unicorn2').onclick = clickToInflate;

let inflation = [0, 0, 0];

function clickToInflate(event) {
  let unicorn = event.target;
  let id = unicorn.id[7];

  inflation[id]++;

  if(inflation[id] === 4)
    inflation[id] = 0;

  unicorn.src = './images/unicorn-' + inflation[id] + '.png';
}


console.log("Inflate The Unicorn!")
