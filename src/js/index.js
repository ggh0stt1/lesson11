var work = prompt ("Please write the day of the week", "Monday");

debugger;

if (work == "Monday") {
    alert("Working day");
} else if (work == "Tuesday") {
    alert("Working day");
} else if (work == "Wednesday") {
    alert("Working day");
} else if (work == "Thursday") {
    alert("Working day");
} else if (work == "Friday") {
    alert("Working day");
} else if (work == "Saturday") {
    alert("Weekend");
} else if (work == "Sunday") {
    alert("Weekend");
} else {
    alert("Can not define, please try another value");
}

switch (work) {
    case "Monday":
      alert("Working day");
      break;
  
    case "Tuesday":
      alert("Working day");
      break;
  
    case "Wednesday":
      alert("Working day");
      break;
  
    case "Thursday":
      alert("Working day");
      break;

    case "Friday":
      alert("Working day");
      break;

    case "Saturday":
      alert("Weekend day");
      break;

    case "Sunday":
      alert("Weekend day");
      break;

    default:
      alert ("Can not define, please try another value");
      break;
}