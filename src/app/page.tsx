import Image from "next/image";
import TaskList from "./panel/TaskList";
import App from "./panel/page";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/panel">Go to app</Link>
  );
}
