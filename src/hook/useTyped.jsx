import { useState, useEffect } from 'react';

const useTyped = (strings, typeSpeed = 100, backSpeed = 50, loop = true) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentString = strings[loopNum % strings.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentString.substring(0, text.length - 1));
      }, backSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentString.substring(0, text.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && text === currentString) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, strings, typeSpeed, backSpeed]);

  return text;
};

export default useTyped;
