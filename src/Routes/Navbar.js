import {Link} from "react-router-dom"

function Navbar() {

    const links = [
        {to: "/login" , title: "login"},
        {to: "/" , title: "home"},
        {to: "/contact" , title: "contact"},
        {to: "/about" , title: "about"},
        {to: "/product" , title: "product"}
    ]

    return(
        <div className = "navbar" >
            {
                links.map((e)=>{
                    return <Link to={e.to} key={e.to}> {e.title}</Link>
                })
            }
           
        </div>
    )
}

export { Navbar }