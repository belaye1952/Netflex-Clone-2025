

const Header = () => {
  return (
    <>
{/* left Container */}
<div>
<ul>
    <img src="#"alt=""/>
    
    <li>Home</li>
    <li>TvShow</li>
    <li>Movies</li>
    <li>Latest</li>
    <li>MyList</li>
    <li>Browse by Language</li>
</ul>
</div>

{/* // right Container */}
<div className={StyleS.header_container_right}>
    <IoSearch/>
    <MdOutlineNotifications/>
<MdContactPage/>
<IoMdArrowDropdown/>
<IoMdMenu/>
</div>

</>
  );
}


export default Header
