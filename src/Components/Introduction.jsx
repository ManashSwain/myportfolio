/* eslint-disable react/no-unescaped-entities */
const Introduction = () => {
  return (
    <>
      <div className="introduction">
        <div className="intro">
          <h1 className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I'm Manash 👋
          </h1>
          <p
            className="inline-block max-w-[600px] md:text-xl mt-6"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(-8px) translateZ(0px)",
            }}
          >
            Software Engineer turned Freelancer. I love building things and
            helping people. Very active on LinkedIn.
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
