import React from 'react'
import {PageTitle} from '../../components/PageTitle';
import {StudentForm} from '../../components/StudentForm'
export const AddStudent = () => {
  return (
    <div>
       <PageTitle title="Add Student" />
      <img src="/student.png" alt="" height={100} width={100} className='my-2'/>
      <StudentForm />
    </div>
  )
}
