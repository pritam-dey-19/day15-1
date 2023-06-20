const countriesAPI = "https://restcountries.com/v2/all";
const countriesTable = document.getElementById("countries-table");

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = country.name;
      row.appendChild(nameCell);

      const capitalCell = document.createElement("td");
      capitalCell.textContent = country.capital;
      row.appendChild(capitalCell);

      const languagesCell = document.createElement("td");
      languagesCell.textContent = country.languages.map(lang => lang.name).join(", ");
      row.appendChild(languagesCell);

      const populationCell = document.createElement("td");
      populationCell.textContent = country.population;
      row.appendChild(populationCell);

      const areaCell = document.createElement("td");
      areaCell.textContent = country.area;
      row.appendChild(areaCell);

      countriesTable.querySelector("tbody").appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error fetching countries API:", error);
  });
