const TOKEN = '7283568645:AAGrjpvRxsrCkPJsKcwObPmAjb1PgP1ZkSY';
const CHAT_ID = '-4911735305';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const modal = document.getElementById("modalForm");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");
    const form = document.getElementById("bookingForm");

  const modalForm = document.getElementById("modalForm");
  const modalConfirm = document.getElementById("modalConfirm");
  const closeConfirm = document.getElementById("closeConfirm");
  const closeModal = document.getElementById("closeModal");
  
 openBtn.onclick = () => modal.style.display = "flex";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

function validateForm(form) {
    let isValid = true;

    const name = form.name.value.trim();
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (!nameRegex.test(name)) {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }
    const phone = form.phone.value.trim();
    const phoneRegex = /^[0-9+\-\s()]{10,11}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }
    if (form.service.value === "") {
        document.getElementById("serviceError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("serviceError").style.display = "none";
    }
    const today = new Date().toISOString().split("T")[0];
    if (form.date.value < today) {
        document.getElementById("dateError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("dateError").style.display = "none";
    }
    if (!form.time.value) {
        document.getElementById("timeError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("timeError").style.display = "none";
    }

    return isValid;
}

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm(this)) return;

let name = this.name.value;
    let phone = this.phone.value;
    let service = this.service.value;
    let date = this.date.value;
    let time = this.time.value;

    let message = `<b>Новая заявка!</b>\n\nИмя: ${name}\nТелефон: ${phone}\nУслуга: ${service}\nДата: ${date}\nВремя: ${time}`;

    fetch(URL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, parse_mode: "HTML", text: message })
    })
    .then(res => {
      if (res.ok) {
        form.reset();
        modalForm.style.display = "none";
        modalConfirm.style.display = "flex"; 
      }
    })
    .catch(err => console.warn(err));
  });

  closeConfirm.onclick = () => modalConfirm.style.display = "none";
  closeModal.onclick = () => modalForm.style.display = "none";