import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import toast from 'react-hot-toast';
const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  //handle imput change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        toast.success("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign={"center"}
          >
            Register
          </Typography>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            placeholder="name"
            name="name"
            margin="normal"
            type="text"
            required
          />
          <TextField
            value={inputs.email}
            onChange={handleChange}
            placeholder="email"
            name="email"
            margin="normal"
            type="email"
            required
          />
          <TextField
            value={inputs.password}
            onChange={handleChange}
            placeholder="password"
            name="password"
            margin="normal"
            type="password"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/login")}
            color="primary"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Already Registered ? Please Login
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
