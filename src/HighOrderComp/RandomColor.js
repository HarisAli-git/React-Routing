const Rainbow = (WrappedComp) => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple', 'brown', 'indigo']
    const Randomize = colors[Math.floor(Math.random() * 8)]
    const RandomClass = Randomize + '-text'

    return (props) => {
        return ( 
        <div className={RandomClass}>
            <WrappedComp {...props}/>
        </div> );
    }
}
 
export default Rainbow;