interface ButtonProps {
  className?: string
  children: React.ReactNode;
  onClick?: () => void
}

const Button = ({ onClick, children, className="" }: ButtonProps) => {
  return (
      <button
      onClick={onClick} 
      className={`px-6 py-3 rounded-full outline-none relative 
        overflow-hidden border border-transparent bg-violet-600 cursor-pointer 
        transform transition duration-300 ${className}`}>
          {children}
      </button>
  );
};

export default Button;