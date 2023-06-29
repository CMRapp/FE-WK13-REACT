import React from 'react'

export default class LoginForm extends React.Component{
    render() {
        return (
          <div className='container bg-light my-5 py-3 border border-danger border-1 rounded'>
            

            <div className='container'>                
                
                <form className='login' target='#'>
                <h3 className='mb-3'>Please Login To Our Site</h3>
                <div className='row'>
                        <div className='col-3'>
                            <input className='text-input' type='text' placeholder='User Name' />
                        </div>

                        <div className='col-3'>
                            <input className='text-input' type='password' placeholder='Password' />
                        </div>

                        <div className='col-3'>
                            <button className='btn btn-primary submit w-100' type='submit'>Submit</button>
                        </div>

                        <div className='form-check col-3'>
                            <input className='form-check-input' type='checkbox' id='rememberme'/>
                            <label class='form-check-label' for='rememberme'>Remember me</label>
                        </div>                      
                    </div>
                </form>
            </div>
            </div>
        
        )
    }
}
