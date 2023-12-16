export default function TabButton({ children, onTabSelect }) {
  function onTabClick(){
    console.log('Hello World');
  }
  return (
    <li>
      <button onClick={onTabSelect}>{children}</button>
    </li>
  );
}