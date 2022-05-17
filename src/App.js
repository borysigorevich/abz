import Header from "./components/header/Header";
import About from "./components/about/About";
import Users from "./components/users/Users";
import Form from "./components/form/Form";


function App() {
    return (
        <div>
            <Header/>
            <main>
                <About/>
                <Users/>
                <Form/>
            </main>
        </div>
    );
}

export default App;
