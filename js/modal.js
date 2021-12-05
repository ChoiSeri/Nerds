const contactsOpen = document.querySelector('.contacts-mail');
const contactsPopup = document.querySelector('.modal-window');
const contactsClose = contactsPopup.querySelector('.modal-close');
const contactsName = contactsPopup.querySelector('[name=forename]');
const contactsEmail = contactsPopup.querySelector('[name=email]');
const contactsText = contactsPopup.querySelector('[name=message]');
const contactsForm = contactsPopup.querySelector('.modal-form');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
    storageName = localStorage.getItem('name');
    storageEmail = localStorage.getItem('email');
} catch (err) {
    isStorageSupport = false;
}

contactsOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    contactsPopup.classList.add('modal-window-current');
    contactsName.value = storageName;
    contactsEmail.value = storageEmail;
    if (!storageName) {
        contactsName.focus();
    } else if (!storageEmail) {
        contactsEmail.focus();
    } else {
        contactsText.focus();
    }
});

contactsClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    contactsPopup.classList.remove('modal-window-current');
    contactsPopup.classList.remove('modal-window-error');
});

contactsForm.addEventListener('submit', function (evt) {
    if (!contactsName.value || !contactsEmail.value) {
        evt.preventDefault();
        contactsPopup.classList.remove('modal-window-error');
        contactsPopup.offsetWidth = contactsPopup.offsetWidth;
        contactsPopup.classList.add('modal-window-error');
    } else if (isStorageSupport) {
        localStorage.setItem('name', contactsName.value);
        localStorage.setItem('email', contactsEmail.value);
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (contactsPopup.classList.contains('modal-window-current')) {
            evt.preventDefault();
            contactsPopup.classList.remove('modal-window-current');
            contactsPopup.classList.remove('modal-window-error');
        }
    }
});