/**
 * Created by raymo172 on 3/8/16.
 */
(function () {
  function setMessage (message, error) {
    var messageEl        = document.getElementById('message'),
      errorClass       = 'error',
      messageContainer = document.createElement('p');

    while (messageEl.lastChild) {
      messageEl.removeChild(messageEl.lastChild);
    }

    messageContainer.appendChild(document.createTextNode(message));
    messageEl.appendChild(messageContainer);

    if (error) {
      messageEl.className += ' ' + errorClass;
    } else {
      messageEl.className = messageEl.className.replace(new RegExp(' ' + errorClass, 'g'), '');
    }
  }

  window.onload = function () {
    document.getElementById('convertForm').onsubmit = function () {
      var csvField  = this.elements.csv,
        jsonField = this.elements.json,
        csvText   = csvField.value,
        csvObjects, jsonText;

      try {
        csvObjects = CSV.parse(csvText);

        jsonText = JSON.stringify(csvObjects, null, '\t');

        jsonField.value = jsonText;

        setMessage('CSV successfully converted to JSON.');
      } catch (e) {
        var message = 'Could not convert CSV to JSON: ' + e.message;

        setMessage(message, true);
      }

      return false;
    };
  };
}());
