export default function Container({ children }) {
  return <div className="flex flex-col bg-surface md:h-screen">{children}</div>;
}
