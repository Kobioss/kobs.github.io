function getMachineId() {
    
    let machineId = localStorage.getItem('MachineId');
    
    if (!machineId) {
        machineId = crypto.randomUUID();
        localStorage.setItem('MachineId', machineId);
    }

    return machineId;
}

let result;
function count(clicked_id)
  {
  var counter = document.getElementById('counter').innerHTML;
    var parsed = parseInt(counter);
      result = clicked_id == "minus" ? parsed - 1 : parsed + 1;
      if(result >= 0 && result <= 340)
        document.getElementById('counter').innerHTML = result;
  }

function save(clicked_id)
{
  const writeToTextFile = (text, fileName) => {
  let textFile = null;
  const makeTextFile = (text) => {
    const data = new Blob([text], {
      type: 'text/plain',
    });
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
  };
  const link = document.createElement('a');
  link.setAttribute('download', fileName);
  link.href = makeTextFile(text);
  link.click();
};

  const data = getMachineId() + "\n" + result + ' votes';
  writeToTextFile(data, 'votant.txt');
}

function restore(clicked_id)
{

}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (var j = 2; j < td.length; j++) {
      txtValue = td[j].textContent || td[j].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 && j < 5) {
        tr[i].style.display = "";
        break;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Get the input field
var input = document.getElementById("password");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("Button1").click();
  }
});

let popupAlreadyShowed = false
document.getElementById('popup').style.display = 'block'
popupAlreadyShowed = true
document.getElementById("password").focus();

document.getElementById('Button1').addEventListener('click', function(e) {
	if(document.getElementById('password').value == "Allah") {
		document.getElementById('popup').style.display = 'none';
		document.getElementById("myInput").focus();
	}
})

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);
