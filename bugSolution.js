```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Cleanup function will run when the component unmounts or
    // when the value of 'count' changes.
    const intervalId = setInterval(() => {
      console.log('Count:', count);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Component unmounted or count changed');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```