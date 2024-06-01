const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

/** generiertes Passwort kopieren */
clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    if(!password) {  
        return; 
    }
    /**Die clipboard Eigenschaft des navigator Objekts bietet Zugriff auf die Clipboard API,
     * mit der man Daten in die Zwischenablage schreiben und daraus lesen kann.
    */
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!')
})


generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  // console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);
  resultEl.innerText = generatePassword(hasLower, hasUpper ,hasNumber ,hasSymbol ,length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  /**
   *Object.values(item)[0] wird verwendet, um den Wert des ersten Schlüssels eines Objekts zu extrahieren.
   *In der generatePassword-Funktion hilft dies, die Zeichentypen zu identifizieren,
   *die im Passwort enthalten sein sollen, indem nur die Objekte mit "true" Werten in das typesArray aufgenommen werden.
   */
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  /**
   * Wenn keiner der Zeichentypen ausgewählt wurde (typesCount ist 0), wird ein leerer String zurückgegeben.
   */
  if (typesCount === 0) {
    return "";
  }
  /**
   * sonst Passwort generieren.
   * Schleife in Schleife - for-Schleife geht bis max. PW-Länge. hier 20
   * forEach-Schleife läuft alle Elemente des typesArrays durch
   */
  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach( type => {
      /**
       * const funcName = Object.keys(type)[0]: Der Schlüsselname (z.B. 'lower') wird in funcName gespeichert.
       * randomFunc[funcName]() ruft die entsprechende Funktion aus dem randomFunc-Objekt auf.
       * Beispiel: randomFunc['lower']() ruft die Funktion getRandomLower() auf,
       * die ein zufälliges Kleinbuchstaben-Zeichen generiert.
       */
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  /**
   * Das generierte Passwort wird auf die gewünschte Länge gekürzt, falls es länger ist.
   * Das gekürzte Passwort wird zurückgegeben.
   */
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}


function getRandomLower() {
  //English alphabet has 26 characters highest - random()* highest number to get a random character
  //The lowercase letter a starts from the ASCII number 97
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  //English alphabet has 26 characters highest - random()* highest number to get a random character
  //The uppercase letter A starts from the ASCII number 65
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  //The numbers 0 to 9 has the highest 10
  //The number 0 starts from the ASCII number 48
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
