const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

// Create dropdown menu in html
// function dropdown() {
  
// }

// dropdown();
// console.log('hoi');


const dropdown = document.getElementById('key');
  for (let i = 1; i < alphabet.length; i++) {
    const option = document.createElement('option');
    option.text = i;
    dropdown.add(option);
  }

// To encrypt input text
function encrypt(text, key) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const indexInAlphabet = alphabet.indexOf(text[i]);
    if (indexInAlphabet > -1) {
      const temporaryIndex = indexInAlphabet + key + alphabet.length;
      const encryptedIndexInAlphabet = temporaryIndex % alphabet.length;
      result = result + alphabet[encryptedIndexInAlphabet];
    } else {
      result = result + text[i];
    }
  }
  return result;
}

// To decrypt input text
function decrypt(text, key) {
  return encrypt(text, - key);
}

function onClickEncrypt() {
  const plaintext = $('textarea#plaintext').val();
  const key = getKey();
  $('textarea#ciphertext').val(encrypt(plaintext, key));
  // $('textarea#plaintext').val('');
}

function onClickDecrypt() {
  const ciphertext = $('textarea#ciphertext').val();
  const key = getKey();
  $('textarea#plaintext').val(decrypt(ciphertext, key));
  // $('textarea#ciphertext').val('');
}

// Handle encrypt button click
$('#encrypt-btn').click(onClickEncrypt);

// Handle decrypt button click
$('#decrypt-btn').click(onClickDecrypt);

// Dropdown key selector
function getKey() {
  const keyId = document.getElementById('key');
  const selectedkey = keyId.options[keyId.selectedIndex].value;
  return parseInt(selectedkey, 10);
}