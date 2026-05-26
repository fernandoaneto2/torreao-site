'use client';

export default function ModalTriggerButton({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={className}
      onClick={() => window.dispatchEvent(new Event('modal:open'))}
    >
      {children}
    </button>
  );
}
