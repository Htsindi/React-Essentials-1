

export default function ({title, children, ...props}){
//to ensure all properties are identified such as id and calssName we add proxys we use spread props
  return(
    <section {...props}>
      <h2>
        {title}
      </h2>
      {children}
    </section>
  )
}