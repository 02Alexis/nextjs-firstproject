"use client"; //para manejador de eventos o estados la etiqueta link es un componente de 'servidor'
import Link from "next/link";

function Users({ users }) {
  return (
    <ul className="">
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li
            className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
            // onClick={() => {
            //   alert(user.id);
            // }}
          >
            <div>
              <h5 className="font-bold">
                {user.id} - {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-100">email: {user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.first_name}
              className="rounded-full w-20"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
