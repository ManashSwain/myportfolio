const Education = () => {
  return (
  <>
  <h2 className="text-xl font-bold mt-6">Education</h2>
   <div>
   <ul role="list" className="divide-y divide-gray-100">
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
    <img
                className="size-12 w-12 h-12 flex-none rounded-full bg-gray-50 object-cover"
                src="public/Anna_University_Logo.svg.png"
                alt="annauniversity-image"
              />
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold text-gray-900">Anna University</p>
        <p className="mt-1 truncate text-xs/5 text-gray-500"> </p>
        <p className="mt-1 truncate text-xs/5 text-gray-500">B.E - Bachelor of Engineering </p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm/6 text-gray-900">Aug 2016 - Oct 2020</p>
      
    </div>
  </li>
  
</ul>
   </div>
  </>
  )
}

export default Education
