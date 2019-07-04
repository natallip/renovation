import { preloader } from './preloader/preloader';
import { pagination } from './pagination/pagination';
import { burger } from './burger/burger';
import { animate } from './section-first-screen/section-first-screen';
import { calculator } from './section-calculator/section-calculator';
import { sliderWorks }  from './section-works/section-works';
import { callback }  from './section-order/section-order';
import { initMap } from './section-contacts/section-contacts';

preloader();
burger();
pagination();
animate();
calculator();
sliderWorks();
callback();
initMap();