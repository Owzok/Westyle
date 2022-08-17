const faqs = document.querySelectorAll(".faqjs");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

function avoidEmpty(){
    if (document.getElementById('fname').value == "") {
        alert('Por favor rellene el formulario');
        return false;
    }
}