import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import "./styles/TableStyles.css";

const ProducerGrid = () => {
  return (
    <div>
      <table className="table mb-0">
        <thead>
          <tr>
            <th className="col-1">#</th>
            <th className="col-2">Produtor</th>
            <th className="col-2">CAMPO</th>
            <th className="col-2">CAMPO</th>
            <th className="col-1">CAMPO</th>
            <th className="col-2">CAMPO</th>
            <th className="col-1">CAMPO</th>
            <th className="col-1"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <input className="form-control"></input>
            </td>
            <td></td>
            <td>
              <input className="form-control"></input>
            </td>
            <td></td>
            <td>
              <input className="form-control"></input>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>João</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Lucas</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pedro</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Gabriel</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>

          <tr>
            <th scope="row">5</th>
            <td>Fernando</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProducerGrid;
