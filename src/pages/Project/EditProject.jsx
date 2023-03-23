import React from 'react'
import useProjects from '@/hooks/projects/useProjects'

import FormProjects from '@/components/forms/projects/ProjectsForm'
import { useParams } from 'react-router-dom'

function PagesEditProject() {
  const { pid } = useParams()
  const { apiProjectEdit } = useProjects()
  return (
    <div id="pages-another" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Edit Project</h1>
          <FormProjects
            onSubmit={apiProjectEdit}
            pid={pid}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesEditProject
