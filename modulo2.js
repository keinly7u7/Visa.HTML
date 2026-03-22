const municipios ={
    Huila: ["Neiva", "Pitalito", "Garzon", "Palermo", "El Agrado"],
    Cundinamarca: ["Bogotá", "Soacha", "Mosquera", "Chía", "Fusagasugá"],
    Antioquia: ["Medellín", "Bello", "Itagüi", "Rionegro", "Santa Fé de Antioquia"],
    Atlantico: ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia", "Sabanalarga"]
};

const muniSelect = document.getElementById("municipio");
muniSelect.disabled = true;

document.getElementById("departamento").addEventListener("change", function(){
    const depto = this.value;
    const muniSelect = document.getElementById("municipio");

    muniSelect.innerHTML ="<option value=''>Seleccione municipio</option>";

     muniSelect.disabled = false;
    if (municipios[depto]){
        municipios[depto].forEach(m => {
            const option = document.createElement("option");
            option.value = m;
            option.textContent = m;
            muniSelect.appendChild(option);
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {

    const selectPais = document.getElementById("live_other_country");
    const campoPais = document.getElementById("campoPais");

    selectPais.addEventListener("change", function() {
        if (this.value === "si") {
            campoPais.style.display = "block";
        } else {
            campoPais.style.display = "none";
        }
    });

});