const minBid = 100;
const bidButton = document.getElementById('bid-button');
const bidInput = document.getElementById('bid-input');
const message = document.getElementById('message');

bidButton.addEventListener('click', () => {
  const bidValue = parseFloat(bidInput.value);

  if (isNaN(bidValue) || bidValue < minBid) {
    message.textContent = "O lance deve ser igual ou maior que R$ 100,00.";
    message.style.color = 'red';
    message.classList.remove('hidden');
  } else {
    message.textContent = `Lance de R$ ${bidValue.toFixed(2)} aceito com sucesso!`;
    message.style.color = 'green';
    message.classList.remove('hidden');
  }
});
