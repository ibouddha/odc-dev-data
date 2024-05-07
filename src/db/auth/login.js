import { auth } from '@/config/firebase';
import { kdebug } from '@/constants'
import { signInWithEmailAndPassword } from "firebase/auth";
import React from 'react'

export const LoginWithEmailAndPassword  = async (user) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password)
        if (userCredential) {
            kdebug(`User: ${userCredential}`)
            return userCredential
        } else {
            kdebug(`User not found`)
            return null
        }
    } catch (error) {
        kdebug(`Error: ${error}`)
    }
}
