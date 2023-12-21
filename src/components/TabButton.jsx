export default function TabButton({ children, isSelected, ...props }) {

  return (
    //Spread props also used to deal with the on click function and .
    <li>
    <button className ={isSelected ? 'active': ''} {...props} >
    {children}</button>
    </li>
  );
}