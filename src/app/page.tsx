import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="contaner">
        <div className="intro">
          <h1>
            Hellow Friends,
            <br /> I am shane-e-zehra
          </h1>
          <p>
            I am student of GIAC
            <br />
            Next.js Developer
          </p>
        </div>

        <div className="profilePic">
          <Image src={"/profile.png"} alt="profile" height={400} width={400} />
        </div>
      </div>
    </div>
  );
}
