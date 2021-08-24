
var all_button = document.getElementsByTagName("button");
// console.log(all_button);                fetch all button element 

var output_box = document.getElementById('inputfield');
// console.log(output_box);                     fetch which element have id name inputfield


for (element of all_button) {
    element.addEventListener('click', (e) => {


        // now we add music mp3 button press / click sound
        var audio = new Audio('button-16.mp3');
        audio.play();

        var clicked_button = e.target.innerText;

        // console.log(clicked_button);   print all clicked button value

        if (clicked_button == "=") {                     // calculate value
            output_box.value = eval(output_box.value);
        }
      //multiplication in javascript
        else if(clicked_button=="X"){
            output_box.value=output_box.value+"*";
        }   

        else if (clicked_button == "C") {                  // clear input field
            output_box.value = "";
        }
        // square of any value 
        else if (clicked_button == "^2") {
            output_box.value = output_box.value * output_box.value;
        }
        // sin of any value 
        else if (clicked_button == "sin") {
            output_box.value = Math.sin(output_box.value).toFixed(2);
        }

        // log10 of any value
        else if (clicked_button == "log10") {
            output_box.value = Math.log10(output_box.value).toFixed(2);
        }

        //square root 
        else if (clicked_button == "sqrt") {
            output_box.value = Math.sqrt(output_box.value).toFixed(2);
        }
        // this works when someone press eraser button in calculator
        else if (clicked_button == "") {
            output_box.value = output_box.value.slice(0, output_box.value.length - 1);
        }

        //when any person click any button
        else {
            output_box.value = output_box.value + clicked_button;
        }





    })
}