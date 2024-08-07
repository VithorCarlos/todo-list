import { Todos } from "@/components/todos";

export function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center flex-col items-center">
      <h1 className="text-xl font-bold mb-6 text-center text-white">Todos</h1>
      <Todos />
    </div>
  );
}
