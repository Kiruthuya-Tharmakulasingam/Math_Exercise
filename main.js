function validateInput() {
      const num = document.getElementById("number").value;
      const result = document.getElementById("result");

      // If invalid → show error
      if (num === "" || isNaN(num) || Number(num) < 0) {
        result.textContent = "Please enter a valid number!";
      } else {
        result.textContent = ""; // If valid → show nothing
      }
    }