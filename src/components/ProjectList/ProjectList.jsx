export default function ProjectList(props) {
  const { projects } = props;
  console.log(projects);
  return (
    <div className="project-list">
      {projects.map((project, index) => <img src={project.img} alt={project.category} className="project" key={index} />)}
    </div> 
  )
}