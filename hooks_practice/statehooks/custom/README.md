#### References

- useRef()
	- component의 특정 부분을 선택할 수 있는 방법이다.
	- `getElementById()` 처럼
	- `변수.current` 로 해당 html element 반환 가능

	
```javascript

const App = () => {

    const yourvar = useRef();
    return (
	<input ref={yourvar} ...>
    );
}

```



