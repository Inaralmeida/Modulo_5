function mudaFontSize(size) {
  return () => {
    document.body.style.fontSize = `${size}px`;
  };
}

const sizeSmall = mudaFontSize(12);
document.body.addEventListener("click", sizeSmall);
