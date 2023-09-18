import { Trash } from "phosphor-react";

export function TaskCard({
  id,
  taskTitle,
  isComplete,
  onDeleteTask,
  onCompletedTask,
}: {
  id: number;
  taskTitle: string;
  isComplete: boolean;
  onDeleteTask: (id: number) => void;
  onCompletedTask: (id: number) => void;
}) {
  function handleCompletedTasks() {
    onCompletedTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <li className="flex items-center justify-between p-4 gap-2 bg-gray-500 rounded-lg border border-gray-400">
      <input
        onChange={handleCompletedTasks}
        type="checkbox"
        className="appearance-none cursor-pointer h-6 w-6 border-2 rounded-full border-blue-light 
          hover:bg-blue-dark 
          checked:bg-purple-dark checked:border-transparent checked:hover:bg-purple-light"
      />
      <span
        className={
          isComplete
            ? "line-through text-gray-300 flex-1"
            : "text-gray-100 flex-1"
        }>
        {taskTitle}
      </span>
      <button
        onClick={handleDeleteTask}
        className="text-gray-300 hover:text-danger">
        <Trash size={24} />
      </button>
    </li>
  );
}
