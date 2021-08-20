/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
// create a new variable named timestring. convert function argument into string. assign to string.
  let string = parseInt(time)
// if string is less then 11 return "Good Morning"
  if (string < 12) {
    return "Good Morning"
  }
// if string is greater then 16 return "Good Evening"
  if (string > 16) {
    return "Good Evening"
  }
// if string is less than 16 and greater than 11 return "Good Afternoon"
  if (string < 17 & string > 11) {
    return "Good Afternoon"
  }
}


// displayMessage() function
// 4) updates the DOM with an appropriate message
function displayMessage(msg) {
  let node = document.querySelector("#greeting");
  node.innerHTML = msg;
  // document.body.appendChild(node);
}


