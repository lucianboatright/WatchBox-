import "../App.css";
import { userState } from "react";

const Watches = () => {
    const [watch, setWatch] = useState("");
    const watch = [];

    const signOut = () => {};

    const onSubmitTodo = (event) => {
        event.preventDeafult();

        setWatch("")
    };

    return (
        <>
        <header>
            <button onClick={signOut}>Sign Out</button>
        </header>
        <main>
            <form onSubmit={onSubmitWatch}>
                <input
                    required
                    value={watch}
                    omChange={(e) => setTodo(e.targer.value)}
                    placeHolder="What's Next"
                />
                <button type="submit">Add</button>
            </form>
            {watches && watches.map((watch) => <Watches {...watch} /> )}
        </main>
        </>
    );
};

const Watch = ({id, complete, text }) => {
    const onCompleteWatch = (id, complete) => {};

    const onDeleteWatch = (id) => {};

    return (
        <div key={id} className="watch">
            <button 
                className={'watch-item ${complete ? "complete" : ""}'} 
                tabIndex="8"
                onClick={() => onCompleteWatch(id, complete)}
            >
                {text}
            </button>
            <button onClick={() => onDeleteTodo(id)}>X</button>
        </div>
    );
};

export default Watches;