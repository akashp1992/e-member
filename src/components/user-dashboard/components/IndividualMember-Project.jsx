import React from "react";

export default function IndividualMember_Project() {
  return (
    <div id="wrapper">
         <nav class="navbar navbar-fixed-top">
            <div class="container-fluid">
               <div class="navbar-btn">
                  <button type="button" class="btn-toggle-offcanvas"><i class="lnr lnr-menu fa fa-bars"></i></button>
               </div>
               <div class="navbar-brand">
                  <a href="index.html"><img src="assets/images/logo.png" alt="Lucid Logo" class="img-responsive logo" /></a>  
               </div>
               <div class="navbar-right">
                  <div class="nav-control">
                     <div class="hamburger btn-toggle-fullwidth">
                        <span class="line"></span><span class="line"></span><span class="line"></span>
                     </div>
                  </div>
                  <div id="navbar-menu">
                     <ul class="nav navbar-nav">
                        <li>
                           <a href="javascript:void(0);" class="icon-menu d-none d-sm-block d-md-none d-lg-block">
                              <form id="navbar-search" class="navbar-form search-form">
                                 <input value="" class="form-control" placeholder="Search by member name or order number" type="text" />
                                 <button type="button" class="btn btn-default"><i class="icon-magnifier"></i></button>
                              </form>
                           </a>
                        </li>
                        <li>
                           <a href="app-calendar.html" class="icon-menu d-none d-sm-block d-md-none d-lg-block"><i class="icon-calendar"></i></a>
                        </li>
                        <li class="dropdown">
                           <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                           <i class="icon-bell"></i>
                           <span class="notification-dot"></span>
                           </a>
                           <ul class="dropdown-menu notifications">
                              <li class="header"><strong>You have 4 new Notifications</strong></li>
                              <li>
                                 <a href="javascript:void(0);">
                                    <div class="media">
                                       <div class="media-left">
                                          <i class="icon-info text-warning"></i>
                                       </div>
                                       <div class="media-body">
                                          <p class="text">Campaign <strong>Holiday Sale</strong> is nearly reach budget limit.</p>
                                          <span class="timestamp">10:00 AM Today</span>
                                       </div>
                                    </div>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0);">
                                    <div class="media">
                                       <div class="media-left">
                                          <i class="icon-like text-success"></i>
                                       </div>
                                       <div class="media-body">
                                          <p class="text">Your New Campaign <strong>Holiday Sale</strong> is approved.</p>
                                          <span class="timestamp">11:30 AM Today</span>
                                       </div>
                                    </div>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0);">
                                    <div class="media">
                                       <div class="media-left">
                                          <i class="icon-pie-chart text-info"></i>
                                       </div>
                                       <div class="media-body">
                                          <p class="text">Website visits from Twitter is 27% higher than last week.</p>
                                          <span class="timestamp">04:00 PM Today</span>
                                       </div>
                                    </div>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0);">
                                    <div class="media">
                                       <div class="media-left">
                                          <i class="icon-info text-danger"></i>
                                       </div>
                                       <div class="media-body">
                                          <p class="text">Error on website analytics configurations</p>
                                          <span class="timestamp">Yesterday</span>
                                       </div>
                                    </div>
                                 </a>
                              </li>
                              <li class="footer"><a href="javascript:void(0);" class="more">See all notifications</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="app-chat.html" class="icon-menu d-none d-sm-block"><i class="icon-settings"></i></a>
                        </li>
                        <li>
                           <a href="javascript:void()" class="btn btn-em">Switch Profile</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
         <div id="left-sidebar" class="sidebar mini-sidebar">
            <div class="sidebar-scroll">
               <div class="user-account">
                  <img src="assets/images/user.png" class="rounded-circle user-photo" alt="User Profile Picture">
                  <div class="dropdown">
                     <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>Alizee Thomas</strong></a>
                     <span>Individual Member</span>
                     <ul class="dropdown-menu dropdown-menu-right account">
                        <li><a href="page-profile2.html"><i class="icon-user"></i>My Profile</a></li>
                        <li><a href="app-inbox.html"><i class="icon-envelope-open"></i>Messages</a></li>
                        <li><a href="javascript:void(0);"><i class="icon-settings"></i>Settings</a></li>
                        <li class="divider"></li>
                        <li>
                           <div class="sidenav-footer">
                              <div class="sidenav-footer-content">
                                 <div class="sidenav-footer-subtitle">Logged in as:</div>
                                 <div class="sidenav-footer-title">Valerie Luna</div>
                              </div>
                              <!---->
                           </div>
                           <a href="page-login.html"><i class="icon-power"></i>Logout</a>
                        </li>
                     </ul>
                  </div>
                  <ul class="row list-unstyled">
                     <li class="col-6">
                        <h6>£4000</h6>
                        <small>Total Funds</small>
                     </li>
                     <li class="col-6">
                        <h6>1350</h6>
                        <small>Total Members</small>
                     </li>
                  </ul>
                  <hr>
               </div>
               <!-- Tab panes -->
               <div class="tab-content p-l-0 p-r-0">
                  <nav id="left-sidebar-nav" class="sidebar-nav">
                     <ul id="main-menu" class="metismenu">
                        <li>
                           <a href="index.html"><img src="assets/images/overview-icon.png" alt="Overview-icon"> <span>Overview</span></a>
                        <li class="active">
                           <a href="individualMember-project.html"><img src="assets/images/project-icon.png" alt="Projects-icon"> <span>Projects</span></a>
                        </li>
                        <li>
                           <a href="individualMember-list.html"><img src="assets/images/member-icon.png" alt="Memberships-icon"> <span>Memberships</span></a>
                        </li>
                        <li>
                           <a href="#"><img src="assets/images/explore-icon.png" alt="Explore-icon"> <span>Live Projects</span> </a>
                        </li>
                        <li>
                           <a href="#"><img src="assets/images/wallet-icon.png" alt="Wallet-icon"> <span>Wallet</span></a>
                        </li>
                        <li class="sidenav-footer">
                           <a href="#"><img src="assets/images/log-icon.png" alt="Log-icon"> <span>Log Out</span></a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
         <div id="main-content">
            <div class="container-fluid">
               <div class="block-header">
                  <div class="row">
                     <div class="col-lg-5 col-md-8 col-sm-12">
                        <h2>Projects Details</h2>
                        <ul class="breadcrumb">
                           <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                           <li class="breadcrumb-item active">Projects</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="row clearfix">
                  <div class="col-lg-6  mb-4">
                     <div class="card invoice1">
                        <div class="body">
                           <div class="Wakefield-top clearfix">
                              <div class="logo">
                                 <img src="assets/images/user-icon.png" alt="user" class="rounded-circle img-fluid">
                              </div>
                              <div class="info ">
                                 <h4>Wakefield Project</h4>
                                 <p> Project Type: <span>Visible</span></p>
                                 <p>Membership Type: <span>Individual</span> </p>
                                 <p>Project ID: <span>123456</span></p>
                                 <div class="social-icon">
                                    <a href="#" class="social_icon facebook"> <i class="fa fa-facebook"></i></a>
                                    <a href="#" class="social_icon twitter-table"> <i class="fa fa-twitter"></i></a>
                                    <a href="#" class="social_icon linkedin"> <i class="fa fa-linkedin"></i></a>
                                 </div>
                                 <div class="project-progress">
                                    <small>60%</small>
                                    <div class="progress progress-xs">
                                       <div class="progress-bar l-blue" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6  mb-4">
                     <div class="card Projectmamber invoice1">
                        <div class="body">
                           <div class="info ">
                              <h4>Cynthia R. Johnson</h4>
                              <p>Member Role: <span>Admin</span></p>
                              <p>Email Address: <span>CynthiaRJohnson@rhyta.com</span> </p>
                              <div class="Project-buttons mt-5">
                                 <button class="btn btn-pink  m-r-10">Leave Project</button>
                                 <button class="btn btn-outline-pink">Close Project</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- End project detals section -->
               <div class="row clearfix">
                  <div class="col-lg-12">
                     <div class="card">
                        <div class="header">
                           <h2>Project Statistics Details</h2>
                        </div>
                        <div class="table-responsive oddTable">
                           <table class="table m-b-0">
                              <thead class="thead-dark">
                                 <tr>
                                    <th>Total Members</th>
                                    <th>Started On</th>
                                    <th>Ending On</th>
                                    <th>Amount Target</th>
                                    <th>Amount Raised</th>
                                    <th>% Achieved</th>
                                    <th>Contributions</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>1500</td>
                                    <td>June 18,2021</td>
                                    <td>June 18,2024</td>
                                    <td>£250,000</td>
                                    <td>£322,170</td>
                                    <td>3.70%</td>
                                    <td><a href="javascript:void(0);" class="btn btn-join btn-sm">View Contribution</a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- End Project Statistics Details tables-->
               <div class="row clearfix">
                  <div class="col-lg-12">
                     <div class="card">
                        <div class="body">
                           <ul class="nav nav-tabs projectDetails-tabs">
                              <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#ProjectDescription">Project Description</a></li>
                              <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#EditProject">Edit Project Details</a></li>
                              <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#ManageMembers">Manage Members</a></li>
                           </ul>
                        </div>
                        <div class="tab-content">
                           <div class="tab-pane active" id="ProjectDescription">
                              <div class="body Description">
                                 <!-- <div class="Editicon">
                                    <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="icon-pencil"></i></a>
                                    </div> -->
                                 <p class="w-100 d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                 </p>
                              </div>
                           </div>
                           <div class="tab-pane" id="EditProject">
                              <div class="body">
                                 <div class="media">
                                    <div class="media-left m-r-15">
                                       <img src="../assets/images/user.png" class="user-photo media-object" alt="User">
                                    </div>
                                    <div class="media-body">
                                       <h5>Wakefield Project</h5>
                                       <p> Project Type: <span>Visible</span></p>
                                       <button type="button" class="btn btn-default-dark" id="btn-upload-photo">Upload Image</button>
                                       <input type="file" id="filePhoto" class="sr-only">
                                    </div>
                                 </div>
                              </div>
                              <div class="body">
                                 <div class="row clearfix ProjectModal ">
                                    <div class="col-6">
                                       <div class="form-group">  
                                          <label>Project Name:</label>                                  
                                          <input type="text" class="form-control" placeholder="Wakefield Project">
                                       </div>
                                    </div>
                                    <div class="col-6">
                                       <div class="form-group"> 
                                          <label>Location:</label>                                     
                                          <input type="text" class="form-control" placeholder="United Kingdom">
                                       </div>
                                    </div>
                                    <div class="col-12 m-b-10">
                                       <label>Project Dates:</label>
                                       <div class="input-daterange input-group" data-provide="datepicker">
                                          <input type="text" class="form-control" name="start" placeholder="Start Date">
                                          <span class="input-group-addon">  </span>
                                          <input type="text" class="form-control" name="end" placeholder="End Date/ Reocurrance">
                                       </div>
                                    </div>
                                    <div class="col-6">
                                       <label>Add Documentation:</label>   
                                       <div class="input-group mb-3">
                                          <div class="custom-file">
                                             <input type="file" class="custom-file-input" id="Upload">
                                             <label class="custom-file-label" for="Upload">Upload</label>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-12 mt-5">
                                       <a href="#" class="btn btn-primary mr-3">Update </a>
                                       <a href="#" class="btn btn-wthbg">Cancel</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="tab-pane" id="ManageMembers">
                              <div class="row clearfix">
                                 <div class="col-lg-12">
                                    <div class="card">
                                       <div class="body">
                                          <div class="Project-action clearfix mt-4">
                                             <div class="pull-left Project-dropdown">
                                                <h4>Manage members</h4>
                                             </div>
                                             <div class="pull-right ml-auto">
                                                <div class="btn-group ProjectRight-btns">
                                                   <button type="button" class="btn pbtn Removebtn"><i class="icon-trash"></i> Remove User
                                                   </button>
                                                   <button type="button" class="btn pbtn MarkAdmbtn"><i class="icon-user-following"></i> Mark as Admin
                                                   </button>
                                                   <button type="button" class="btn pbtn RmvAdminbtn"><i class="icon-user-unfollow" aria-hidden="true"></i>Remove as a Admin
                                                   </button>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row clearfix">
                                 <div class="col-lg-12">
                                    <div class="card">
                                       <div class="table-responsive member-invite">
                                          <table class="table m-b-0 c_list">
                                             <thead class="thead-dark">
                                                <tr>
                                                   <th>Member  Name</th>
                                                   <th>Email Address</th>
                                                   <th>Member Since</th>
                                                   <th>Membership Type</th>
                                                   <th>Location</th>
                                                   <th>No. of Projects Joined</th>
                                                   <th>Select All <label class="fancy-checkbox">
                                                      <input class="select-all" type="checkbox" name="checkbox">
                                                      <span></span>
                                                      </label>
                                                   </th>
                                                </tr>
                                             </thead>
                                             <tbody>
                                                <tr>
                                                   <td>John John</td>
                                                   <td>john@gmail.com</td>
                                                   <td>June 18,2021</td>
                                                   <td>Individual Member</td>
                                                   <td>London</td>
                                                   <td>06</td>
                                                   <td style="width: 50px;">
                                                      <label class="fancy-checkbox">
                                                      <input class="checkbox-tick" type="checkbox" name="checkbox">
                                                      <span></span>
                                                      </label>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td>John John</td>
                                                   <td>john@gmail.com</td>
                                                   <td>June 18,2021</td>
                                                   <td>Individual Member</td>
                                                   <td>London</td>
                                                   <td>06</td>
                                                   <td style="width: 50px;">
                                                      <label class="fancy-checkbox">
                                                      <input class="checkbox-tick" type="checkbox" name="checkbox">
                                                      <span></span>
                                                      </label>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td>John John</td>
                                                   <td>john@gmail.com</td>
                                                   <td>June 18,2021</td>
                                                   <td>Individual Member</td>
                                                   <td>London</td>
                                                   <td>06</td>
                                                   <td style="width: 50px;">
                                                      <label class="fancy-checkbox">
                                                      <input class="checkbox-tick" type="checkbox" name="checkbox">
                                                      <span></span>
                                                      </label>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td>John John</td>
                                                   <td>john@gmail.com</td>
                                                   <td>June 18,2021</td>
                                                   <td>Individual Member</td>
                                                   <td>London</td>
                                                   <td>06</td>
                                                   <td style="width: 50px;">
                                                      <label class="fancy-checkbox">
                                                      <input class="checkbox-tick" type="checkbox" name="checkbox">
                                                      <span></span>
                                                      </label>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td>John John</td>
                                                   <td>john@gmail.com</td>
                                                   <td>June 18,2021</td>
                                                   <td>Individual Member</td>
                                                   <td>London</td>
                                                   <td>06</td>
                                                   <td style="width: 50px;">
                                                      <label class="fancy-checkbox">
                                                      <input class="checkbox-tick" type="checkbox" name="checkbox">
                                                      <span></span>
                                                      </label>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}
