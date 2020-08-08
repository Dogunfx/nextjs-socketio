import { useEffect } from "react";
import Link from "next/link";
import io from "socket.io-client";

export default function Home() {
  useEffect(() => {
    const client = io();
  });
  return (
    <>
      <ul>
        <li>
          <Link href="/b" as="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/a" as="/b">
            <a>b</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
