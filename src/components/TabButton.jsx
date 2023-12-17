export default function TabButton({ children, onTabSelect, isSelected }) {

  return (
    <li>
      <button className ={isSelected ? 'active': ''} onClick={onTabSelect}>{children}</button>
    </li>
  );
}