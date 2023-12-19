
export default function Section({title, children, ...props}){
// ...props will import all the properties of section  and css
  return(
<section {...props} >
  <h2>{title}</h2>
  {children}
</section>
)

} 