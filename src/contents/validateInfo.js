export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
        errors.username = <h5 className="Lack">Username required</h5>;
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
        errors.email = <h5 className="Lack">Email required</h5>;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = <h5 className="error">Email address is invalid</h5>;
    }
    if (!values.password) {
        errors.password = <h5 className="Lack">Password is required</h5>;
    } else if (values.password.length < 6) {
        errors.password = <h5 className="error">Password needs to be 6 characters or more</h5>;
    }
    if (!values.password2) {
        errors.password2 = <h5 className="Lack">Password is required</h5>;
    } else if (values.password2 !== values.password) {
        errors.password2 = <h5 className="error">Passwords do not match</h5>;
    }
    if (!values.grade) {
        errors.grade = <h5 className="Lack">Grade is required</h5>;
    } 

    if (!values.gender) {
        errors.gender = <h5 className="Lack">Gender is required</h5>;
    }

    return errors;
}