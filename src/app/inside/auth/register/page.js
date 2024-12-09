import { AuthLayout } from '@/components/auth/layout';
import { kdebug } from '@/constants';
import React from 'react'

const page = () => {
    const handleProviderLogin = async (provider) => {
        try {
          let userCredential;
          if (provider === "google") {
             userCredential = await LoginWithGoogle()
          }
          if (provider === "github") {
            userCredential = await LoginWithGithub()
          }
          if (userCredential) {
            kdebug(`User: ${userCredential}`)
          } else {
            // setError({title: 'Invalide', message: 'identifiants invalides'})
          }
        } catch (error) {
          kdebug(`Error here: ${error}`)
        }
    }
      return <AuthLayout image="/l4.jpg" >
    
      </AuthLayout>;
    };


export default page