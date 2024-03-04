import React from 'react'
import { useLocation } from 'react-router-dom';

function SurveyDetail(props:any) {
    
const {state} = props;
const location =useLocation();
const survey = location.state.data;
console.log(location.state.data,"probps");
  return (
    <div>
        <table className='table table-hover table-bordered'>
            <tr>
                <th>PSU</th>
                <td>{survey.PSU}</td>
            </tr>
            <tr>
                <th>HH No</th>
                <td>{survey.HH_NO}</td>
            </tr>
            <tr>
                <th>Members ({survey.MEM_INFO.length})</th>
                <td>{survey.MEM_INFO.length}</td>
            </tr>
            <tr>
                <th>PSU</th>
                <td>{survey.PSU}</td>
            </tr>
            <tr>
                <th>PSU</th>
                <td>{survey.PSU}</td>
            </tr>
        </table>
    </div>
  )
}
export default SurveyDetail;