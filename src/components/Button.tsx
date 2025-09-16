
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}

export default function Button({ children, onClick, primary = false }: ButtonProps) {
  const baseClasses = "px-8 py-3 rounded-full font-bold font-poppins text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  const primaryClasses = "bg-purple-600 hover:bg-purple-700 text-white shadow-lg transform hover:scale-105";
  const secondaryClasses = "bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {children}
    </button>
  );
}
