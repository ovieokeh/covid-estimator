// credit to https://dev.to/buhrmi/svelte-component-transitions-5ie

import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 300),
  fallback(node) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      duration: 600,
      easing: quintOut,
      css: (t) => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
    };
  }
});

export { send, receive };
