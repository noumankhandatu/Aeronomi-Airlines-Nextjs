import React from "react";
import Counter from "../../Home_One/About/Counter";

const CounterData = [
  {
    countStart: 100,
    countEnd: 12345,
    heading: "COMPANY ESTABLISHED",
    icon: " fas fa-building",
  },
  {
    countStart: 100,
    countEnd: 12345,
    heading: "COUNTRIES SERVED",
    icon: "fas fa-globe",
  },
  {
    countStart: 100,
    countEnd: 12345,
    heading: "PORTS SERVED",
    icon: " fas fa-building",
  },
];
const HomeTwoCounter = () => {
  return (
    <>
      <section
        id="counter_area_main"
        style={{
          backgroundImage: `url(${"https://transtic.netlify.app/static/media/track-bg.b82db464.jpg"})`,
        }}
      >
        <div className="container">
          <div className="row">
            {CounterData.map((data, index) => (
              <Counter
                countStart={data.countStart}
                countEnd={data.countEnd}
                heading={data.heading}
                icon={data.icon}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTwoCounter;
