(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){o.modal.classList.toggle("is-hidden");const e=o.modal.classList.contains("is-hidden")?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[e](document.body)}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)})();
//# sourceMappingURL=index.056d3459.js.map