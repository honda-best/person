window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surNameOutput').innerText = initPerson.lastName;
  document.getElementById('secondNameOutput').innerText = initPerson.secondName;
  document.getElementById('genderOutput').innerText = initPerson.gender;
  document.getElementById('birthYearOutput').innerText = initPerson.year;
  document.getElementById('professionOutput').innerText = initPerson.profession;
};

document.getElementById('btnСlear').addEventListener('click', function () {
  document.getElementById('firstNameOutput').innerText = "";
  document.getElementById('surNameOutput').innerText = "";
  document.getElementById('secondNameOutput').innerText = "";
  document.getElementById('genderOutput').innerText = "";
  document.getElementById('birthYearOutput').innerText = "";
  document.getElementById('professionOutput').innerText = "";
  
})

document.getElementById('btnReset').addEventListener('click', function () {
  let initPerson = personGenerator.getPerson();
  document.getElementById('firstNameOutput').innerText = initPerson.firstName;
  document.getElementById('surNameOutput').innerText = initPerson.lastName;
  document.getElementById('secondNameOutput').innerText = initPerson.secondName;
  document.getElementById('genderOutput').innerText = initPerson.gender;
  document.getElementById('birthYearOutput').innerText = initPerson.year;
  document.getElementById('professionOutput').innerText = initPerson.profession;
  
})