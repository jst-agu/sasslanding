interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className = "" }: ContainerProps ) => {
  return (
    <div className={`mx-auto max-w-7xl w-full sm:px-8 md:px-14 lg:px-5 ${className}`}>{children}</div>
  )
}

export default Container