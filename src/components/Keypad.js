// Code Keypad Component Here

function Keypad() {
    return (
        <div>
            <input
                type="password"
                placeholder="Enter your input here"
                onChange={() => console.log("Entering password...")}
            />
        </div>
    );
}

export default Keypad;