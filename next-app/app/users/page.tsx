import UserTable from '@/app/users/UserTable';
import Link from 'next/link';
import { Suspense } from 'react';

interface Props {
  searchParams: { sortOrder: string };
}

// /users?sortOrder=name
const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
