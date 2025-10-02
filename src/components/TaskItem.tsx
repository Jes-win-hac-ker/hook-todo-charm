import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card hover:shadow-hover transition-smooth group">
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        className="data-[state=checked]:bg-success data-[state=checked]:border-success"
      />
      <span
        className={`flex-1 text-base transition-smooth ${
          task.completed
            ? "line-through text-muted-foreground opacity-60"
            : "text-foreground"
        }`}
      >
        {task.title}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 transition-smooth hover:bg-destructive/10 hover:text-destructive"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default TaskItem;
