import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../firebaseConfig";
const Signup = () => {
  const navigate = useNavigate();
  const formObj = {
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(formObj);
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.role ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return alert("Please fill all field");
    }

    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = createUser.user;

      //saving additional user info
      await setDoc(doc(db, "users", user.uid), {
        user_id: user.uid,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: formData.role,
        createdAt: new Date(),
      });
      console.log(`User registgered and saved!`);
      toast.success("Account Created Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center h-screen px-20">
      <div className="space-y-3">
        <h1 className="text-5xl">Organize Your Work Smarter</h1>
        <p>
          Create your free account and start managing your tasks seamlessly
          across To Do, In Progress, and Done.
        </p>
      </div>
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="input"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="input"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label>User Role: </label>
            <input
              type="text"
              placeholder="Enter Your Role"
              className="input"
              name="role"
              value={formData.role}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label className="text-sm">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="input"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="button" disabled={loading}>
            {loading ? "Signing up...." : "Sign Up"}
          </button>
          <p>
            Already have an account? <a href="/login">login </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
