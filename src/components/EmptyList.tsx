import Clipboard from "../assets/Clipboard.svg";

export function EmptyList() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={Clipboard} alt="Clipboard" />
      <h1 className="text-gray-300">
        <strong>
          Você ainda não tem tarefas cadastradas <br />
        </strong>
        Crie tarefas e organize seus itens a fazer
      </h1>
    </div>
  );
}
