function Persona(nombe, apellido, email, edad, esAlumno){
    this.nombe = nombe || "Ingresar nombre";
    this.apellido = apellido || "Ingresa apellido";
    this.email = email || "Ingresa email";
    this.edad = edad || "Ingresa edad";
    this.esAlumno = esAlumno || false;
}

Persona.prototype.getEdad = function(){
    return this.edad;
}

Persona.prototype.saludar = function (){
    return "Holas soy " + this.nombe + "mi apellido es " + this.apellido;
}

var persona1 = new Persona("Armando", "Martinez");

console.log(Persona)
console.log(persona1)
console,log(persona1.saludar)