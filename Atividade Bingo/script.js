document.addEventListener('DOMContentLoaded', () => {
  console.log('Script carregado!');

  const bingoBtn = document.querySelector('.bingoButton');
  if (!bingoBtn) {
    console.error('Botão BINGO não encontrado!');
    return;
  }

  bingoBtn.addEventListener('click', () => {
    console.log('BINGO clicado!');

    launchConfetti();
  });

  function launchConfetti() {
    const colors = ['#622239', '#89465d', '#b35370', '#cb5a7e', '#d1708a', '#cd7a90ff'];

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = 3 + Math.random() * 3 + 's';
      confetti.style.width = confetti.style.height = (5 + Math.random() * 7) + 'px';

      document.body.appendChild(confetti);

      confetti.addEventListener('animationend', () => {
        confetti.remove();
      });
    }
  }
});
