let rgb_01 = "#004773"; // Setting the default color instead of undefined;
      let rgb_02 = "#54d542"; // Setting the default color instead of undefined;

      /*// // // Starting of accessing the id's and classes by it's name.*/

      let accessFirstBtn = document.getElementById("myButton");
      console.log(accessFirstBtn); // <button id="myButton">#051937</button>

      let accessSecondBtn = document.getElementById("myButton2");
      console.log(accessSecondBtn); // <button id="myButton2">#008793</button>

      let accessCopyCode = document.querySelector(".copyCode");
      console.log(accessCopyCode); // <div class="copyCode"></div>

      /*// // // Ending of accessing the id's and classes by it's name.*/

      //////---------------------------------------------------------------------------------------------///////

      /*// // // Starting of writing function to generate hexa-digits.*/

      /*// // // Writing the reusable function code for both the buttons.*/

      const hexaDeciValFun = () => {
        // // Actually, we want the hexa color code. So, we have to iterate through the hexaDeciValue to get the hexa color code to generate on every click;
        let hexaDeciValue = "0123456789abcdef"; // Declare the Hexa-Decimal Number;
        let symbol = "#";
        for (let i = 0; i < 6; i++) {
          // console.log(i);

          // // Wanted the random number from the hexaDeciValue;
          // console.log(Math.random()); // 0.4650936625490387

          // // Wanted the number from 0 to 15 i.e, why we used Math.random() * 16;
          // console.log(Math.random() * 16); // 15.523150059521148

          // // Wanted to round up the number or not want fraction value;
          // console.log(Math.floor(Math.random() * 16)); // 14

          // console.log(hexaDeciValue[Math.floor(Math.random() * 16)]);
          // // Finally, we are getting the generated the hexa number from 0 to f;

          symbol = symbol + hexaDeciValue[Math.floor(Math.random() * 16)]; // Adding hash with random number;
        }
        console.log(symbol);
        // // Whichever button we click we get the hexa-decimal value;
        // // #a9fc42
        return symbol;
      };

      /*// // // Ending of writing function to generate hexa-digits.*/

      //////---------------------------------------------------------------------------------------------///////

      /*// // // Starting of firing the event listener on click button.*/

      accessFirstBtn.addEventListener("click", () => {
        // console.log("First Btn Click"); // First Btn Click

        // hexaDeciValFun(); // Calling the function here;
        rgb_01 = hexaDeciValFun();
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb_01}, ${rgb_02})`;
        // // Here, I want to use the ${rgb_02} instead of #444; But, due to let variable having block scope that's why we are unable to use outside the block scope; We have to define outside the function;
        // // Now, able to use the rgb_01 here;

        // // // Changing the div code as per the color code according to hexaDeciValFun reflect it on screen for copy purpose;
        accessCopyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb_01}, ${rgb_02})`;

        // // // Changing the text of first btn as per hexaDeciValFun;
        accessFirstBtn.innerHTML = rgb_01;
      });


      //////-----------------------------------------------------------------------------------------------------



      accessSecondBtn.addEventListener("click", () => {
        // console.log("Second Btn Click"); // Second Btn Click

        // hexaDeciValFun(); // Calling the function here;

        rgb_02 = hexaDeciValFun();
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb_01}, ${rgb_02})`;
        // // Here, I want to use the ${rgb_01} instead of #001; But, due to let variable having block scope that's why we are unable to use outside the block scope; We have to define outside the function;
        // // Now, able to use the rgb_02 here;

        // // // Changing the div code as per the color code according to hexaDeciValFun reflect it on screen for copy purpose;
        accessCopyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb_01}, ${rgb_02})`;

        // // // Changing the text of second btn as per hexaDeciValFun;
        accessSecondBtn.innerHTML = rgb_02;
      });



      //////-----------------------------------------------------------------------------------------------------



      accessCopyCode.addEventListener("click", () => {
        // // // With the help of navigator and clipboard we can read, write the text;
        navigator.clipboard.writeText(accessCopyCode.innerText);
      });

      /*// // // Ending of firing the event listener on click button.*/