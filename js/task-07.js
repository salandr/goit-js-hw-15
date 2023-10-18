const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

const initialFontSize = fontSizeControl.value;

text.style.fontSize = initialFontSize + 'px';

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
});
