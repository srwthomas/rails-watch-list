import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';

export default class extends Controller {
  connect() {
    console.log("connnected")
    new Typed('#banner-typed-text', {
      strings: ["Add movies to your personal lists and rate them!"],
      typeSpeed: 100,
      loop: true
    });
  }
}
