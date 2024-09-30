import {RunningLine} from "shared/ui/RunningLine";
import {Footer} from "widgets/Footer";
import {Header} from "widgets/Header";
import {Persons} from "widgets/Persons";
import {Session} from "widgets/Session";
import {Stage} from "widgets/Stage";


function App() {
    return (
        <>
            <Header/>
            <RunningLine data={[
                'Дело помощи утопающим — дело рук самих утопающих!',
                'Шахматы двигают вперед не только культуру, но и экономику!',
                'Лед тронулся, господа присяжные заседатели!',
            ]}/>
            <main className={'wrapper'}>
                <Session/>
                <Stage/>
                <Persons/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
