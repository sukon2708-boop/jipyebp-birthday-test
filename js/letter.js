const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันครบรอบนะคะ/นะบี๋ 🤍  
ขอบคุณที่เข้ามาเป็นความน่ารักในชีวิตกันนะ  
ขอบคุณสำหรับทุกช่วงเวลาที่เราได้อยู่ด้วยกัน  
ขอให้เรายังมีกันแบบนี้ไปนาน ๆ เลยนะ  
ไม่ว่าจะผ่านไปกี่วัน กี่เดือน หรือกี่ปี  
ก็ยังอยากมีเธออยู่ข้าง ๆ ในทุก ๆ วันเลย 🫶🏻  
รักเธอมากนะ ♡
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
