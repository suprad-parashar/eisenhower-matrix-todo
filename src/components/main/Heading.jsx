function Heading() {
    const style = {
        textAlign: "center",
        margin: 0,
        transform: "rotate(2deg)",
        padding: "0.2rem 1.2rem",
        borderRadius: "20% 5% 20% 5%/5% 20% 25% 20%",
        backgroundColor: "#fdcb6e",
        fontFamily: "Architects Daughter, cursive",
        fontSize: "1.5rem",
    }
    return <h1 style={style}>Todo List</h1>
}

export default Heading;