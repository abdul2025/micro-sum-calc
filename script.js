function calculateSum() {

    // Get values
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;


    // Calc or sum
    const sum = num1 + num2;

    // show up the sum
    document.getElementById('result').textContent = `Result: ${sum}`;


    // Clear the input fields
    document.getElementById('num1').value = null
    document.getElementById('num2').value = null;
}