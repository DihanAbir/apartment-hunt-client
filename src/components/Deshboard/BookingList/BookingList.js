import React from "react";
import { Table } from "react-bootstrap";
import "./BookingList.scss";

const BookingList = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h4>Booking List</h4>
        <h4>User Name</h4>
      </div>

      <div >
        
        <Table class='table borderless  ' striped bordered hover>
          <thead>
            <tr className='pt-5 mt-5'>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>Abir</td>
              <td>Nahid.murad@gmail.com</td>
              <td>01601601601</td>
              <td>Demo message for testing Demo message for testingDemo message for testing</td>
              <td>
                <select>
                  <option value="A">Approve</option>
                  <option value="B">Pending B</option>
                  <option value="C">Delete C</option>
                </select>
              </td>
            </tr>
            <tr >
              <td>Abir</td>
              <td>Nahid.murad@gmail.com</td>
              <td>01601601601</td>
              <td>Demo message for testing De Demo message for testingDemo message for testingDemo message for testingmo message for testingDemo message for testing</td>
              <td>
                <select>
                  <option value="A">Approve</option>
                  <option value="B">Pending B</option>
                  <option value="C">Delete C</option>
                </select>
              </td>
            </tr>
            <tr >
              <td>Abir</td>
              <td>Nahid.murad@gmail.com</td>
              <td>01601601601</td>
              <td>Demo message for testing Demo message for testingDemo message for testing</td>
              <td>
                <select>
                  <option value="A">Approve</option>
                  <option value="B">Pending</option>
                  <option value="C">Delete </option>
                </select>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BookingList;
