import Image from "next/image";
import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "@/components/TodoItem";


export default async function Home() {

  //Get Todo's
  const todos = await prisma.toDo.findMany()

  return (
    <main>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl"> Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
      </header>
      <ul className="pl-4">
        {todos.map(a =>(
          <TodoItem key={a.id} {...a}/>
        ))}
      </ul>
    </main>
  );
}
