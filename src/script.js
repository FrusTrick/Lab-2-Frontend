//Portfolio Modal
const modal = document.getElementById("portfolioModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

if (modal && openBtn && closeBtn) {

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}


// Easter Egg 1 (Footer) Trigger by clicking on the footer text! 
const easter1 = document.getElementById("easteregg1");

if (easter1) {
    easter1.addEventListener("click", () => {
        document.body.classList.toggle("easter-bg");
    });
}


//Easter Egg 2 - trigger by typing (1337)
const easterModal = document.getElementById("easterModal");
const easterCloseBtn = document.getElementById("close");

if (easterModal && easterCloseBtn) {

    let typedKeys = "";
    const secretCode = "1337";

    document.addEventListener("keydown", (incoming) => {
        typedKeys += incoming.key;

        if (typedKeys.endsWith(secretCode)) {
            easterModal.style.display = "flex";
            typedKeys = "";
        }
    });

    easterCloseBtn.addEventListener("click", () => {
        easterModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === easterModal) {
            easterModal.style.display = "none";
        }
    });
}