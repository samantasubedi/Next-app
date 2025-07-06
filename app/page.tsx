import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="./user">userpage</Link>
      <div className="font-bold text-9xl text-center">Hello world</div>
    </div>
  );
}
