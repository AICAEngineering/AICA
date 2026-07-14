import { Card } from "@/components/Card";

type InfoGridItem = {
  title: string;
  description: string;
};

type InfoGridProps = {
  items: InfoGridItem[];
  columns?: "two" | "three";
};

export function InfoGrid({ columns = "three", items }: InfoGridProps) {
  return (
    <div className={columns === "two" ? "grid gap-5 md:grid-cols-2" : "grid gap-5 md:grid-cols-3"}>
      {items.map((item, index) => (
        <Card interactive key={item.title}>
          <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-aica-100 bg-aica-50 text-xs font-bold text-aica-800">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
