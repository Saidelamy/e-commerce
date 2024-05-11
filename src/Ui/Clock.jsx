import React, { useEffect, useState } from 'react';

function Clock() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval;

  const countDown = () => {
    const destination = new Date('Jun 10, 2024').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.cuurent);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  }, []);

  return (
    <>
      <div className=" flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="text-center">
            <h1 className="">{days}</h1>
            <h4>Days</h4>
          </div>
          <span className="">:</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-center">
            <h1 className="">{hours}</h1>
            <h4>Hours</h4>
          </div>
          <span className="">:</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-center">
            <h1 className="">{minutes}</h1>
            <h4>Minutes</h4>
          </div>
          <span className="">:</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-center">
            <h1 className="">{seconds}</h1>
            <h4>Seconds</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clock;
