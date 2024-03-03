function sendMail(){
    let params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_6zpdfwf","template_dabrjdl",params).then(alert("Email Sent!!!"))
}