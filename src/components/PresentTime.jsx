/*
let PresentTime = () =>{
  let time = new Date();
  return <p className="lead">The current time is: {time.toLocaleDateString()} = {time.toLocaleTimeString()} </p>
}
export default PresentTime;
*/
//The above code only show present time and date and on refresh will change

import { useEffect, useState } from "react";

let PresentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <p className="lead">
      The current time is: {time.toLocaleDateString()} ={" "}
      {time.toLocaleTimeString()}{" "}
    </p>
  );
};
export default PresentTime;
