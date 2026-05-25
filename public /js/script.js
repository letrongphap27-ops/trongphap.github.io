
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    this.closest('.size-grid')
        .querySelectorAll('.size-btn')
        .forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll('.swatch').forEach(sw => {
  sw.addEventListener('click', function () {
    this.closest('.color-swatches')
        .querySelectorAll('.swatch')
        .forEach(s => s.classList.remove('active'));
    this.classList.add('active');
  });
});