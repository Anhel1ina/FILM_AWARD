import { useEffect, useRef, useState } from "react";
import { letters, removeSymbolsFromFact, shuffleText } from "../../helpers/inputsValidation";

export const FactCell = ({ value }: { value: string }) => {
    const [mixedText, setMixedText] = useState<string>('')
    const intervalRef = useRef<NodeJS.Timer>()

    useEffect(() => {
        setMixedText(shuffleText(value))
    }, [value])

    const changeLetters = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)

        const initialText = value

        setMixedText(shuffleText(initialText))

        intervalRef.current = setInterval(() => {
            setMixedText((prevText) => {
                let newText = '';
                for (let i = 0; i < initialText.length; i++) {
                    if (prevText[i] === initialText[i]) {
                        newText += initialText[i]
                    } else {
                        newText += letters[Math.floor(Math.random() * letters.length)]
                    }
                }
                return newText
            })
        }, 5)
    }

    return (
        <div onClick={changeLetters} data-text-value={removeSymbolsFromFact(value)}>
            {mixedText}
        </div>
    );
};