export default function TabButton(props) {
   function hadleClick() {
      console.log(`Hello from ${props.children}`);
   }
   return (
      <li>
         <button onClick={hadleClick}>{props.children}</button>
      </li>
   );
}
