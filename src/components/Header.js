   const  Header=({setShowList}) =>{
        return (
        <header className="main-header">
		<div id="logo-header" href="/">
			<span className="site-name">BITBOX assignment</span>
			<span className="site-desc">Selection process assigment</span>
		</div>
		<nav>
			<ul>
			<li><a href="/items">List of Item</a></li>
				<li><a href="/save">Create Item</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/login">Login</a></li>
			</ul>
		</nav>
        </header>

        );

    

}
export  default Header;