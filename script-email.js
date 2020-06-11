function sendEmail() 
{
    var byClass_nombres = document.getElementById("inNombre").value;
    var byClass_apellidos = document.getElementById("inApellido").value;
    var byClass_mail = document.getElementById("inCorreo").value;

	Email.send(
        {
            SecureToken : "b98a77ae-6e40-4988-ab81-295f5c38fd7e",
            To : "mezacando.anderson@gmail.com",
            From : "andyys06@gmail.com",
            Subject : "Hola! quiero contactarte",
            Body : "Hola, soy " + byClass_nombres + byClass_apellidos+ " mi correo electrónico es " + byClass_mail + " y me gustaría trabajar contigo."
    	}).then(
		message => alert("¡Se ha enviado el correo exitosamente!, muy pronto me pondré en contacto contigo")
	);
}