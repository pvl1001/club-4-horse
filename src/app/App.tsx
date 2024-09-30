import {RunningLine} from "shared/ui/RunningLine";
import {Footer} from "widgets/Footer";
import {Header} from "widgets/Header";
import {Persons} from "widgets/Persons";
import {Session} from "widgets/Session";
import {Stage} from "widgets/Stage";

const runningLineData = [
    'Дело помощи утопающим — дело рук самих утопающих!',
    'Шахматы двигают вперед не только культуру, но и экономику!',
    'Лед тронулся, господа присяжные заседатели!',
]


function App() {
    return (
        <>
            <Header/>
            <RunningLine data={runningLineData}/>
            <main className={'wrapper'}>
                <Session/>
                <Stage/>
                <Persons/>
            </main>
            <RunningLine data={runningLineData}/>
            <Footer/>
        </>
    );
}

export default App;
