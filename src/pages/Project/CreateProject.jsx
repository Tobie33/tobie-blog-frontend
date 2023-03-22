import React from 'react'
import useProjects from '@/hooks/projects/useProjects'

import FormProjectsCreate from '@/components/forms/projects/ProjectsCreate'

function PagesCreateProject() {
  const { apiProjectCreate } = useProjects()
  return (
    <div id="pages-another" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Create Project</h1>
          <FormProjectsCreate
            onSubmit={apiProjectCreate}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesCreateProject
