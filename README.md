# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue in React applications where the cleanup function within a `useEffect` hook doesn't execute when the component unmounts.  This can lead to unexpected behavior, such as memory leaks or continued execution of tasks even after the component is no longer rendered.

The `bug.js` file contains the buggy code, and `bugSolution.js` demonstrates the corrected implementation.  The issue arises from incorrect dependency handling within the `useEffect` hook.