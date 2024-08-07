import { Todos } from "@/components/todos";

export function Home() {
  const actualDate = new Date().getFullYear();
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center flex-col items-center px-2">
      <h1 className="text-xl font-bold mb-6 text-center text-white">Todos</h1>
      <Todos />
      <p className="my-6 text-center text-white">
        Criado por: Vithor Carlos | {actualDate}
      </p>
    </div>
  );
}
