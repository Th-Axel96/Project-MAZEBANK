// get the date/hour
const dayDate = document.getElementById("day-date");

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showDate() {
  while (true) {
    await pause(1000);
    var cejour = new Date();
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    var date = cejour.toLocaleDateString("fr-FR", options);
    var heure =
      ("0" + cejour.getHours()).slice(-2) +
      ":" +
      ("0" + cejour.getMinutes()).slice(-2) +
      ":" +
      ("0" + cejour.getSeconds()).slice(-2);
    var dateheure = date + " " + heure;
    var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, (lettre) =>
      lettre.toUpperCase()
    );
    dayDate.innerHTML = dateheure;
  }
}
showDate();


export default showDate