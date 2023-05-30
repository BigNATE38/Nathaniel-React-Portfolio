import React from 'react'

// The parameters fill in each component of the project card. This card is exported through project list and used in the portfolio index.js
const ProjectList =({ name, link, repo, image }) => (
<div className="allProjects card bg-light mb-3" style={{maxWidth: 25 +'rem', minHeight: 20 +'rem'}}>
    <div className="card-header">{name}</div>
    <div className="card-body">
        <img src={image} alt={name} />
        <a href={link}>Link</a>
        <a href={repo}>Repo</a>
    </div>
</div>

);

export default ProjectList; 