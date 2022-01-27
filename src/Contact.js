const Contact = (props) => {
   
    setTimeout(() => {
        console.log('TimeOut')
        // props.history.push('/about')
    }, 500);

    return (  
        <div className="container">
            <h1 className="center">Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum similique voluptatem sit labore eligendi, debitis architecto dolores quasi aliquam saepe dicta sunt vel deleniti quam, doloremque quidem praesentium esse odit?</p>
        </div>
    );
}
 
export default Contact;