  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let headIndex = 3;
let bodyIndex = 4;
let footIndex = 4;
let currentBodyPart = 'head';


document.addEventListener('keyup', function (){
  if (event.key === 'ArrowRight') 
    selectClothingRight();    
  
  if (event.key === 'ArrowLeft') 
    selectClothingLeft();    
  
  if (event.key === 'ArrowDown') 
    selectBodyPartMoveDown();    
  
  if (event.key === 'ArrowUp') 
    selectBodyPartMoveUp();    
  
});

function selectBodyPartMoveDown() {

  switch (currentBodyPart) {
    case 'head':
      currentBodyPart = 'body';
      break;

    case 'body':
      currentBodyPart = 'shoes';
      break;

    case 'shoes':
      currentBodyPart = 'head';
      break;
  }
}

function selectBodyPartMoveUp() {

  switch (currentBodyPart) {
    case 'head':
      currentBodyPart = 'shoes';
      break;

    case 'body':
      currentBodyPart = 'head';
      break;

    case 'shoes':
      currentBodyPart = 'body';
      break;

  }
}

function selectClothingLeft() {

  let currentClothingIndex;

  switch (currentBodyPart) {
    case 'head':
      if (headIndex <= 0)
        headIndex = 5;
      else   
        headIndex--
        currentClothingIndex = headIndex
      break;

    case 'body':
      if (bodyIndex <= 0) 
        bodyIndex = 5;
      else   
        bodyIndex--
        currentClothingIndex = bodyIndex
      break;

    case 'shoes':
      if (footIndex <= 0) 
        footIndex = 5;
      else   
        footIndex--
        currentClothingIndex = footIndex
      break;
  }

  let bodyVariable = document.getElementById(currentBodyPart);
  let bodySrc = './images/' + currentBodyPart + currentClothingIndex + '.png'

  bodyVariable.src = bodySrc; 
}

function selectClothingRight() {

  let currentClothingIndex;

  switch (currentBodyPart) {
    case 'head':
      if (headIndex >= 5)
        headIndex = 0;
      else   
        headIndex++
        currentClothingIndex = headIndex
      break;

    case 'body':
      if (bodyIndex >= 5) 
        bodyIndex = 0;
      else   
        bodyIndex++
        currentClothingIndex = bodyIndex
      break;

    case 'shoes':
      if (footIndex >= 5) 
        footIndex = 0;
      else   
        footIndex++
        currentClothingIndex = footIndex
      break;
  }
  
  let bodyVariable = document.getElementById(currentBodyPart);
  let bodySrc = './images/' + currentBodyPart + currentClothingIndex + '.png'

  bodyVariable.src = bodySrc;
}


console.log("Dress The Clown!")