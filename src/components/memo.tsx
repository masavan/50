import {memo, useCallback, useMemo, useState} from 'react'

export const Hello = memo(  ({name}:{name:string}) =>
    <h1>Hello {name}</h1>
)

export const RandomSum = () => {
    const [renderTrigger, setRenderTrigger] = useState(0);
    const random = useMemo(() => {
        const arr: number[] = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 5));
        }
        return arr;
    }, []);

        const arr: number[] = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 5));
        }




    const sum = arr.reduce((a, b) => a + b, 0);

    const sumUseMemo = useMemo(() => {
        console.log("Рахуємо суму через useMemo...");
        return random.reduce((a, b) => a + b, 0);
    }, [random]);


    return (
        <>

            <h1>Сума : {sum}</h1>
            <br/>
            <h1>Сума з useMemo : {sumUseMemo}</h1>
            <button onClick={() => setRenderTrigger(prev => prev + 1)}>
                Примусовий рендер ({renderTrigger})
            </button>
        </>

    )
}


export const Callback= () => {
    const [renderTrigger, setRenderTrigger] = useState(0);
    const [water, setWater] = useState(20);

    const handleClick = useCallback(() => {
        setRenderTrigger(Math.floor(Math.random() * 5));
    },[]);



    return(
        <>
            <h1>Рівень води {water}</h1>
            <button onClick={() => setWater(prev => prev+1)}>+1</button>
            <br/>
            <h1>UseCallBack Рандом {renderTrigger}</h1>
            <button onClick={ handleClick}>Рандом</button>
        </>
    )

}