// create a message function
document
  .getElementById("messageText")
  .addEventListener("focusout", function () {
    let messageText = encodeURIComponent(
      document.getElementById("messageText").value
    );
    // send whatsapp message directly without safe the phone number
    document
      .getElementById("sendMessage")
      .addEventListener("click", function () {
        let phoneNumber = document.getElementById("phoneNumber").value;
        let whatsappLink = `https://wa.me/${phoneNumber}?text=${messageText}`;
        window.open(whatsappLink);
      });
  });
