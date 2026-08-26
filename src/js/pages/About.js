// About is folded into the single-page Home view. Kept as a thin alias so any
// leftover `#/` / `#/portfolio` hashes still resolve to the same experience.
import Home from './Portafolio';

export default {
    ...Home,
    name: 'about'
};
