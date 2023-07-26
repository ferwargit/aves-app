document.addEventListener('DOMContentLoaded', function () {
  const questionLinks = document.querySelectorAll('.question-link');

  questionLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const answer = this.dataset.answer;
          showAnswerModal(answer);
      });
  });

  function showAnswerModal(answer) {
      Swal.fire({
          title: 'Respuesta',
          text: answer,
          icon: 'info',
          confirmButtonText: 'Aceptar'
      });
  }
});