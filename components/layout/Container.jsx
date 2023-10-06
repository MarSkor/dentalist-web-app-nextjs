const Container = ({ variant = "", children, tag: Tag = 'div', className }) => {

  // find a better to way to add various props to the Container component
  const classNames = `${Tag} ${Tag}--${variant} ${className ? className : ""}`;
  
    return (
    <Tag className={classNames}>
      {children}
    </Tag>
  )
}

export default Container