import React from 'react';
import { Table } from 'reactstrap';

export default class TableHover extends React.Component {
  render() {
    return (
      <Table hover className="mb-0 mt-3">
        <thead>
          <tr>
            <th>稱謂</th>
            <th>類型</th>
            <th>證照</th>
            <th>時長</th>
            <th>視圖</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">原輔材料倉庫管理</a></th>
            <td>文件</td>
            <td>初級工人證照</td>
            <td>00:25</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">裁斷車間管理</a></th>
            <td>文件</td>
            <td>初級工人證照</td>
            <td>00:25</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">調配中心管理</a></th>
            <td>文件</td>
            <td>初級工人證照</td>
            <td>00:25</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">針車車間管理</a></th>
            <td>文件</td>
            <td>初級工人證照</td>
            <td>00:25</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row"><a className="metismenu-link" href="#/custom/custom-course">鞋底車間管理</a></th>
            <td>文件</td>
            <td>初級工人證照</td>
            <td>00:25</td>
            <td>3</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}


// import React from 'react';
// import { Table } from 'reactstrap';

// export default class TableHover extends React.Component {
//   render() {
//     return (
//       <Table hover className="mb-0">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </Table>
//     );
//   }
// }
