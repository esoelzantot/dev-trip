export type Category = "General" | "Frontend" | "Backend" | "Flutter" | "UI/UX";
export type Priority = "High" | "Medium" | "Low";

export interface Skill {
  id: number;
  title: string;
  brief: string;
  duration: string;
  category: Category;
  priority: Priority;
  resources: { name: string; url: string }[];
}
