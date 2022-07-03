export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + inscremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
      console.log(timer);
    });
  }
}

function handleMutation(mutation) {
  if (mutation[0].target.classlist.contains("ativo")) {
    observer.disconnect();
    animaNumeros();
  }
}

const observerTarget = document.querySelectorAll(".numeros");
const observer = new MutationObserver(handleMutation);

observer.observe(observerTarget, { attributes: true });
