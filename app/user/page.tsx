import Link from "next/link";
import { Suspense } from "react";
interface user {
  id: number;
  name: string;
}

const Userspage = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const userdata: user[] = await data.json();
  return (
    <>
      <div className="text-3xl font-light">Userspage</div>
      <Link href="/" className="hover:bg-amber-400">
        Go back to homepage
      </Link>
      <Suspense fallback={<p>loading...</p>}>
        <ul>
          {userdata.map((currentuser) => (
            <li key={currentuser.id}>{currentuser.name}</li>
          ))}
        </ul>
      </Suspense>
    </>
  );
};

export default Userspage;
