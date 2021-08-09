import { useEffect, useRef } from 'react';
import { useState } from 'react';
import './styles/styles.css';

interface IProps {
  value: string;
  isValid: boolean;
}

function PhoneNumber(props: IProps) {
  const { value, isValid } = props;
  const [number, setNumber] = useState('+7(___)___-__-__');
  const previousVal = usePreviousValue(value);

  /** Hook for checking previous phone number value to compare with current */
  function usePreviousValue(value: string) {
    const ref = useRef<string>('');
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    const numTemp = number.split('');
    if (value.length > previousVal.length) {
      const firstUnderlineIndex = numTemp.findIndex((val) => val === '_');
      numTemp[firstUnderlineIndex] = value.charAt(value.length - 1);
      setNumber(numTemp.join(''));
    } else {
      const lastLetterIndex = numTemp
        .reverse()
        .findIndex((val) => val === previousVal.charAt(previousVal.length - 1));

      lastLetterIndex > -1 && (numTemp[lastLetterIndex] = '_');
      setNumber(numTemp.reverse().join(''));
    }
  }, [value]);

  return (
    <span className={`phoneNumber ${!isValid ? 'notValid' : ''}`}>
      {number}
    </span>
  );
}

export default PhoneNumber;
