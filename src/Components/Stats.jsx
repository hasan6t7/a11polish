import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div className="py-20" ref={ref}>
      <h1 className="text-3xl font-bold text-center text-purple-700">
        We Provide Our Best Services
      </h1>
      <p className="text-sm text-center mt-2 mb-10  w-11/12 mx-auto">
        A platform that helps individuals find compatible services based on
        location , budget and lifestyle.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mb-10">
        {/* card-1  */}
        <div>
          <div className="bg-base-200 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <p className=" mb-2 font-bold text-2xl text-purple-600">
              <CountUp
                start={0}
                end={inView ? 199 : 0}
                duration={10}
                redraw={true}
              />
              +
            </p>
            <h2 className="mb-2 opacity-80">Daily Find Posts</h2>
          </div>
        </div>
        {/* card-2  */}
        <div>
          <div className="bg-base-200 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <p className=" mb-2 font-bold text-2xl text-purple-600">
              <CountUp
                start={0}
                end={inView ? 467 : 0}
                duration={10}
                redraw={true}
              />
              +
            </p>
            <h2 className="mb-2 opacity-80">Recruiters</h2>
          </div>
        </div>
        {/* card-3  */}
        <div>
          <div className="bg-base-200 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <p className=" mb-2 font-bold text-2xl text-purple-600">
              <CountUp
                start={0}
                end={inView ? 50 : 0}
                duration={10}
                redraw={true}
              />
              +
            </p>
            <h2 className="mb-2 opacity-80">Moderator</h2>
          </div>
        </div>
        {/* card-4  */}
        <div>
          <div className="bg-base-200 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <p className=" mb-2 font-bold text-2xl text-purple-600">
              <CountUp
                start={0}
                end={inView ? 3000 : 0}
                duration={10}
                redraw={true}
              />
              +
            </p>
            <h2 className="mb-2 opacity-80">Happy Clients</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
