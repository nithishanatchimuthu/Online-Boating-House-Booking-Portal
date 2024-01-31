import React from 'react';
  import "./adminhome.css";
import { Link } from 'react-router-dom';
export default function Adminhome() {
     return (
// <>
//   {/* source image link  */}
//   {/* https://cdn.dribbble.com/users/4968565/screenshots/14834519/media/45f2daee12f60ca52e2cb977ce566dc7.png */}
//   <link
//     href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
//     rel="stylesheet"
//   />
//   <link
//     rel="stylesheet"
//     href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
//     integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
//     crossOrigin="anonymous"
//   />
//   <div id="symbol">
//     <div id="tic" />
//   </div>
//   <div id="wave"></div>
//   <section id="main">
//     {/*   <div id="border"></div> */}
//     <div id="left">
//       <div id="nav-content">
//         <div id="nav-title">
//           <span id="cld-ic">
//             {" "}
//             <i className="bx bxs-cloud" />
//           </span>
//           <span>BOAT&nbsp;STAY</span>
//         </div>
//         <ul id="nav-ul">
//           <li>
//             <a href="#">
//               <span className="nav-icon">
//                 <i className="bx bx-line-chart" />
//               </span>
//               <span className="nav-letter">Overview</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <span className="nav-icon">
//                 <i className="bx bx-menu" />
//               </span>
//               <span className="nav-letter">Transaction</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <span className="nav-icon">
//                 <i className="bx bx-credit-card" />
//               </span>
//               <span className="nav-letter">Cards</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <span className="nav-icon">
//                 <i className="bx bx-file-blank" />
//               </span>
//               <span className="nav-letter">Invoice</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <span className="nav-icon">
//                 <i className="bx bx-medal" />
//               </span>
//               <span className="nav-letter">Goals</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <span className="nav-icon">
//                 <i className="bx bx-cog" />
//               </span>
//               <span className="nav-letter">Settings</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div id="nav-bottom">
//         <div id="n-b-top">
//           <i className="bx bx-cloud-lightning" />{" "}
//           <p>
//             Give&nbsp;your&nbsp;money <br />
//             awesame&nbsp;space&nbsp;in&nbsp;cloud
//           </p>
//         </div>
//         <div className="button">
//           <p>
//             Upgrade&nbsp;to&nbsp;premium <i className="bx bx-up-arrow-alt" />
//           </p>
//         </div>
//       </div>
//     </div>
//     <div id="right">
//       <div id="top">
//         <div id="tp-title">
//           <h1>Weekly sumup</h1>
//           <p>Get summary of your weekly online transactions here.</p>
//         </div>
//         <div id="profile">
//           <span>
//             <i className="bx bx-mail-send mail" />
//           </span>
//           <span>
//             <i className="bx bxs-bell bell" />
//           </span>
//           <div id="profile-ac-name">
//             <i className="bx bxs-user-circle" />
//             <p>
//               <span>Kanna</span>
//               <br />
//               Admin&nbsp;account
//             </p>
//           </div>
//         </div>
//       </div>
//       <div id="main-content">
//         <div id="m-c-left">
//           <div id="card">
//             <h2>Cards</h2>
//             <div id="card-related">
//               <div className="card-amount">
//                 <div id="debit-card">
//                   <i className="bx bxs-cloud card-cloud" />
//                   <div id="d-c-title">
//                     <h4>cloudcash</h4>
//                     <span>PREMIUM ACCOUNT</span>
//                   </div>
//                   <h1 id="card-num">1234 **** **** 3456</h1>
//                   <div id="name-expire">
//                     <div id="holder">
//                       <p>Card holder</p>
//                       <p>Jayakanna</p>
//                     </div>
//                     <div id="expire">
//                       <p>Expire date</p>
//                       <p>04/24</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div id="amount">
//                   <div className="amt-lst">
//                     <h1>
//                       <span className="dollar">$</span>2850.75
//                     </h1>
//                     <p>Current balance</p>
//                   </div>
//                   <div className="amt-lst">
//                     <p>
//                       <span className="dollar">$</span>1500.50
//                     </p>
//                     <p>Income</p>
//                   </div>
//                   <div className="amt-lst">
//                     <p>
//                       <span className="dollar">$</span>350.60
//                     </p>
//                     <p>Outcome</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="card-bottom">
//                 <div id="c-b-fst">
//                   <div id="line" />
//                   <div id="c-b-wpl">
//                     <p>Weekly payment limit</p>
//                     <p>$350.50 / $4000</p>
//                   </div>
//                 </div>
//                 <div id="c-b-sec">
//                   <div id="on-btn" />
//                   <p>Deacivate card</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="transaction-list">
//             <h2>Transaction</h2>
//             <table>
//               <tbody>
//                 <tr>
//                   <td>Reciver</td>
//                   <td>Type</td>
//                   <td>Date</td>
//                   <td>Amount</td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <i className="fa fa-shopping-cart" aria-hidden="true" />
//                     Tesco Market
//                   </td>
//                   <td>Shopping</td>
//                   <td>04 Jul 2021</td>
//                   <td>$75.67</td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <i className="fa fa-truck" aria-hidden="true" />
//                     ElectroMen Market
//                   </td>
//                   <td>Shopping</td>
//                   <td>27 Jul 2021</td>
//                   <td>$250.00</td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <i className="fa fa-leaf" aria-hidden="true" />
//                     Firogio Restaurant
//                   </td>
//                   <td>Food</td>
//                   <td>14 Jul 2021</td>
//                   <td>$19.50</td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <i className="bx bx-user" />
//                     JayaKanna
//                   </td>
//                   <td>Sports</td>
//                   <td>07 Jul 2021</td>
//                   <td>$350</td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <i className="bx bx-user" />
//                     MuraliKrishna
//                   </td>
//                   <td>Shopping</td>
//                   <td>05 Jul 2021</td>
//                   <td>$450</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div id="analytics">
//           <div id="goals">
//             <p id="gl-title">
//               Goals
//               <span className="plus">
//                 <i className="bx bxs-plus-circle" />
//               </span>
//             </p>
//             <div id="goal-bx">
//               <div className="gl-card">
//                 <div className="gl-cd-top">
//                   <h1>$450</h1>
//                   <p>05/04/2021</p>
//                 </div>
//                 <div className="gl-cd-bottom">
//                   <i className="bx bx-traffic-cone" />
//                   <p>Holidays</p>
//                 </div>
//               </div>
//               <div className="gl-card">
//                 <div className="gl-cd-top">
//                   <h1>$450</h1>
//                   <p>05/04/2021</p>
//                 </div>
//                 <div className="gl-cd-bottom">
//                   <i className="fa fa-paint-brush" aria-hidden="true" />
//                   <p>Renovation</p>
//                 </div>
//               </div>
//               <div className="gl-card">
//                 <div className="gl-cd-top">
//                   <h1>$450</h1>
//                   <p>05/04/2021</p>
//                 </div>
//                 <div className="gl-cd-bottom">
//                   <i className="fa fa-gamepad" aria-hidden="true" />
//                   <p>Xbox</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="outcome-statistics">
//             <p id="o-s-title">Outcome Statistics</p>
//             <div id="line-row">
//               <div id="fst-line" className="lines">
//                 <span className="l-r-icon">
//                   <i className="bx bx-cart" />
//                 </span>
//                 <div className="l-r-line-row">
//                   <div className="l-r-line" />
//                   <p>Shopping</p>
//                 </div>
//                 <p className="num">52%</p>
//               </div>
//               <div id="sec-line" className="lines">
//                 <span className="l-r-icon">
//                   <i className="bx bxs-truck" />
//                 </span>
//                 <div className="l-r-line-row">
//                   <div className="l-r-line" />
//                   <p>Shopping</p>
//                 </div>
//                 <p className="num">21%</p>
//               </div>
//               <div id="three-line" className="lines">
//                 <span className="l-r-icon">
//                   <i className="bx bxs-plane-alt" />
//                 </span>
//                 <div className="l-r-line-row">
//                   <div className="l-r-line" />
//                   <p>Shopping</p>
//                 </div>
//                 <p className="num">74%</p>
//               </div>
//             </div>
//           </div>
//           <div id="new-transaction">
//             <div id="user-name">
//               <h2>New transaction</h2>
//               <div id="user-img">
//                 <div className="u-img-bx">
//                   <span className="img-bx">
//                     <img
//                       src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
//                       alt="User img"
//                     />
//                   </span>
//                   <p>Elon</p>
//                 </div>
//                 <div className="u-img-bx">
//                   <span className="img-bx">
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
//                       alt="User img"
//                     />
//                   </span>
//                   <p>Steve</p>
//                 </div>
//                 <div className="u-img-bx">
//                   <span className="img-bx">
//                     <img
//                       src="https://scontent.fcjb5-1.fna.fbcdn.net/v/t1.6435-9/31265610_104334390432316_3818401311133532160_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=McZ79k7K8iYAX83yl-7&_nc_ht=scontent.fcjb5-1.fna&oh=ab36af5e0658fd653ce6c1904286cb92&oe=6125D134"
//                       alt="User img"
//                     />
//                   </span>
//                   <p>Murali</p>
//                 </div>
//                 <div className="u-img-bx">
//                   <span className="img-bx">
//                     <img
//                       src="https://scontent.fcjb5-1.fna.fbcdn.net/v/t31.18172-8/11856296_1445755112421267_5049286366281981411_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4cBvTgE3Kw4AX8GIiUj&_nc_ht=scontent.fcjb5-1.fna&oh=9c90a5958c0b615364e224d6e973a2d7&oe=6124739A"
//                       alt="User img"
//                     />
//                   </span>
//                   <p>Visu</p>
//                 </div>
//                 <div className="u-img-bx">
//                   <span className="img-bx">
//                     <img
//                       src="https://scontent.fcjb5-1.fna.fbcdn.net/v/t31.18172-8/171121_1522637438851_914465_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YFnmX4TwdGIAX-EBnjO&_nc_ht=scontent.fcjb5-1.fna&oh=6063d6357b6d245c82c932a27c384cb9&oe=612523E0"
//                       alt="User img"
//                     />
//                   </span>
//                   <p>Suga</p>
//                 </div>
//                 <div className="u-img-bx">
//                   <span className="img-bx">
//                     <img
//                       src="https://scontent.fcjb5-1.fna.fbcdn.net/v/t1.6435-1/p200x200/96234012_3617611221599333_5375815581477896192_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=QMrpIpRDjewAX9atELx&_nc_ht=scontent.fcjb5-1.fna&oh=fe42efd0770df43d2b7398f681b36cdf&oe=61251826"
//                       alt="User img"
//                     />
//                   </span>
//                   <p>Deeban</p>
//                 </div>
//               </div>
//               <div id="user-search">
//                 <div id="u-search">
//                   <input type="text" placeholder={0} />
//                 </div>
//                 <div id="u-button" className="button">
//                   <p>
//                     Send&nbsp;the&nbsp;transfer
//                     <i className="bx bx-chevron-right" />
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div id="loan">
//               <i className="bx bxs-cloud" />
//               <i className="bx bxs-cloud" />
//               <i className="bx bxs-dollar-circle" />
//               <i className="bx bxs-dollar-circle" />
//               <p>Get grate</p>
//               <p id="btm-p">
//                 loan!
//                 <i className="bx bx-chevron-right" />
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </>
//     );
// }
// {/* <>
//   <title>Travel Agency</title>
//   <meta name="viewport" content="width = device-width, initial-scale = 1" />
//   <link
//     rel="stylesheet"
//     href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
//     integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
//     crossOrigin="anonymous"
//   />
//   <link
//     rel="stylesheet"
//     href="https://fonts.googleapis.com/icon?family=Material+Icons"
//   />
//   <link
//     rel="stylesheet"
//     href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"
//   />
//   <style
//     dangerouslySetInnerHTML={{
//       __html:
//         "\n           \n    header, .main, footer {\n      padding-left: 300px;\n    }\n\n    @media only screen and (max-width : 992px) {\n      header, .main, footer {\n        padding-left: 0;\n      }\n    }\n      \n  "
//     }}
//   />
//   <div className="navbar-fixed">
//     <nav className="teal">
//       <div className="container">
//         <div className="nav-wrapper center">
//           <a href="#" className="brand-logo">
//             Admin
//           </a>
//           <a
//             href="#"
//             data-target="mobile-nav"
//             className="sidenav-trigger show-on-large"
//           >
//             <i className="material-icons">menu</i>
//           </a>
//           <ul
//             className="right hide-on-small-and-down collection"
//             style={{ margin: 0, border: "0px solid transparent" }}
//           >
//             <li
//               className="collection-item avatar"
//               style={{ background: "transparent" }}
//             >
//               <i className="material-icons white blue-text circle">
//                 notifications_active
//               </i>{" "}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </div>
//   <ul id="mobile-nav" className="sidenav sidenav-fixed">
//     <li>
//       <div className="user-view">
//         <div className="background">
//           <img
//             src="https://source.unsplash.com/800x450/?black"
//             className="responsive-img"
//           />
//         </div>
//         <img src="https://source.unsplash.com/800x450/?dp" className="circle" />
//         <span className="white-text name">HotelNG</span>
//         <span className="white-text email">HotelNG@gmail.com</span>
//       </div>
//     </li>
//     <li>
//       <a href="">
//         <i className="material-icons teal-text">dashboard</i>Dashboard
//       </a>
//     </li>
//     <li>
//       <a href="">
//         <i className="material-icons white teal-text">description</i>Post
//       </a>
//     </li>
//     <li>
//       <a href="">
//         <i className="material-icons teal-text">images</i>Images{" "}
//       </a>
//     </li>
//     <li>
//       <a href="">
//         <i className="material-icons teal-text">show_chart</i>Analytics{" "}
//       </a>
//     </li>
//     <li>
//       <a href="">
//         <i className="material-icons teal-text">question_answer</i>Comments{" "}
//       </a>
//     </li>
//     <div className="divider" />
//     <li>
//       <a href="">
//         <i className="material-icons teal-text">help</i>help{" "}
//       </a>
//     </li>
//     <li>
//       <a href="">
//         <i className="material-icons teal-text">input</i>Logout{" "}
//       </a>
//     </li>
//   </ul>
//   {/*card Panel*/}
//   <div className="main">
//     <div className="row">
//       <div className="col l4 m4 s12">
//         <div className="card-panel center">
//           <h5>
//             Users Online{" "}
//             <a href="">
//               <span>
//                 <i className="material-icons tiny">open_in_new</i>
//               </span>
//             </a>
//           </h5>
//           <div id="regions_div" />
//         </div>
//       </div>
//       <div className="col l4 m4 s12">
//         <div className="card-panel center">
//           <h5>
//             Views{" "}
//             <a href="">
//               <span>
//                 <i className="material-icons tiny">open_in_new</i>
//               </span>
//             </a>
//           </h5>
//           <div id="chart_div" />
//         </div>
//       </div>
//       <div className="col l4 m4 s12">
//         <div className="card-panel center">
//           <h5>
//             Earning{" "}
//             <a href="">
//               <span>
//                 <i className="material-icons tiny">open_in_new</i>
//               </span>
//             </a>
//           </h5>
//           <div id="calendar_basic" />
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="main">
//     <div className="row">
//       <div className="col l6 m6 s12">
//         <div className="collection">
//           <div className="collection-item">
//             <ul className="collection with-header">
//               <li className="collection-header teal">
//                 <h4>Recent Post</h4>
//               </li>
//               <li className="collection-item">
//                 <span className="teal-text text-lighten-3">
//                   this is going to be a textif you know you know
//                 </span>
//                 <div>
//                   <i className="material-icons tiny teal-text text-lighten-3">
//                     edit
//                   </i>
//                   EDIT|<i className="material-icons tiny red-text">close</i>{" "}
//                   Delete|
//                   <i className="material-icons tiny teal-text text-lighten-3">
//                     share
//                   </i>{" "}
//                   Share
//                 </div>{" "}
//               </li>
//               <li className="collection-item">
//                 <span className="teal-text text-lighten-3">
//                   this is going to be a textif you know you know
//                 </span>
//                 <div>
//                   <i className="material-icons tiny teal-text text-lighten-3">
//                     edit
//                   </i>
//                   EDIT|<i className="material-icons tiny red-text">close</i>{" "}
//                   Delete|
//                   <i className="material-icons tiny teal-text text-lighten-3">
//                     share
//                   </i>{" "}
//                   Share
//                 </div>{" "}
//               </li>
//               <li className="collection-item">
//                 <span className="teal-text text-lighten-3">
//                   this is going to be a textif you know you know
//                 </span>
//                 <div>
//                   <i className="material-icons tiny teal-text text-lighten-3">
//                     edit
//                   </i>
//                   EDIT|<i className="material-icons tiny red-text">close</i>{" "}
//                   Delete|
//                   <i className="material-icons tiny teal-text text-lighten-3">
//                     share
//                   </i>{" "}
//                   Share
//                 </div>{" "}
//               </li>
//               <li className="collection-item">
//                 <span className="teal-text text-lighten-3">
//                   this is going to be a textif you know you know
//                 </span>
//                 <div>
//                   <i className="material-icons tiny teal-text text-lighten-3">
//                     edit
//                   </i>
//                   EDIT|<i className="material-icons tiny red-text">close</i>{" "}
//                   Delete|
//                   <i className="material-icons tiny teal-text text-lighten-3">
//                     share
//                   </i>{" "}
//                   Share
//                 </div>{" "}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="col l6 m6 s12">
//         <div className="collection">
//           <div className="collection-item">
//             <ul className="collection with-header">
//               <li className="collection-header teal">
//                 <h4>Recent Comments</h4>
//               </li>
//               <li className="collection-item">
//                 <span>this is going to be a textif you know you know</span>
//                 <div>
//                   <i className="material-icons tiny">check</i>
//                   <span className="teal-text">Approve</span>|
//                   <i className="material-icons tiny red-text">close</i>
//                   <span className="teal-text">Remove</span>
//                 </div>{" "}
//               </li>
//               <li className="collection-item">
//                 <span>this is going to be a textif you know you know</span>
//                 <div>
//                   <i className="material-icons tiny">check</i>
//                   <span className="teal-text">Approve</span>|
//                   <i className="material-icons tiny red-text">close</i>
//                   <span className="teal-text">Remove</span>
//                 </div>{" "}
//               </li>
//               <li className="collection-item">
//                 <span>this is going to be a textif you know you know</span>
//                 <div>
//                   <i className="material-icons tiny">check</i>
//                   <span className="teal-text">Approve</span>|
//                   <i className="material-icons tiny red-text">close</i>
//                   <span className="teal-text">Remove</span>
//                 </div>{" "}
//               </li>
//               <li className="collection-item">
//                 <span>this is going to be a textif you know you know</span>
//                 <div>
//                   <i className="material-icons tiny">check</i>
//                   <span className="teal-text">Approve</span>|
//                   <i className="material-icons tiny red-text">close</i>
//                   <span className="teal-text">Remove</span>
//                 </div>{" "}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </>
//      )} */}
<>
  {/*--------- aside -----------*/}
  <aside>
    <div className="asideheader">
      {" "}
      {/* header of aside */}
      <p>
        Boat<span>Stay</span>
      </p>
      <select>
        <option> EG </option>
        <option>AR </option>
      </select>
    </div>
    <ul>
      {" "}
      {/* list */}
      <li>
        {" "}
        <i className="fa fa-delicious" aria-hidden="true" /> Dashboard
      </li>
      <li>
        {" "}
        <i className="fa fa-envelope" aria-hidden="true" /> Mailbox
      </li>
      <li>
        {" "}
        <i className="fa fa-shirtsinbulk" aria-hidden="true" />
        Invoices
      </li>
      <li>
        {" "}
        <i className="fa fa-comment" aria-hidden="true" />
        Chats <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <i className="fa fa-bar-chart" aria-hidden="true" />
        <Link to="/addboat">Edit Table</Link>
      </li>
      <li>
        {" "}
        <i className="fa fa-code" aria-hidden="true" />
        <Link to="/Table">Table</Link>
      </li>
      <li>
        {" "}
        <i className="fa fa-user-circle" aria-hidden="true" />
        <Link to="/ProfilePage">Profile</Link>
      </li>
      <li>
        {" "}
        <i className="fa fa-align-justify" aria-hidden="true" />
        Stickey Notes
      </li>
      <li>
        {" "}
        <i className="fa fa-align-left fa-flip-vertical" aria-hidden="true" />
        Forms <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <i className="fa fa-th-large" aria-hidden="true" />
        Layout <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <i className="fa fa-trello" aria-hidden="true" />
        Kindo Ui Widgets <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <i className="fa fa-puzzle-piece fa-rotate-270" aria-hidden="true" />
        Components <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <i className="fa fa-edge" aria-hidden="true" />
        E-commerce <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <i className="fa fa-suitcase" aria-hidden="true" />
        Plugins <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <i className="fa fa-file" aria-hidden="true" />
        Pages <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <i className="fa fa-list-ul" aria-hidden="true" />
        Multi Leve <i className="fa fa-angle-down" aria-hidden="true" />
      </li>
    </ul>
  </aside>
  {/*----------- header ----------------*/}
  <header className="headera">
    |<i className="fa fa-long-arrow-left fa-lg" aria-hidden="true" />
    <i className="fa fa-th-large fa-lg" aria-hidden="true" />
    <ul>
      <li>
        {" "}
        <i className="fa fa-bars fa-lg" aria-hidden="true" />
      </li>
      <li>
        {" "}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWz-db9BlSeCFXUO5iEzIPq-rQb6xvln6o5NWJ6vbuqYlk5fXjaw"
          alt="profile"
        />{" "}
      </li>
      <li>
        {" "}
        <span>12</span> <i className="fa fa-bell fa-lg" aria-hidden="true" />{" "}
      </li>
      <li>
        {" "}
        <i className="fa fa-search fa-lg" aria-hidden="true" />{" "}
      </li>
      <li>
        {" "}
        <i className="fa fa-arrows-alt fa-lg" aria-hidden="true" />{" "}
      </li>
    </ul>
  </header>
  {/*----------- content ----------------*/}
  <article>
    {/*  setting button  */}
    <button>
      {" "}
      <i className="fa fa-cog" aria-hidden="true" />{" "}
    </button>
    {/* ---- first section ---- */}
    <section>
      {/* div 1 */}
      <div>
        <div className="details">
          {" "}
          <span>Visitors ⟨last 7d⟩</span>
          <br /> 12,456{" "}
        </div>
        <div className="minichart">
          {" "}
          {/* visitor chart */}
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      {/* div 2 */}
      <div>
        <div className="details">
          {" "}
          <span>Sale</span>
          <br /> $142,863{" "}
        </div>
        <div className="graph">
          <div className="graph_up">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="graph_dn"> </div>
        </div>
      </div>
      {/* div 3 */}
      <div>
        <div className="details">
          {" "}
          <span>Orders Copleted</span>
          <br /> 64%{" "}
        </div>
        <div className="circel download" />
      </div>
      {/* div 4 */}
      <div>
        <div className="details">
          {" "}
          <span>Visitors ⟨life⟩</span>
          <br /> 32{" "}
        </div>
      </div>
    </section>
    {/* ---- second section (circles graphes)---- */}
    <section>
      {/* div 1 */}
      <div>
        <div className="face">
          <div className="sec2up">
            {" "}
            {/* graphes */}
            <div className="circel circel1">
              {" "}
              {/* message circel */}
              <i className="fa fa-envelope fa-2x" aria-hidden="true" />
            </div>
          </div>
          <div className="sec2dn">
            {" "}
            {/* name & icon */}
            <span>User Message</span>
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </div>
        {/* div 1 (back face) */}
        <div className="back">
          <span>User Message</span>
          <i className="fa fa-times" aria-hidden="true" />
          <p>Lorem ipsum dolar sit amet , consectetur adipisicing test. </p>
          <button>More</button>
        </div>
      </div>
      {/* div 2 */}
      <div>
        <div className="face">
          <div className="sec2up">
            <div className="sec2chart">
              {" "}
              {/* conversations chart */}
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="sec2dn">
            <span>Conversations</span>
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </div>
        {/* div 2 (back face) */}
        <div className="back">
          <span>Conversations</span>
          <i className="fa fa-times" aria-hidden="true" />
          <p>Lorem ipsum dolar sit amet , consectetur adipisicing test. </p>
          <button>More</button>
        </div>
      </div>
      {/* div 3 */}
      <div>
        <div className="face">
          <div className="sec2up">
            <div className="circel circel2">
              {" "}
              <span>$</span>{" "}
            </div>{" "}
            {/* red circel */}
            <div className="circel circel2a" />
          </div>
          <div className="sec2dn">
            <span>Tasks List</span>
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </div>
        {/* div 3 (back face) */}
        <div className="back">
          <span>Tasks List</span>
          <i className="fa fa-times" aria-hidden="true" />
          <p>Lorem ipsum dolar sit amet , consectetur adipisicing test. </p>
          <button>More</button>
        </div>
      </div>
      {/* div 4 */}
      <div>
        <div className="face">
          <div className="sec2up">
            <div className="circel circel3">
              {" "}
              <span>53%</span>{" "}
            </div>{" "}
            {/* green circel */}
          </div>
          <div className="sec2dn">
            <span>Orders</span>
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </div>
        {/* div 4 (back face) */}
        <div className="back">
          <span>Orders</span>
          <i className="fa fa-times" aria-hidden="true" />
          <p>Lorem ipsum dolar sit amet , consectetur adipisicing test. </p>
          <button>More</button>
        </div>
      </div>
      {/* div 5 */}
      <div>
        <div className="face">
          <div className="sec2up">
            <div className="circel circel4">
              {" "}
              {/* gray circel */}
              <i className="fa fa-user-plus fa-2x" aria-hidden="true" />
            </div>
            <div className="circel circel4a" />
          </div>
          <div className="sec2dn">
            <span>User Registrations</span>
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </div>
        {/* div 5 (back face) */}
        <div className="back">
          <span>User Registrations</span>
          <i className="fa fa-times" aria-hidden="true" />
          <p>Lorem ipsum dolar sit amet , consectetur adipisicing test. </p>
          <button>More</button>
        </div>
      </div>
    </section>
    {/* ---- third section (levels & charts) ---- */}
    <section>
      {/* div 1 */}
      <div>
        <div className="left_table">
          <div className="row">
            <div className="cell">
              {" "}
              <span>task</span>{" "}
            </div>
            <div className="cell">status</div>
            <div className="cell">progress</div>
            <div className="cell">Data date</div>
          </div>
          <div className="row">
            <div className="cell">ALTR-231</div>
            <div className="cell">
              {" "}
              <span>in progress</span>{" "}
            </div>
            <div className="cell">
              <div className="level" />
              <div className="level1" />
            </div>
            <div className="cell">2-10-2017</div>
          </div>
          <div className="row">
            <div className="cell">ALTR-84</div>
            <div className="cell">
              {" "}
              <span>open</span>{" "}
            </div>
            <div className="cell">
              <div className="level" />
              <div className="level2" />
            </div>
            <div className="cell">9-10-2017</div>
          </div>
          <div className="row">
            <div className="cell">ALTR-128</div>
            <div className="cell">
              <span>new</span>
            </div>
            <div className="cell">
              <div className="level" />
              <div className="level3" />
            </div>
            <div className="cell">12-10-2017</div>
          </div>
          <div className="row">
            <div className="cell">ALTR-240</div>
            <div className="cell">
              {" "}
              <span>open</span>{" "}
            </div>
            <div className="cell">
              <div className="level" />
              <div className="level4" />
            </div>
            <div className="cell">17-10-2017</div>
          </div>
          <div className="row">
            <div className="cell">ALTR-92</div>
            <div className="cell">
              {" "}
              <span>Reached</span>{" "}
            </div>
            <div className="cell">
              <div className="level" />
              <div className="level5" />
            </div>
            <div className="cell">21-10-2017</div>
          </div>
          <div className="row">
            <div className="cell">ALTR-65</div>
            <div className="cell">
              {" "}
              <span>overload</span>{" "}
            </div>
            <div className="cell">
              <div className="level" />
              <div className="level6" />
              <div />
            </div>
            <div className="cell">26-10-2017</div>
          </div>
        </div>
      </div>
      {/* div 2 */}
      <div>
        Statistics
        <div className="right_table">
          <ul>
            <li>9</li>
            <li>8</li>
            <li>7</li>
            <li>6</li>
            <li>5</li>
            <li>4</li>
            <li>3</li>
            <li>2</li>
            <li>1</li>
            <li>0</li>
          </ul>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="row">
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
          </div>
        </div>
        {/* div 2 -> (right_table charts) */}
        <div>
          <div className="sec3chart quarter1">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="sec3chart quarter2">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="sec3chart quarter3">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="sec3chart quarter4">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <span>Quarter 1</span>
        <span>Quarter 2</span>
        <span>Quarter 3</span>
        <span>Quarter 4</span>
      </div>
    </section>
  </article>
</>
     )}