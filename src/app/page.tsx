import Image from "next/image";
import Todo from "./ui/todo";
import Actions from "./ui/actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="container todo-container">
        <Actions />
        <Todo />
      </div>
    </main>
  );
}
