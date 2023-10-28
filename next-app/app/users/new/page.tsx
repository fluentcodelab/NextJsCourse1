// Since this will be a client action, we transform as a client component
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => router.push('/users')}>
      Create
    </button>
  );
};
export default NewUserPage;
