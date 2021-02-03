const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const integer = document.getElementById('integer');
const decimal = document.getElementById('decimal');
const case1 = document.getElementById('case1');
const case2 = document.getElementById('case2');
const case3 = document.getElementById('case3');
const select = document.getElementById('select-list');
let radio;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let ele = document.getElementsByName('radio_options');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) radio = ele[i].value;
  }

  let data =
    '\r Name: ' +
    username.value +
    ' \r\n ' +
    'Email: ' +
    email.value +
    ' \r\n ' +
    'Integer: ' +
    integer.value +
    ' \r\n ' +
    'Decimal: ' +
    decimal.value +
    ' \r\n ' +
    'Radio: ' +
    radio +
    ' \r\n ' +
    'Case 1: ' +
    case1.checked +
    ' \r\n ' +
    'Case 2: ' +
    case2.checked +
    ' \r\n ' +
    'Case 3: ' +
    case3.checked +
    ' \r\n ' +
    'Selection: ' +
    select.value;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'formData.txt'; // The file to save the data.

  let newLink = document.createElement('a');
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = 'none';
    document.body.appendChild(newLink);
  }

  newLink.click();
});
