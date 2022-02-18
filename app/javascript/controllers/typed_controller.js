import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';

export default class extends Controller {
  connect() {
    console.log("connnected")
    new Typed('#banner-typed-text', {
      strings: ["Let's binge watch some movies!"],
      typeSpeed: 100,
      loop: true
    });
  }
}
