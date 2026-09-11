let calculation = JSON.parse(localStorage.getItem('calculation'));
      if (!calculation)
        calculation = '';
      document.querySelector('.result').innerHTML = `${calculation}`;

      function updateCalculation(input) {
        calculation += input;
        localStorage.setItem('calculation', JSON.stringify(calculation));
        document.querySelector('.result').innerHTML = `${calculation}`;
        console.log(calculation);
      }
      function clearButton(){
        calculation = '';
        console.log(calculation);
        document.querySelector('.result').innerHTML = `0`;
        localStorage.setItem('calculation', JSON.stringify(calculation));
      }
      function equalButton(){
          // Note: eval() takes a string and runs it as code.
        // Avoid using eval() in real world projects since
        // it can potentially be given harmful code to run.
        // Only use eval() for learning purposes.
        calculation = eval(calculation);
        localStorage.setItem('calculation', JSON.stringify(calculation));
        console.log(calculation);
        document.querySelector('.result').innerHTML = `${calculation}`;
      }