// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap";

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import { initUpdateNavbarOnScroll } from '../components/navbar';
import { initselect2 } from '../components/form';
import { initSweetalert } from '../plugins/initSweetalert';
import { initSortable } from '../plugins/initSortable';

document.addEventListener('turbolinks:load', () => {
  initUpdateNavbarOnScroll();
  initSortable();
  initselect2();
  initSweetalert('.button-delete',{
  title: "Are you sure? 😢",
  text: "This action cannot be reversed",
  icon: "warning",
  buttons: {
    cancel: {
      text: "Cancel",
      value: false,
      visible: true,
      className: "",
      closeModal: true,
    },
    confirm: {
      text: "OK",
      value: true,
      visible: true,
      className: "",
      closeModal: true,
      onOpen: () => Swal.getConfirmButton().focus()
    }
  },
}, (value) => {
    if(value) {
      const link = document.querySelector('#delete-link');
      link.click();
    }
  });

  initSweetalert('.delete-movie',{
  title: "Are you sure? 😢",
  text: "This action cannot be reversed",
  icon: "warning",
  buttons: {
    cancel: {
      text: "Cancel",
      value: false,
      visible: true,
      className: "",
      closeModal: true,
    },
    confirm: {
      text: "OK",
      value: true,
      visible: true,
      className: "",
      closeModal: true
    }
  }
}, (value) => {
    if(value) {
      const bookmark = document.querySelector('#delete-bookmark');
      bookmark.click();
    }
  });
});

initselect2();
