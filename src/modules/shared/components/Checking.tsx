import { Checkbox, Spin } from "antd";
import { useEffect, useState } from "react";

interface CheckingProps {
  checked: boolean;
  time: number;
}

export default function Checking({ checked, time }: CheckingProps) {
  const [showSpinner, setShowSpinner] = useState(true);
  const [spinnerCompleted, setSpinnerCompleted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
      setSpinnerCompleted(true);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      {showSpinner && <Spin />}
      {spinnerCompleted && <Checkbox checked={checked} />}
    </>
  );
}
