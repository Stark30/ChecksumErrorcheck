// Function to generate checksum
function generateChecksum() {
    const binaryNumbers = document.getElementById('binaryNumbers').value.split(',');
    let checksum = 0;

    // Calculate checksum by adding binary numbers
    binaryNumbers.forEach(num => {
        checksum += parseInt(num, 2);
    });

    // Convert sum back to binary
    checksum = checksum.toString(2);

    // Display the checksum
    document.getElementById('checksumResult').innerHTML = `Checksum: ${checksum}`;
}

// Function to check the received data
function checkData() {
    const receivedNumbers = document.getElementById('receivedBinaryNumbers').value.split(',');
    const receivedChecksum = document.getElementById('receivedChecksum').value;

    let totalSum = 0;

    // Calculate total sum of received binary numbers
    receivedNumbers.forEach(num => {
        totalSum += parseInt(num, 2);
    });

    // Convert sum to binary
    const calculatedChecksum = totalSum.toString(2);

    // Check if the calculated checksum matches the received checksum
    if (calculatedChecksum === receivedChecksum) {
        document.getElementById('result').innerHTML = 'No Error: Data is correct';
    } else {
        document.getElementById('result').innerHTML = 'Error: Data is incorrect';
    }
}
