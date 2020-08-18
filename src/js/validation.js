import $ from 'jquery';
import Inputmask from 'inputmask';
// import inputmask from 'node_modules/inputmask/dist/inputmask.min';

export default function formValidation() {


  $('#designForm1').validate({
    errorClass: 'form__error',
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      }
    },
    messages: {
      userName: {
        // required: 'Имя обязательно',
        required: 'Имя обязательно',
        minlength: 'Слишком короткое имя',
        maxlength: 'Слишком длинное имя'
      },
      userPhone: {
        required: 'Телефон обязательно',
        minlength: 'Введите телефон правильно'
      },
    }
  });

  $('#designForm2').validate({
    errorClass: 'form__error',
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      }
    },
    messages: {
      userName: {
        // required: 'Имя обязательно',
        required: 'Имя обязательно',
        minlength: 'Слишком короткое имя',
        maxlength: 'Слишком длинное имя'
      },
      userPhone: {
        required: 'Телефон обязательно',
        minlength: 'Введите телефон правильно'
      },
    }
  });

  $('#popupForm').validate({
    errorClass: 'form__error',
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      }
    },
    messages: {
      userName: {
        // required: 'Имя обязательно',
        required: 'Имя обязательно',
        minlength: 'Слишком короткое имя',
        maxlength: 'Слишком длинное имя'
      },
      userPhone: {
        required: 'Телефон обязательно',
        minlength: 'Введите телефон правильно'
      },
    }
  });



  let selector = document.querySelectorAll('[type=tel]');
  Inputmask({
    mask: '+7 (999) 999 99 99',
    showMaskOnHover: false,
  }).mask(selector);

}