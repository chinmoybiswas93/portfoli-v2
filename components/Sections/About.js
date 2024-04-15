import H from "../H";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 sm:px-4"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <p className="pb-3">
        Back in 2021, I decided to try my hand at web development and tumbled
        head first into the rabbit hole of coding and web development.
        Fast-forward to today, and I’ve had the privilege of building web
        aplicatons for <H>small business</H>, <H>agency</H>, <H>start-up </H>
        and
        <H> ecommerce shop</H>.
      </p>
      <p className="pb-3">
        My main focus these days is building accessible user interfaces for our
        customers at <H>SeoPage1</H>. I most enjoy building application in
        wordpress where design and engineering meet — things that look good but
        are also built well under the hood. In my free time, I try to learn more
        about <H>PHP OOP, JavaScript</H> and system developemet principles.
      </p>
      <p className="pb-3">
        When I’m not at the computer, I’m usually play guiter, reading, hanging
        out with my wife and friends, or playing video games
      </p>
    </section>
  );
};

export default About;
