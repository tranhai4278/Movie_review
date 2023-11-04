import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AdminSidebar() {
    return (
        
        <div className="left_col scroll-view" style={{position: 'fixed'}}>
          <div className="navbar nav_title" style={{border: '0'}} >
            <Link href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></Link>
          </div>

          <div className="clearfix"></div>

          <div className="profile clearfix">
            <div className="profile_pic">
              <img src="images/img.jpg" alt="..." className="img-circle profile_img"/>
            </div>
            <div className="profile_info">
              <span>Welcome,</span>
              <h2>John Doe</h2>
            </div>
          </div>

          <br />

          <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
              <h3>General</h3>
              <ul className="nav side-menu">
                <li><Link><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                    <li><Link href="index.html">Dashboard</Link></li>
                    <li><Link href="index2.html">Dashboard2</Link></li>
                    <li><Link href="index3.html">Dashboard3</Link></li>
                  </ul>
                </li>
                <li><Link><i className="fa fa-edit"></i> Forms <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                    <li><Link href="form.html">General Form</Link></li>
                    <li><Link href="form_advanced.html">Advanced Components</Link></li>
                    <li><Link href="form_validation.html">Form Validation</Link></li>
                    <li><Link href="form_wizards.html">Form Wizard</Link></li>
                    <li><Link href="form_upload.html">Form Upload</Link></li>
                    <li><Link href="form_buttons.html">Form Buttons</Link></li>
                  </ul>
                </li>
                <li><Link><i className="fa fa-desktop"></i> UI Elements <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                    <li><Link href="general_elements.html">General Elements</Link></li>
                    <li><Link href="media_gallery.html">Media Gallery</Link></li>
                    <li><Link href="typography.html">Typography</Link></li>
                    <li><Link href="icons.html">Icons</Link></li>
                    <li><Link href="glyphicons.html">Glyphicons</Link></li>
                    <li><Link href="widgets.html">Widgets</Link></li>
                    <li><Link href="invoice.html">Invoice</Link></li>
                    <li><Link href="inbox.html">Inbox</Link></li>
                    <li><Link href="calendar.html">Calendar</Link></li>
                  </ul>
                </li>
                <li><Link><i className="fa fa-table"></i> Tables <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                    <li><Link href="tables.html">Tables</Link></li>
                    <li><Link href="tables_dynamic.html">Table Dynamic</Link></li>
                  </ul>
                </li>
                <li><Link><i className="fa fa-bar-chart-o"></i> Data Presentation <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                    <li><Link href="chartjs.html">Chart JS</Link></li>
                    <li><Link href="chartjs2.html">Chart JS2</Link></li>
                    <li><Link href="morisjs.html">Moris JS</Link></li>
                    <li><Link href="echarts.html">ECharts</Link></li>
                    <li><Link href="other_charts.html">Other Charts</Link></li>
                  </ul>
                </li>
                <li><Link><i className="fa fa-clone"></i>Layouts <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                    <li><Link href="fixed_sidebar.html">Fixed Sidebar</Link></li>
                    <li><Link href="fixed_footer.html">Fixed Footer</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu_section">
              <h3>Live On</h3>
              <ul className="nav side-menu">
                <li><Link><i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                    <li><Link href="e_commerce.html">E-commerce</Link></li>
                    <li><Link href="projects.html">Projects</Link></li>
                    <li><Link href="project_detail.html">Project Detail</Link></li>
                    <li><Link href="contacts.html">Contacts</Link></li>
                    <li><Link href="profile.html">Profile</Link></li>
                  </ul>
                </li>
                <li><Link><i className="fa fa-windows"></i> Extras <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                    <li><Link href="page_403.html">403 Error</Link></li>
                    <li><Link href="page_404.html">404 Error</Link></li>
                    <li><Link href="page_500.html">500 Error</Link></li>
                    <li><Link href="plain_page.html">Plain Page</Link></li>
                    <li><Link href="login.html">Login Page</Link></li>
                    <li><Link href="pricing_tables.html">Pricing Tables</Link></li>
                  </ul>
                </li>
                <li><Link><i className="fa fa-sitemap"></i> Multilevel Menu <span className="fa fa-chevron-down"></span></Link>
                  <ul className="nav child_menu">
                      <li><Link href="#level1_1">Level One</Link></li>
                      <li><Link>Level One<span className="fa fa-chevron-down"></span></Link>
                        <ul className="nav child_menu">
                          <li className="sub_menu"><Link href="level2.html">Level Two</Link>
                          </li>
                          <li><Link href="#level2_1">Level Two</Link>
                          </li>
                          <li><Link href="#level2_2">Level Two</Link>
                          </li>
                        </ul>
                      </li>
                      <li><Link href="#level1_2">Level One</Link>
                      </li>
                  </ul>
                </li>                  
                <li><Link href="javascript:void(0)"><i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
   
    );
}

