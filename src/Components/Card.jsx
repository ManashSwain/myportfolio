const Card = () => {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <img
        src="https://via.placeholder.com/400x200" // Replace with your image URL
        alt="Project Thumbnail"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">Chat Collect</h2>
        <p className="text-sm text-gray-500 mt-1">Jan 2024 - Feb 2024</p>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-4">
          With the release of the OpenAI GPT Store, I decided to build a SaaS
          which allows users to collect email addresses from their GPT users.
          This is a great way to build an audience and monetize your GPT API
          usage.
        </p>

        {/* Tags */}
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

        {/* Website Button */}
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
    </>
  )
}

export default Card
