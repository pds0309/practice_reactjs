## React hook


- react 의 state machine 에 연결하는 기본적인 방법
- 코드를 더 간결하게
- 클래스 => 함수형 프로그래밍을 권장한다.



#### 클래스로 숫자 증감 기능을 만들어보자

```javascript
import React from "react";
import ReactDOM from "react-dom";

class AppForState extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Hi - {item}</h1>
        <div>
          <button onClick={this.increment}>증가</button>
          <button onClick={this.decrement}>감소</button>
        </div>
      </div>
    );
  }
  increment = () => {
    this.setState((state) => {
      return { item: state.item + 1 };
    });
  };
  decrement = () => {
    this.setState((state) => {
      return { item: state.item - 1 };
    });
  };
}
```


<br>


#### 리액트 훅을 이용해 숫자 증감기능을 만들어보자

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [item, setItem] = useState(1);
  const increment = () => setItem(item + 1);
  const decrement = () => setItem(item - 1);
  return (
    <div>
      <h1>Hi - {item}</h1>
      <div>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </div>
    </div>
  );
};
```

<br>

**코드가 간결해지고 가독성이 좋아진다**



