function Title({children}: {children: string;}) {
  return <h1 className='text-7xl font-bold first-letter:capitalize border-b'>{children}</h1>;
}

export default Title