function Title({children}: {children: string;}) {
  return <h1 className='text-4xl font-bold first-letter:text-primary first-letter:capitalize'>{children}</h1>;
}

export default Title