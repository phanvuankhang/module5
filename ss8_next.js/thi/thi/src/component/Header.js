import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
return(
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>
        </ul>
    </nav>
);
}