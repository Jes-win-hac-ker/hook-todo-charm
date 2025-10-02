import { useState, useEffect } from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { Task } from "@/components/TaskItem";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <CheckCircle2 className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Tasks
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Stay organized and productive
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-card p-6 mb-6">
          <TaskInput onAddTask={addTask} />
        </div>

        {tasks.length > 0 && (
          <div className="mb-4 text-center text-sm text-muted-foreground">
            {completedCount} of {tasks.length} tasks completed
          </div>
        )}

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-card p-6">
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default Index;
