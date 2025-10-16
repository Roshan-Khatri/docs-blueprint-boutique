import type { PortableTextBlock } from '@/sanity/types';
export default function PortableText({ value, className }: { value?: PortableTextBlock[]; className?: string }) {
  if (!value?.length) return null;
  return (
    <div className={className}>
      {value.map((block, i) => (
        <p key={i}>{block.children?.map((span) => span.text).join(' ')}</p>
      ))}
    </div>
  );
}