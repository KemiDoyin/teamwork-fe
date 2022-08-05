
import {useFormik} from 'formik';
import {FormControl,  FormErrorMessage, VStack, Input} from '@chakra-ui/react';
import * as Yup from 'yup';
import './login.css';
import img1 from '../image/image 1.png';
import user from '../image/Useric_user.png';
import lock from '../image/Lockic_lock.png';
//import visible from '../image/Hideic_visible.png';

function Login() {
 
  const pwdRule = /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/;
  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: Yup.object({
      email: Yup.string()
      .email('Please enter a valid email')
      .required('Email required'),
      password: Yup.string()
      .min(8, 'Password too short')
      .matches(pwdRule, {message: "Must contain at least one number, one uppercase and lowercase letter, a symbol and at least 8 or more characters"})
      .required('Password required')
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2))
      actions.resetForm()
    }
  })

  
  return ( 
    
    <div className="container">
      <div className="info" id="info">
        <h1>Log in to Teamwork</h1>
        <p>Forgot password?</p>
        <VStack as = "form">
        <form 
        onSubmit={formik.handleSubmit}
          className="validateForm"
        >
          <br />
          <FormControl isInvalid= {formik.errors.email && formik.touched.email}>
          <label for="email">Email</label>
          <br />
          <img src={user} alt="user" className="user" />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            className="email"
            id="email"
            {...formik.getFieldProps('email')}
            
          />
          <br />
          <span className='error-block'><FormErrorMessage>{formik.errors.email}</FormErrorMessage></span>
          </FormControl>
          <br />
          <FormControl isInvalid= {formik.errors.password && formik.touched.password}>
          <label for="password">Password</label>
          <br />

          <img src={lock} alt="lock" className="lock" />
          {/* <img src={visible} alt="visible" className="visible" /> */}
          <Input
            type="password"
            name="password"
            placeholder=" insert Password"
            className="password"
            id="password"
            {...formik.getFieldProps('password')}
            
          />
          <br />
          <span className='error-block'><FormErrorMessage>{formik.errors.password}</FormErrorMessage></span>
          </FormControl>
          <br />
        </form>
        </VStack>
        {/* <div className="remember">
          <input
            type="checkbox"
            name="remember"
            id="agree"
            valclass="remember"
          />
          <label for="remember">Remember</label>
          <p>Forgotten password?</p>
        </div> */}
        <div className="btn">
          <button type="submit" id="btn" 
          onClick={formik.handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
      <div className="image">
        <img src={img1} alt="img1" className="img1" />
      </div>
    </div>
      
  );
     
      
}

export default Login;
  