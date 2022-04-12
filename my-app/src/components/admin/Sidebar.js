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
                        <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                            <i className="menu-icon mdi mdi-chart-line" />
                            <span className="menu-title">Charts</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="charts">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                            <i className="menu-icon mdi mdi-table" />
                            <span className="menu-title">Tables</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="tables">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                            <i className="menu-icon mdi mdi-layers-outline" />
                            <span className="menu-title">Icons</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="icons">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category">pages</li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                            <i className="menu-icon mdi mdi-account-circle-outline" />
                            <span className="menu-title">User Pages</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                            </ul>
                        </div>
                    </li>
                    
                </ul>
            </nav>
        </div>

    )
}

export default Sidebar