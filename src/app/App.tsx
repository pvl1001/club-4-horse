import {Header} from "widgets/Header";
import {Session} from "widgets/Session";
import {Stage} from "widgets/Stage";
import {Persons} from "widgets/Persons";
import {Footer} from "widgets/Footer";


function App() {
    return (
        <>
            <Header/>
            <main>
                <Session/>
                <Stage/>
                <Persons/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
