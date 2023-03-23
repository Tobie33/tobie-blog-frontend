import React from 'react'
import useProjects from '@/hooks/projects/useProjects'

import FormProjects from '@/components/forms/projects/ProjectsForm'

function PagesCreateProject() {
  const { apiProjectCreate } = useProjects()
  return (
    <div id="pages-another" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Create Project</h1>
          <FormProjects
            onSubmit={apiProjectCreate}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesCreateProject
