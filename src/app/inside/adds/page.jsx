"use client";
import { addDocument, uploadImage } from '@/db/addData';
import React, { useState } from 'react';

const AddStudent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [loading , setLoading] = useState(false);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        if (!firstName || !lastName || !email || !phone ) {
            alert('Please fill in all fields');
            return;
        }
        if (avatar) {
            let url = await uploadImage(avatar, `students/avatars/${avatar.name}`);
            if (url) {
                addDocument('Students', {firstName, lastName, email, phone, avatar: url , promo_id : "CXk8MUhrPNP1iEP8wxi1"});
            }   
        } else {
            
            addDocument('Students', {firstName, lastName, email, phone, avatar: null, promo_id : "CXk8MUhrPNP1iEP8wxi1"});
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }

    };

    return (
        <div className='h-screen flex items-center justify-center'>
        <div className="max-w-md mx-auto px-4 ">
            <h1 className="text-3xl font-bold mb-8">Add Student</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="file"
                        placeholder="Avatar"
                        accept="image/*"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                {
                    loading ? <p>Loading...</p> :                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Add Student
                </button>
                }

            </form>
        </div>

        </div>
    );
};

export default AddStudent;
