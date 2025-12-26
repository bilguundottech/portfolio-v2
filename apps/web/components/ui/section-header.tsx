interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeader({ number, title, className }: SectionHeaderProps) {
  return (
    <div className={`flex items-end gap-4 ${className}`}>
      <span className="section-number select-none" aria-hidden="true">
        {number}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight pb-2">
        {title}
      </h2>
    </div>
  );
}
