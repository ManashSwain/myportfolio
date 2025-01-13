const Skills = () => {
    const skills = [
        {  id: 1 , title: 'HTML5', },
        {  id: 2 , title: 'CSS3', },
        {  id: 3 , title: 'Tailwind CSS', },
        {  id: 4 , title: 'SASS', },
        {  id: 5 , title: 'Javascript', },
        {  id: 6 , title: 'Typescript', },
        {  id: 7 , title: 'React.js', },
        {  id: 8 , title: 'Next.js', },
        {  id: 9 , title: 'Redux', },
        {  id: 10 , title: 'Node.js', },
        {  id: 11 , title: 'Express.js', },
        {  id: 12 , title: 'MongoDB', },
      ];
  return (
    <>
    <div className="skills">
      <h2 className="text-xl font-bold mt-6">Skills</h2>
      <div className="mt-4">
        {skills.map((skill)=>{
                return<button key={skill.id} className="rounded-md bg-slate-800 py-1 m-1 px-2 border border-transparent text-center text-xs text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                {skill.title}
              </button>
        })}
        </div>
    </div>   
    </>
  )
}

export default Skills
