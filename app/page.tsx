import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="./user" className="border-2 bg-red-400">
        Userpage
      </Link>

      <div className="font-bold text-9xl text-center bottom-0">Hello world</div>
      <button className="btn btn-primary">this is button</button>
    </div>
  );
}
