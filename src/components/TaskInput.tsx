import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTask(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 h-12 text-base shadow-card transition-smooth focus:shadow-hover"
      />
      <Button
        type="submit"
        className="h-12 px-6 gradient-primary shadow-card hover:shadow-hover transition-smooth"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add
      </Button>
    </form>
  );
};

export default TaskInput;
