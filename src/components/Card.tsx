import { Calendar, ExternalLink } from "lucide-react";

interface Props {
  title: string;
  brief: string;
  duration: string;
  extra?: React.ReactNode;
  links?: { label: string; url: string }[];
}

export default function Card({ title, brief, duration, extra, links }: Props) {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      <p className="text-slate-400 mb-4">{brief}</p>

      <div className="flex items-center gap-2 text-sm text-slate-300 mb-4">
        <Calendar className="w-4 h-4 text-purple-400" />
        {duration}
      </div>

      {extra}

      {links && (
        <div className="mt-4 flex flex-col gap-2">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.url}
              target="_blank"
              className="flex items-center gap-2 text-purple-400 hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
