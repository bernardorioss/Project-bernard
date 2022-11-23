
window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});

function voltar() {
   window.location.href = "pagina.html";
 }

 function quizz() {
   window.location.href = "quizz.html";
 }
