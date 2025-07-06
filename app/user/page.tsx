import Link from "next/link";
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
      <ul>
        {userdata.map((currentuser) => (
          <li key={currentuser.id}>{currentuser.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Userspage;
