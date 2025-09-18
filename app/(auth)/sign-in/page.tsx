import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validations'

import React from 'react'

const page = () => (
  
    
      <AuthForm
       type="SIGN_IN"
       schema={signInSchema}
       defautValue ={{
        email: "",
        password: "",
       }}
       onSubmit={() => {}}
      />
    
  )


export default page
