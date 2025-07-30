# Lexymovix

Uma mini-engine de animação de texto em HTML.
Transforma textos em elementos animáveis caractere por caractere, em tempo real.


---

# Como usar

```
import { text } from './lexymovix.js';

text(elemento, (char, index, chars, tempo) => {
  char.position(x, y);
  char.rotate(graus);
  char.scale(fator);
});
```

## Parâmetros do callback

- `elemento`: o elemento DOM (ex: document.getElementById('texto'))

  - char: objeto de caractere animável, com métodos:
  - .position(x, y) → move o caractere
  - .rotate(graus) → rotaciona em graus
  - .scale(fator) → aplica zoom


- `index`: posição do caractere atual no texto

- `chars`: array com todos os objetos { obj, index }

- `tempo`: número de milissegundos desde que a animação começou (vem do requestAnimationFrame)



---

# Exemplo completo
```
text(document.getElementById('titulo'), (char, i, chars, t) => {
  const y = Math.sin(i * 0.5 + t * 0.01) * 20;
  char.position(i * 15, y);
  char.rotate(y * 0.5);
});
```