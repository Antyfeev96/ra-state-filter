export default function ProjectList(props) {
  const { projects } = props;
  return (
    <div className="project-list">
      {projects.map((project) => <img src={project.img} alt={project.category} className="project" key={project.img} />)}
    </div> 
  )
}