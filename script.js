const { body } = document;

function changeBg(num) {
  // check if bg already showed
  let prevBg;
  if (body.className) {
    prevBg = body.className;
  }

  // reset css for body
  body.className = ''
  switch (num) {
    case '1':
      return (prevBg === 'bg-1' ? false : body.classList.add('bg-1'));

    case '2':
      return (prevBg === 'bg-2' ? false : body.classList.add('bg-2'));

    case '3':
      return (prevBg === 'bg-3' ? false : body.classList.add('bg-3'));

    default:
      break;
  }
}