import React, {useState} from 'react'
import { useFormik } from "formik";

const car_longer_avg = 3;
const time_for_one_car = 3;
const agent_salary_avg_ph_euro = 18;
const agent_salary_avg_pm_euro = agent_salary_avg_ph_euro/60;
const coefficient_of_eco = 0.5;
const start_cost = 50;





const Mession_1 = ({isShowing}) => {

  const [state, setState] = useState({area : '', time : '', date : '', show : true});

  let tot = ((state.area/car_longer_avg)* time_for_one_car * agent_salary_avg_pm_euro * coefficient_of_eco 
  * ((state.time / state.time) + 0.2)) + start_cost

  const coefficiet_totatl = isNaN(tot)? 0 : tot

  const formik = useFormik({
    onSubmit : values => {
      console.log('Form data',values)
    }
  })
  function handelAreaChange(e){
    setState({...state, area : e.target.value});
  }
  function handelTimeChange(e){
    setState({...state, time : e.target.value});
  }
  function handelDateChange(e){
    setState({...state, date : e.target.value});
  }

  function handelSubmit(){
    setState({...state, show : true })
  }

  return (
    isShowing &&
      <div className="car-plaques-scanner">
        <div className="container">
          <form className="car-scanner-form">
            <div className="input-group mb-3 mt-4">
              <span className="input-group-text">Enter the area coordinates (Metre) :</span>
              <input type="text" value={state.area} onChange={handelAreaChange} className="form-control" id="area" name={1} title={'The size of street'} placeholder ={'Ex: 278 ( in m)'}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Enter estimated time (Minute) :</span>
              <input type="text" value={state.time} onChange={handelTimeChange} className="form-control" id="time" name={1} title={'Time how the drone will work'} placeholder ={'Ex: 50 (in min)'}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Enter the date (dd/mm/yy) :</span>
              <input type="date" value={state.date} onChange={handelDateChange} className="form-control" id="area" name="area"
                data-bs-toggle="body" title="This is an estimation" data-bs-content="To get more inormation please contact us !"
                placeholder ={'Ex: 01/01/2023'}/>
            </div>
            {/* onClick={(e) => e.preventDefault()} */}
            <button type="submit" onClick={handelSubmit}  className="btn btn-warning  btn-outline-dark">GET MY OFFERT !!</button>
          </form>

          <p className="Resault"></p>{state.show && <span className="border border-warning"> <h3 className='mt-4' id='cost'>
            Total Cost : {coefficiet_totatl}€/session <span className='fs-6 '>(This is an estimation, Please contact us to get more specific information).</span></h3></span>}
        </div>
      </div>
    
  )
}

export default Mession_1