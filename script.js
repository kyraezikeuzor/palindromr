document.getElementById("btn").addEventListener("click", function(e){
  e.preventDefault()
  let txt = document.getElementById("text-input").value;
  checkPalindrome(txt);
});

textInput = document.getElementById("text-input")

textInput.addEventListener("change", function(e){
  e.preventDefault()
  checkPalindrome(e.target.value)
})

function checkPalindrome(txt){
  let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let len = txt_new.length;
  let halfLen = Math.floor( len/2 );
  let result = document.getElementById("result");
  let i;

  for ( i = 0; i < halfLen; i++)
    if( txt_new[i] !== txt_new[len-1-i]){
      result.textContent = "Nope!";
      return;
    }
    result.textContent = "Yes!"
}

/*
function palChecker(event) {
  event.preventDefault();

  // Get the input value using DOM methods
  const inputVal = document.getElementById("text-field-input").value;
  
  // Convert the string to lowercase
  const input = inputVal.toLowerCase();
  console.log(input);

  // Split inputValue
  const split = input.split("");
  
  // Reverse the inputValue
  let reverse = split.reverse();
  
  // Join the input value
  let revWord = reverse.join("");
  
  // Set result variable as palindrome-result id element
  const result = document.getElementById("palindrome-result");
  
  console.log(reverseVal);

  //Condition to check the palindrome
  if (revWord == input) {
    result.innerHTML = "True";
  } else {
    result.innerHTML = "False";
  }
}
*/