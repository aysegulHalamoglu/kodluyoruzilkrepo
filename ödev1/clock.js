// ******** Greeting with your name ************

let enterName= prompt("Please, enter your name: ");
let enteredName = `${enterName[0].toUpperCase()}${enterName.slice(1).toLowerCase()}`;

if(enterName.length >0 ){
    document.querySelector("#myName").innerHTML= enteredName;
}


// ******** How time flies  ************

function showTime() {
    const d = new Date();
    console.log(d)
    let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#myClock").innerHTML = ` ${h} :  ${m} : ${s} ${days[d.getDay()]} `;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; // adding zero before numbers
    return i;
  }