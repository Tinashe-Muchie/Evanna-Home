import { NavLink } from "react-router-dom";
import { CATEGORY_TYPE } from "../generated/categories_generated";

export const DROPDOWN_MENU = ({categories}: CATEGORY_TYPE) => {
    return (
        <div className="dropdown_wrapper">
            <nav>
                <div className="dropdown">
                <div className="dropdown_label">Products Menu</div>
                <div className="dropdown_menu">
                    <ul className="submenu">
                        {
                            categories?.map((category)=> (
                                <li key={category.id}>
                                <NavLink
                                    to={`/${category.slug}`}
                                    className={({ isActive }) =>
                                    isActive ? "main_nav_active" : "main_nav"
                                    }
                                    end
                                >
                                    {category.title}
                                </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}

