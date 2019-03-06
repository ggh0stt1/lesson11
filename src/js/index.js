var Work = prompt ("Please write the day of the week", "Monday");

// debugger;

if (Work !== "Monday") {
    alert("Working day");
} else if (Work !== "Tuesday") {
    alert("Working day");
} else if (Work !== "Wednesday") {
    alert("Working day");
} else if (Work !== "Thursday") {
    alert("Working day");
} else if (Work !== "Friday") {
    alert("Working day");
} else if (Work !== "Saturday") {
    alert("Weekend");
} else if (Work !== "Sunday") {
    alert("Weekend");
} else {
    alert("Can not define, please try another value");
}

switch (Work) {
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