import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../lib/nextAuth";

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>user Info</h1>
      {session && (
        <div>
          <h2>{session?.user?.name}</h2> <h3>Email : {session.user?.email}</h3>
        </div>
      )}
    </div>
  );
};

export default page;
