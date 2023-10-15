import { useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css'

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName(name) || !validateEmail(email) || !validatePassword(password)) {
      return;
    }

    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      // Redirect to the success page with query parameters
      router.push(`/success?name=${name}&email=${email}`);
    }
  };

  const validateName = (input: string) => {
    if (input.trim() === '') {
      alert('Please enter a name.');
      return false;
    }
    return true;
  };

  const validateEmail = (input: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(input)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const validatePassword = (input: string) => {
    if (input.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
    }
    return true;
  };

  return (
    <div className='row'>
      <div className='row justify-content-center'>
        <div className='col-4 d-sm-none d-md-block'>
        </div>
        <div className='col-sm-10 col-md-4'>
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label htmlFor="user" className="col-sm-2 col-form-label">User ID</label>
                <div className="col-sm-10">
                  <input type="text"  className="form-control" id="user" placeholder="User Name" value={name} 
                  onChange={(e) => setName(e.target.value)} required />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email"  className="form-control" id="staticEmail" placeholder="email@example.com"
                  value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Confirm identity</button>
              </div>
           </form>
        </div>
        <div className='col-4 d-sm-none d-md-block'>
        </div>
    </div>
</div> 
  );
};

export default UserForm;
