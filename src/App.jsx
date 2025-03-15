// Importing React hooks: useEffect (for side effects) and useState (for state management)
import { useEffect, useState } from "react";

// Counter component definition
function Counter() {
  // State variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  /**
   * 1. useEffect for starting an interval (runs once when component mounts)
   *    - Sets up an interval to increase 'count' by 1 every second (1000ms)
   *    - Logs "mounted" to the console when component is first rendered
   */
  useEffect(() => {
    // Start an interval that updates 'count' every second
    const clock = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Increment count safely using the previous state
    }, 1000);

    console.log("mounted"); // Log when component is mounted

    /**
     * Cleanup function (runs when component unmounts)
     * - Clears the interval to prevent memory leaks
     * - Logs "unmounted" when component is removed from DOM
     */
    return () => {
      console.log("unmounted");
      clearInterval(clock); // Stops the interval
    };
  }, []); // Empty dependency array means this runs only once on mount and cleanup on unmount

  /**
   * 2. useEffect to log count updates
   *    - Runs every time 'count' changes
   *    - Logs "count has changed"
   *    - Cleans up by logging "Cleanup inside the second effect"
   */
  useEffect(() => {
    console.log("count has changed"); // Logs after each update of 'count'

    return () => {
      console.log("Cleanup inside the second effect"); // Logs during cleanup (before the next effect runs)
    };
  }, [count]); // Dependency array with 'count' means it runs whenever 'count' changes

  /**
   * Functions to manually update the 'count' value
   */
  function increaseCount() {
    setCount(count + 1); // Increments count by 1
  }

  function decreaseCount() {
    setCount(count - 1); // Decrements count by 1
  }

  function resetCount() {
    setCount(0); // Resets count to 0
  }

  // JSX output of the Counter component (renders buttons and the counter value)
  return (
    <div>
      <h1>Counter: {count}</h1> {/* Displays the current count */}
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
}

// Main App component
function App() {
  // State to manage the visibility of the Counter component (initially true)
  const [counterVisible, setCounterVisible] = useState(true);

  /**
   * 3. useEffect to toggle visibility of Counter component
   *    - Every 5 seconds, flips the value of 'counterVisible'
   *    - If 'counterVisible' is true, Counter is shown, else it's hidden
   */
  useEffect(() => {
    const visibilityInterval = setInterval(() => {
      setCounterVisible((visible) => !visible); // Toggles visibility
    }, 5000); // Every 5 seconds (5000ms)

    // Cleanup function to clear interval when App component unmounts
    return () => clearInterval(visibilityInterval);
  }, []); // Empty dependency array ensures this runs only once on mount

  // JSX output of the App component
  return (
    <div>
      <h2>Hi there!!</h2> {/* Static message */}
      {/* Conditionally renders Counter component if 'counterVisible' is true */}
      {counterVisible && <Counter />}
      <p>Hello!</p> {/* Another static message */}
    </div>
  );
}

// Export the App component as the default export
export default App;
