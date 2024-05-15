import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import "./TableStyles.css";

const ProducerGrid = () => {
  return (
    <div>
      <table className="table mb-0">
        <thead>
          <tr>
            <th className="col-1">#</th>
            <th className="col-2">NOME</th>
            <th className="col-2">CPF</th>
            <th className="col-2">CNPJ</th>
            <th className="col-1">ESTADO</th>
            <th className="col-2">MUNICÍPIO</th>
            <th className="col-1">MATRICULA</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <input className="form-control"></input>
            </td>
            <td>
              <input className="form-control"></input>
            </td>
            <td>
              <input className="form-control"></input>
            </td>
            <td>
              <input className="form-control"></input>
            </td>
            <td>
              <input className="form-control"></input>
            </td>
            <td>
              <input className="form-control"></input>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>João</td>
            <td>42739351602</td>
            <td>30.954.024/0001-40</td>
            <td>SP</td>
            <td>Santo André</td>
            <td>7162529</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>
          <tr className="grid-collum-container">
            <th scope="row">2</th>
            <td>Lucas</td>
            <td>32739351401</td>
            <td>87.414.697/0001-25</td>
            <td>RJ</td>
            <td>Petrópolis</td>
            <td>1446514</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pedro</td>
            <td>42839451712</td>
            <td>50.390.724/0001-67</td>
            <td>MG</td>
            <td>Montes Claros</td>
            <td>2261522</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Gabriel</td>
            <td>76739351203</td>
            <td>50.390.724/0001-67</td>
            <td>SP</td>
            <td>São Paulo</td>
            <td>3562521</td>
            <td>
              <MdEdit className="edit-icon" />
              <MdDelete className="delete-icon" />
            </td>
          </tr>

          <tr>
            <th scope="row">5</th>
            <td>Fernando</td>
            <td>26239351201</td>
            <td>51.280.279/0001-45</td>
            <td>RS</td>
            <td>Alvorada</td>
            <td>4563534</td>
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
