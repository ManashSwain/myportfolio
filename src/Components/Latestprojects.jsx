const Latestprojects = () => {
  return (
    <>
      <div className="text-center my-12">
        <button
          className="rounded-md bg-slate-800 py-1 m-1 px-2 border border-transparent text-center text-xs text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          My Projects
        </button>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl my-2">
          Check out my latest work
        </h2>
        <p className="my-2text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I have worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="best-projects mt-4 flex flex-row justify-center gap-6">
        {/* Project Card 1 */}
        <div className="max-w-sm w-[50%] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Chat Collect
            </h2>
            <p className="text-sm text-gray-500 mt-1">Jan 2024 - Feb 2024</p>
            <p className="text-sm text-gray-600 mt-4">
              With the release of the OpenAI GPT Store, I decided to build a
              SaaS which allows users to collect email addresses from their GPT
              users. This is a great way to build an audience and monetize your
              GPT API usage.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Website
              </a>
            </div>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="max-w-sm w-[50%] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Chat Collect
            </h2>
            <p className="text-sm text-gray-500 mt-1">Jan 2024 - Feb 2024</p>
            <p className="text-sm text-gray-600 mt-4">
              With the release of the OpenAI GPT Store, I decided to build a
              SaaS which allows users to collect email addresses from their GPT
              users. This is a great way to build an audience and monetize your
              GPT API usage.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="best-projects mt-4 flex flex-row justify-center gap-6">
        {/* Project Card 1 */}
        <div className="max-w-sm w-[50%] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Chat Collect
            </h2>
            <p className="text-sm text-gray-500 mt-1">Jan 2024 - Feb 2024</p>
            <p className="text-sm text-gray-600 mt-4">
              With the release of the OpenAI GPT Store, I decided to build a
              SaaS which allows users to collect email addresses from their GPT
              users. This is a great way to build an audience and monetize your
              GPT API usage.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Website
              </a>
            </div>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="max-w-sm w-[50%] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Chat Collect
            </h2>
            <p className="text-sm text-gray-500 mt-1">Jan 2024 - Feb 2024</p>
            <p className="text-sm text-gray-600 mt-4">
              With the release of the OpenAI GPT Store, I decided to build a
              SaaS which allows users to collect email addresses from their GPT
              users. This is a great way to build an audience and monetize your
              GPT API usage.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latestprojects;
