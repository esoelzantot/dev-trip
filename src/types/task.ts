export type Category = "General" | "Frontend" | "Backend" | "Flutter" | "UI/UX";
export type Priority = "High" | "Medium" | "Low";

export interface Task {
  id: number;
  title: string;
  brief: string;
  duration: string;
  deadline: string;
  category: Category;
  priority: Priority;
  neededSkills: string[];
  docLink: string;
  formLink: string;
}
