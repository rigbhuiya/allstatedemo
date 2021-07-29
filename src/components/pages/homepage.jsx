import React, { Component } from 'react';
import './homepage.css'
import { Table } from 'react-bootstrap';

function Homepage(){

    return(
        <div class="row" id="a">
<div class="container">
<div id="asg">Internal Announcements</div>
<div id ="b">Ask ABIe</div>
<p>Get updated on market appetite, ABI products and all the latest enhancements and resources. Please provide your feedback using the links inside ABIe.
  {/* <Link href="https://www.allstate.com/">What's New in ABIe</Link> */}
</p>
<div id="b" >Enhanced Agency Support Available at (800)729-3005</div>
<p>Allstate Business Insurance (ABI) offers enhanced support to you as you transition to new products,pricing and the Connexus/Commercial Agent platforms. Call (800) 729-300 for access to Business Insurance experts by using the following prompts:

  <br/>
  <p>+ For the Agency Contact Center, press 1</p>
  <br/>
  <p>+ For technology support from Allstate Technology Support Center, press 2 (agents with direct underwriting access, press 5)</p>
  <br/>
  <p>+ If you know your party's extension, press 8 (agents with direct underwriting access, press 6)</p>

</p>
<br/>
<div id="b">Get Connexus help with the ABI Agency Contact Center</div>
<br/>
<div id ="asg">Last Accessed Policies</div>
<Table striped hover size="sm">
  {/* <thead id ="asg">
    Last Accessed Policies
    </thead> */}
    <tbody>
      <tr id ="asg">
    
      <td>Name</td>
      <td>Line</td>
      <td>Policy/Quote</td>
      <td>Premium</td>
      <td>Effective</td>
      <td>Trans Type</td>
      <td>Accessed</td>
    </tr>
    <tr>
      <td>KIE LEE</td>
      <td>Businessowners</td>
      <td>3455957 01</td>
      <td>$0</td>
      <td>01/01/19</td>
      <td>New Business Quote</td>
      <td>04/15/19</td>
    </tr>
    <tr>
    <td>TEST</td>
      <td>Commercial Automobile</td>
      <td>3455887 01</td>
      <td>$855</td>
      <td>01/01/19</td>
      <td>New Business Quote</td>
      <td>10/15/19</td>
    </tr>
    <tr>
    <td>KIE LEE</td>
      <td>Businessowners</td>
      <td>3455957 01</td>
      <td>$0</td>
      <td>01/01/19</td>
      <td>New Business Quote</td>
      <td>04/15/19</td>
    </tr>
    {/* <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</Table>
<Table>
  <thead id="asg">
    My Assignments
  </thead>
  <tbody>
    There are no items to show in this view.
  </tbody>
</Table>
</div>
</div>

    );

}

export default Homepage;