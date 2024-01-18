import { useRef, useState } from "react";

function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const add = (e) => {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value))

    }

    const minus = (e) => {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value))

    }
    const divide = (e) => {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value))

    }

    const multiply = (e) => {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value))

    }

    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = 0;
    }

    const resetResult = (e) => {
        e.preventDefault();
        setResult((prevVal) => prevVal * 0)
    }
    return (
        <>
            <form>
                <p ref={resultRef}>
                    {result}
                </p>
                <input pattern="[0-9]" ref={inputRef} type="number" placeholder="type a number" />
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
                <button onClick={multiply}>multiply</button>
                <button onClick={divide}>divide</button>
                <button onClick={resetInput}>reset input</button>
                <button onClick={resetResult}>reset results</button>
            </form>
        </>);
}
export default Calculator;