import AddNewUser from '@/components/addUser'
import React from 'react'

function UserManagement() {
  return (
    <div className='p-20 max-w-6xl'>
          <div className='flex justify-between'>
                <h1>User Management</h1>
                <AddNewUser/>
          </div>
    </div>
  )
}

export default UserManagement