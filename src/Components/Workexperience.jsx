const Workexperience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mt-6">Work Experience</h2>
      <div>
        <ul role="list" className="divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 w-12 h-12 flex-none rounded-full bg-gray-50 object-cover"
                src="freelancer.png"
                alt="freelancer-image"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Freelancer
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  Software Engineer
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Feb 2024 -Present</p>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="size-12 w-12 h-12 flex-none rounded-full bg-gray-50 object-cover"
                src="cognizant.svg"
                alt="freelancer-image"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  Cognizant Technology Solutions
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  Software Developer
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">June 2021 - Feb 2024</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Workexperience;
