import logo from "./assets/rocket.svg";
import { PlusCircle } from "phosphor-react";
import { TaskCard } from "./components/TaskCard";
import { EmptyList } from "./components/EmptyList";
import { FormEvent, useState } from "react";
import "./App.css";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  function onCompletedTask(id: number) {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTaskList(newTaskList);
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputElement = event.currentTarget[0] as HTMLInputElement;
    console.log(inputElement);
    setTaskList([
      ...taskList,
      {
        id: Math.random(),
        title: inputElement.value,
        isComplete: false,
      },
    ]);
  }

  function onDeleteTask(id: number) {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }

  function handleInvalidInput(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <div>
      <header className="flex justify-center items-center h-[200px] font-black text-[2.5rem] gap-3 bg-gray-700">
        <img src={logo} alt="To-Do Logo" />
        <h1 className="text-blue-light">
          to<span className="text-purple-dark">do</span>
        </h1>
      </header>
      <form
        className="flex justify-center items-center gap-2 mt-[-26px] max-w-3xl m-auto "
        onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="w-full bg-gray-500 p-4 rounded-lg border border-gray-700 text-gray-100 focus:outline-none focus:border-purple-dark placeholder:text-gray-300"
          onInvalid={handleInvalidInput}
          required
        />
        <button
          type="submit"
          className="flex justify-center items-center bg-blue-dark text-gray-100 p-4 gap-2 rounded-lg font-bold text-sm hover:bg-blue-light">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <section className="flex flex-col justify-center items-center w-full max-w-3xl m-auto">
        <header className="flex justify-between items-center gap-2 w-full mt-16 font-bold">
          <h2 className="text-blue-light mr-2">
            Tarefas Criadas{" "}
            <span className="bg-gray-400 px-2 py-[2px] text-gray-200 rounded-full text-[0.75rem]">
              {taskList.length}
            </span>
          </h2>
          <h2 className="text-purple-light">
            Concluídas{" "}
            <span className="bg-gray-400 px-2 py-[2px] text-gray-200 rounded-full text-[0.75rem]">
              {taskList.filter((task) => task.isComplete).length}
            </span>
          </h2>
        </header>
        <main
          className={
            taskList.length === 0
              ? "pt-16 mt-6 border-t w-full rounded-lg border-gray-400"
              : "flex flex-col justify-center pt-16 items-center mt-6 w-full"
          }>
          {taskList.length === 0 ? (
            <EmptyList />
          ) : (
            <ul className=" flex flex-col gap-3 w-full">
              {taskList.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  taskTitle={task.title}
                  isComplete={task.isComplete}
                  onDeleteTask={onDeleteTask}
                  onCompletedTask={onCompletedTask}
                />
              ))}
            </ul>
          )}
        </main>
      </section>
    </div>
  );
}
