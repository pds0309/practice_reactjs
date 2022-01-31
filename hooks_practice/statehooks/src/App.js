import State from "./State";
import useInput from "./useInput";
import { useTabs } from "./useTab";


const content = [
  {
    tab: "section 1",
    content: "I am sec1's content"
  },
  {
    tab: "section 2",
    content: "I am sec2's content"
  }
];


const App = () => {
  const validator = (val) => !val.includes("@");
  const name = useInput("hello", validator);
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div>
      <State />
      <input placeholder="Name" {...name} />
      <div>
        <br />
        {content.map( (section,index) => (
          <button onClick={()=>changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}

export default App;
