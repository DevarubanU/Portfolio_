import React from 'react'

const Skills = () => {

    let skills=["HTML","CSS","JavaScript","React Js","Python","SQL","Node.js","Express.js"];

  return (
    <section
        id="skills"
        className="max-w-5xl mx-auto px-5 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill} className="bg-blue-500 text-white text-center p-4 rounded-xl shadow-lg">
              {skill}
            </div>
          ))}
        </div>
      </section>
  )
}

export default Skills