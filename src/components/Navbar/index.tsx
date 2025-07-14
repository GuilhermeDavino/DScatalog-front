const Navbar = () => {
    return (
        <>
            <nav className="bg-primary">
                <div className='container'>
                    <div>
                        <a href="#"><h4>DS Catalog</h4></a>
                    </div>
                    <div className='container-list'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">CATALÓGO</a></li>
                            <li><a href="#">ADMIN</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;