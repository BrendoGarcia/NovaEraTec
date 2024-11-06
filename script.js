document.addEventListener("DOMContentLoaded", function () {
    // Função para animação de entrada ao rolar para a seção
    function handleScrollAnimation() {
      const elements = document.querySelectorAll('.product-card, .service');
      const windowHeight = window.innerHeight;
      
      elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
  
        if (position < windowHeight * 0.8) {
          el.style.animationPlayState = 'running';
        }
      });
    }
  
    // Ativar animação na rolagem
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Formulário de contato
    const form = document.getElementById("form-contato");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Simulação de envio de formulário
      alert("Mensagem enviada com sucesso!");
  
      form.reset();
    });
  
    // Ativar animações na carga inicial
    handleScrollAnimation();
  });
  