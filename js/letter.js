const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันเกิดนะ 
ขอให้ปีนี้เป็นปีที่เต็มไปด้วยเรื่องราวดี ๆ
ขอให้เธอมีความสุขในทุก ๆ วัน
ได้ทำในสิ่งที่ชอบ ได้เจอแต่คนที่น่ารัก
และไม่ว่าจะเจออะไร ก็ขอให้ผ่านมันไปได้เสมอ
ขอบคุณที่เกิดมาให้เราได้รู้จักกันนะ 
ขอให้วันนี้และทุกวันหลังจากนี้ เป็นวันที่ดีของเธอเสมอ 

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
