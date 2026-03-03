const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    // إغلاق جميع العناصر الأخرى
    accordionItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
    // فتح أو غلق العنصر الحالي
    item.classList.toggle('active');
  });
});




const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

// تحميل البيانات من LocalStorage عند فتح الصفحة
window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem('contactFormData'));
  if (savedData) {
    form.name.value = savedData.name || '';
    form.email.value = savedData.email || '';
    form.phone.value = savedData.phone || '';
    form.guests.value = savedData.guests || '';
    form.date.value = savedData.date || '';
    form.message.value = savedData.message || '';
  }
});

form.addEventListener('submit', function(e){
  e.preventDefault();

  // حفظ البيانات في LocalStorage
  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    guests: form.guests.value,
    date: form.date.value,
    message: form.message.value
  };
  localStorage.setItem('contactFormData', JSON.stringify(formData));

  msg.style.display = 'block';
  // مش هنعمل reset عشان تبقى البيانات موجودة بعد الريفرش
});




// ===== Registration Form JS =====
const registrationForm = document.getElementById('registrationForm');
const registrationMsg = document.getElementById('registrationMessage');

registrationForm.addEventListener('submit', function(e){
  e.preventDefault();

  const regData = {
    fullname: registrationForm.fullname.value,
    email: registrationForm.email.value,
    phone: registrationForm.phone.value,
    role: registrationForm.role.value,
    startDate: registrationForm.startDate.value,
    startTime: registrationForm.startTime.value,
    notes: registrationForm.notes.value
  };

  localStorage.setItem('registrationData', JSON.stringify(regData));

  registrationMsg.style.display = 'block';
});



const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/send-whatsapp', async (req, res) => {
  const { name, email, phone, guests, message } = req.body;

  const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGuests: ${guests}\nMessage: ${message}`;

  try {
    await axios.post('https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages', {
      messaging_product: "whatsapp",
      to: "YOUR_NUMBER",
      text: { body: whatsappMessage }
    }, {
      headers: {
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
        'Content-Type': 'application/json'
      }
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));










