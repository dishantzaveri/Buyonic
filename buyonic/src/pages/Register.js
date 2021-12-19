import { useState, useContext } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  styled,
  StepConnector,
  stepConnectorClasses
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Check from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import axios from 'axios'
import logo from '../utils/logo.svg'
import lightlogo from '../utils/lightlogo.svg' 
import wave from '../utils/lightwave.svg'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext';

const steps = ['Name & Email', 'Phone Number & Address', 'City & State', 'Create Password'];

export const Register = () => {

  const { setToken } = useContext(GlobalContext)

  let navigate = useNavigate();

  const regexEmail = /^((([a-zA-Z0-9\.]+)@([a-z]+)\.(([a-z]{2,5}\.[a-z]{2,3})|([a-z]{2,5})))|(\d{10}))/g
  const regexName = /([A-Za-z]){2,32}/g
  const regexPhone = /([0-9]){10}/g
  const regexAddress = /([A-Za-z0-9\.\,\/]){5,32}/g
  const regexCity = /([A-Za-z]){3,32}/g
  const regexState = /([A-Za-z]){3,32}/g
  const regexPassword = /([A-Za-z0-9]){8,32}/g

  const [activeStep, setActiveStep] = useState(0);

  const [showPassword1, setShowPassword1] = useState(false)

  const [showPassword2, setShowPassword2] = useState(false)

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    password1: '',
    password2: '',
  })

  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    state: false,
    password1: false,
    password2: false,
  })

  const nextPage1 = () => {
    let name = regexName.test(values.name)
    let email = regexEmail.test(values.email)
    if (name && email) {
      setActiveStep(activeStep + 1)
    }
    console.log(name, email)
    setError({
      ...error,
      email: !email,
      name: !name,
    })
  }

  const nextPage2 = () => {
    let phone = regexPhone.test(values.phone)
    let address = regexAddress.test(values.address)
    if (phone && address) {
      setActiveStep(activeStep + 1)
    }
    console.log(phone, address)
    setError({
      ...error,
      address: !address,
      phone: !phone,
    })
  }

  const nextPage3 = () => {
    let city = regexCity.test(values.city)
    let state = regexState.test(values.state)
    if (city && state) {
      setActiveStep(activeStep + 1)
    }
    console.log(city, state)
    setError({
      ...error,
      state: !state,
      city: !city,
    })
  }

  const nextPage4 = () => {
    let password1 = regexPassword.test(values.password1)
    let password2 = values.password1 === values.password2
    if (password1 && password2) {
      setActiveStep(activeStep + 1)
    }
    console.log(password1, password2)
    setError({
      ...error,
      password1: !password1,
      password2: !password2,
    })
  }

  const register = () => {
    if (values.password1 === values.password2) {
      let data = new FormData();
      data.append('email', values.email);
      data.append('password', values.password1);
      data.append('name', values.name);
      data.append('address', values.address);
      data.append('contact', values.phone);
      data.append('city', values.city);
      data.append('state', values.state);

      let config = {
        method: 'post',
        url: 'https://buyoni.herokuapp.com/auth/register/',
        headers: {},
        data : data
      };

      axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setToken(response.data.token);
        navigate('/register/verify')
      })
      .catch((error) => {
        console.log(error);
      });
    } else console.log('Password Dont Match!')
  }

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#4ade80',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#4ade80',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#e5e7eb',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));
  
  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#e5e7eb',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#4ade80',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#4ade80',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

  return (
    <div className=''>
      <div className="flex flex-col space-y-4 items-center justify-center dark:bg-gray-800 bg-gray-100 dark:text-gray-200 text-gray-800 w-full min-h-screen pb-8">
        <Link to='/home'>
          <img src={logo} alt='' className='w-36'></img>
        </Link>
        <div className="flex flex-col space-y-4 items-center justify-end w-96 pb-2">
          <p className="text-6xl text-center">Register Now</p>
          <p className="text-base text-center">Create your account!</p>
        </div>
        <div className='py-4'>
          <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
            {steps.map(label => {
              return (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-end w-96 pb-24">
          {activeStep === steps.length ? (
            <div className='flex flex-col space-y-3 w-full'>
              <div className=''>
                <input type={showPassword1 ? 'text' : 'password'} className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter Password'  value={values.password1} onChange={e => setValues({ ...values, password1: e.target.value})}/>
                {showPassword1 ? <VisibilityOffIcon className='ml-[-40px]' onClick={() => setShowPassword1(!showPassword1)} /> : <VisibilityIcon className='ml-[-40px]' onClick={() => setShowPassword1(!showPassword1)} />}
                <h1>&ensp;</h1>
              </div>
              <div>
                <input type={showPassword2 ? 'text' : 'password'} className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Re-enter Password'  value={values.password2} onChange={e => setValues({ ...values, password2: e.target.value})}/>
                {showPassword2 ? <VisibilityOffIcon className='ml-[-40px]' onClick={() => setShowPassword2(!showPassword2)} /> : <VisibilityIcon className='ml-[-40px]' onClick={() => setShowPassword2(!showPassword2)} />}
                <h1>&ensp;</h1>
              </div>
              <div className='flex flex-col w-full'>
                {/* <h1 className='cursor-pointer text-lg text-green-400' onClick={() => reset()}>&larr; Reset</h1> */}
                <button 
                  className='w-full py-3 bg-green-400 rounded-lg shadow-lg shadow-green-400/30 hover:shadow-green-400/50'
                  onClick={() => register()}
                >
                  Register
                </button>
              </div>
            </div>
          ) : activeStep === 0 ? (
            <div className='flex flex-col space-y-3  w-full'>
              <div>
                <input type='text' className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter Name' value={values.name} onChange={e => setValues({ ...values, name: e.target.value})}/>
                {error.name ? <h1 className='text-xs pt-2 text-red-600'>*Name should be between 2 to 32 characters</h1> : <h1>&ensp;</h1>}
              </div>
              <div>
                <input type='email' className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter Email' value={values.email} onChange={e => setValues({ ...values, email: e.target.value})}/>
                {error.email ? <h1 className='text-xs pt-2 text-red-600'>*Invalid email</h1> : <h1>&ensp;</h1>}
              </div>
              <div className='inline-flex justify-end items-center  py-2 pb-3'>
                <h1 className='cursor-pointer text-xl text-green-400' onClick={() => nextPage1()}>Continue &rarr;</h1>
              </div>
            </div>
          ) : activeStep === 1 ? (
            <div className='flex flex-col space-y-3  w-full'>
              <div>
                <input type='tel' className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter Phone Number' value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value})}/>
                {error.phone ? <h1 className='text-xs pt-2 text-red-600'>*Invalid phone number</h1> : <h1>&ensp;</h1>}
              </div>
              <div>
                <input type='text' className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter Address' value={values.address} onChange={e => setValues({ ...values, address: e.target.value})}/>
                {error.address ? <h1 className='text-xs pt-2 text-red-600'>*Enter proper address</h1> : <h1>&ensp;</h1>}
              </div>
              <div className='inline-flex justify-between items-center  py-2 pb-3'>
                <h1 className='cursor-pointer text-xl text-green-400' onClick={() => setActiveStep(activeStep - 1)}>&larr; Previous</h1>
                <h1 className='cursor-pointer text-xl text-green-400' onClick={() => nextPage2()}>Continue &rarr;</h1>
              </div>
            </div>
          ) : activeStep === 2 ? (
            <div className='flex flex-col space-y-3  w-full'>
              <div>
                <input type='text' className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter City' value={values.city} onChange={e => setValues({ ...values, city: e.target.value})}/>
                {error.city ? <h1 className='text-xs pt-2 text-red-600'>*Invalid City</h1> : <h1>&ensp;</h1>}
              </div>
              <div>
                <input type='text' className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter State' value={values.state} onChange={e => setValues({ ...values, state: e.target.value})}/>
                {error.state ? <h1 className='text-xs pt-2 text-red-600'>*Invalid State</h1> : <h1>&ensp;</h1>}
              </div>
              <div className='inline-flex justify-between items-center  py-2 pb-3'>
                <h1 className='cursor-pointer text-xl text-green-400' onClick={() => setActiveStep(activeStep - 1)}>&larr; Previous</h1>
                <h1 className='cursor-pointer text-xl text-green-400' onClick={() => nextPage3()}>Continue &rarr;</h1>
              </div>
            </div>
          ) : (
            <div className='flex flex-col space-y-3  w-full'>
              <div>
                <input type={showPassword1 ? 'text' : 'password'} className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter Password'  value={values.password1} onChange={e => setValues({ ...values, password1: e.target.value})}/>
                {showPassword1 ? <VisibilityOffIcon className='ml-[-40px]' onClick={() => setShowPassword1(!showPassword1)} /> : <VisibilityIcon className='ml-[-40px]' onClick={() => setShowPassword1(!showPassword1)} />}
                {error.password1 ? <h1 className='text-xs pt-2 text-red-600'>*Password must contain 8 to 32 characters of Letters and Numbers only</h1> : <h1>&ensp;</h1>}
              </div>
              <div>
                <input type={showPassword2 ? 'text' : 'password'} className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Re-enter Password'  value={values.password2} onChange={e => setValues({ ...values, password2: e.target.value})}/>
                {showPassword2 ? <VisibilityOffIcon className='ml-[-40px]' onClick={() => setShowPassword2(!showPassword2)} /> : <VisibilityIcon className='ml-[-40px]' onClick={() => setShowPassword2(!showPassword2)} />}
                {error.password2 ? <h1 className='text-xs pt-2 text-red-600'>*Enter Same Password</h1> : <h1>&ensp;</h1>}
              </div>
              <div className='inline-flex justify-between items-center py-2 pb-3'>
                <h1 className='cursor-pointer text-xl text-green-400' onClick={() => setActiveStep(activeStep - 1)}>&larr; Previous</h1>
                <h1 className='cursor-pointer text-xl text-green-400' onClick={() => nextPage4()}>Continue &rarr;</h1>
              </div>
            </div>
          )}
        </div>
        <img src={wave} className='w-full absolute bottom-0' alt='' />
      </div>
    </div>
  )
}
