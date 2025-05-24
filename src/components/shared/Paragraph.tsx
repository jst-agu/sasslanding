type ParagraphProps = {
  className?: string;
  children: React.ReactNode;
};

const Paragraph = ({ className = '', children }: ParagraphProps) => {
  return (
    <p className={`text-base text-gray-700 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
