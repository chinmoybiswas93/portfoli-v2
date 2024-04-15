import { getSettings } from "@/lib/api";

const Intro = async () => {
  const settings = await getSettings();
  return (
    <div className="sm:pr-28 pr-20">
      <h1 className="sm:text-5xl text-4xl font-bold text-slate-200 pb-3">
        {settings.title}
      </h1>
      <h3 className="text-xl text-slate-200 pb-4 font-semibold">
        Senior Wordpress Developer
      </h3>
      <p>{settings.description}</p>
    </div>
  );
};

export default Intro;
