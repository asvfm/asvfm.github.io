const autogrow = () => {
  const autoExpand = t => {
    t.style.height = "inherit";
    let e = window.getComputedStyle(t);
    const r = parseInt(e.getPropertyValue("border-top-width"), 10)
      + t.scrollHeight + parseInt(e.getPropertyValue("border-bottom-width"), 10);
    t.style.height = r + "px"
  };

  Array.prototype.forEach.call(document.querySelectorAll('textarea'), t => {
    autoExpand(t);
    t.addEventListener('input', t => {
      autoExpand(t.target);
    })
  });
};
