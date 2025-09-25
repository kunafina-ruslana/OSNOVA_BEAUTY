 const modal_works = document.getElementById("modal-works");
    const modal_worksImg = document.getElementById("modalImg");
    const images = document.querySelectorAll(".gallery img");
    const closeBtnIMG = document.getElementById("close");
    const prevBtnIMG = document.getElementById("prev");
    const nextBtnIMG = document.getElementById("next");

    let currentIndex = 0;

    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        modal_works.style.display = "flex";
        modal_worksImg.src = img.src;
        currentIndex = index;
      });
    });

    closeBtnIMG.onclick = () => modal_works.style.display = "none";

    function showImage(index) {
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;
      modal_worksImg.src = images[index].src;
      currentIndex = index;
    }

    prevBtnIMG.onclick = () => showImage(currentIndex - 1);
    nextBtnIMG.onclick = () => showImage(currentIndex + 1);

    modal_works.addEventListener("click", e => {
      if (e.target === modal_works) modal_works.style.display = "none";
    });

    document.addEventListener("keydown", e => {
      if (modal_works.style.display === "flex") {
        if (e.key === "ArrowLeft") showImage(currentIndex - 1);
        if (e.key === "ArrowRight") showImage(currentIndex + 1);
        if (e.key === "Escape") modal_works.style.display = "none";
      }
    });