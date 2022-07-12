import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { initselect2 } from '../components/form';
import "bootstrap";
import "controllers"


Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener('turbolinks:load', () => {
  initUpdateNavbarOnScroll();
  // initSortable();
  initselect2();

});

initselect2();
