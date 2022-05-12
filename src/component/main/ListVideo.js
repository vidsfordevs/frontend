import React from 'react'
import { useNavigate } from 'react-router-dom';

function ListVideo() {


  const navigate = useNavigate(); 

  return (
    <div className='query-listing' >

      <header className='header bg-dark' >

        <div className='container' style={{ padding: '5rem 0' }}>
          <div className='input-group'>
            <input className='form-control' placeholder='Search Tests Here' />
            <button className='btn btn-primary'>Search</button>
          </div>
        </div>

      </header>
      <div className='container'>
        <div className='row my-5'>
          < div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src='https://cdn.educba.com/academy/wp-content/uploads/2020/04/React-Native-Firebase.jpg' ></img>
              <div className='card-body'>
                <h4 className='card-title'>
                  React Native Firebase
                </h4>
                <p> in <span className='text-muted'>Web Development</span> </p>
                <p>by Sazid Ahamad</p> 
                <button className='btn btn-primary float-end' onClick={e => navigate('/main/viewvideo')}>View Solution</button>
              </div>
            </div>
          </div>
          < div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src='https://cdn.educba.com/academy/wp-content/uploads/2020/04/React-Native-Firebase.jpg' ></img>
              <div className='card-body'>
                <h4 className='card-title'>
                  React Native Firebase
                </h4>
                <p> in <span className='text-muted'>Web Development</span> </p>
                <p>by Sazid Ahamad</p>
                <button className='btn btn-primary float-end'   onClick={e => navigate('/main/viewvideo')} >View Solution</button>
              </div>
            </div>
          </div>
          < div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src='https://cdn.educba.com/academy/wp-content/uploads/2020/04/React-Native-Firebase.jpg' ></img>
              <div className='card-body'>
                <h4 className='card-title'>
                  React Native Firebase
                </h4>
                <p> in <span className='text-muted'>Web Development</span> </p>
                <p>by Sazid Ahamad</p>
                <button className='btn btn-primary float-end '  onClick={e => navigate('/main/viewvideo')} >View Solution</button>
              </div>
            </div>
          </div>
          < div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src='https://cdn.educba.com/academy/wp-content/uploads/2020/04/React-Native-Firebase.jpg' ></img>
              <div className='card-body'>
                <h4 className='card-title'>
                  React Native Firebase
                </h4>
                <p> in <span className='text-muted'>Web Development</span> </p>
                <p>by Sazid Ahamad</p>
                <button className='btn btn-primary float-end'  onClick={e => navigate('/main/viewvideo')}  >View Solution</button>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default ListVideo;