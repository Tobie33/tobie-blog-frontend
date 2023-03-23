import React from 'react'

import FormBranches from '@/components/forms/branches/BranchForm'
import useBranches from '@/hooks/branch/useBranches'
import { useParams } from 'react-router-dom'

function PagesCreateBranches() {
  const { apiBranchCreate } = useBranches()
  const { pid } = useParams()
  return (
    <div id="pages-another" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Create a New Branch!</h1>
          <FormBranches
            onSubmit={apiBranchCreate}
            value={pid}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesCreateBranches
