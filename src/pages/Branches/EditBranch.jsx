import React from 'react'
import { useParams } from 'react-router-dom'
import useBranches from '@/hooks/branch/useBranches'

import BranchForm from '@/components/forms/branches/BranchForm'

function PagesEditBranches() {
  const { pid, bid } = useParams()
  const { apiBranchEdit } = useBranches()
  return (
    <div id="pages-another" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Edit Branch</h1>
          <BranchForm
            onSubmit={apiBranchEdit}
            pid={pid}
            bid={bid}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesEditBranches
