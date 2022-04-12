import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = (props) => {
    return (
        <div>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/dashboard">
                            <i className="mdi mdi-grid-large menu-icon" />
                            <span className="menu-title">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item nav-category">Menu</li>
                    <li className="nav-item">
                        <NavLink className="nav-link" data-bs-toggle="collapse" to="/admin/products" aria-expanded="false" aria-controls="ui-basic">
                            <i className="menu-icon mdi mdi-reproduction" /> 
                            
                            <span className="menu-title">Products</span>
                            <i className="menu-arrow" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" data-bs-toggle="collapse" to="/admin/category" aria-expanded="false" aria-controls="ui-basic">
                            <i className="menu-icon mdi mdi-airballoon" />
                            <span className="menu-title">Category</span>
                            <i className="menu-arrow" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" data-bs-toggle="collapse" to="/admin/news" aria-expanded="false" aria-controls="form-elements">
                            <i className="menu-icon mdi mdi-card-text-outline" />
                            <span className="menu-title">News</span>
                            <i className="menu-arrow" />
                        </NavLink>
                        
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" data-bs-toggle="collapse" to="/admin/order" aria-expanded="false" aria-controls="form-elements">
                            <i className="menu-icon mdi mdi-chart-line" />
                            <span className="menu-title">Order</span>
                            <i className="menu-arrow" />
                        </NavLink>
                        
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" data-bs-toggle="collapse" to="/admin/users" aria-expanded="false" aria-controls="form-elements">
                            <i className="menu-icon fa fa-user-circle-o" />
                            <span className="menu-title">Users</span>
                            <i className="menu-arrow" />
                        </NavLink>
                        
                    </li>
                
 
                </ul>
            </nav>
        </div>

    )
}

export default Sidebar