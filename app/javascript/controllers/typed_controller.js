import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';

export default class extends Controller {
  connect() {
    // console.log("connnected")
    new Typed('#banner-typed-text', {
      strings: ["Select, add and rate movies in your own personal lists"],
      typeSpeed: 110,
      loop: 6
    });
  }
}
