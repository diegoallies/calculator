let people = ["Lilitha", "Kago", "Amaarah", "Unathi", "Kyle", "Bongani"];

for (let i = 0; i < people.length; i++) {
  document.getElementById("people").innerHTML += `<li>${people[i]}</li>`;
}