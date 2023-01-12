import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ContactPage2 = () => {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();


  
  const ContactForm = (
    <>
    <form>
      <div className="container">
       
        <div className="container1">
      <label htmlFor="name">Name </label>
      <input id="name" name="name" required type="text" />
      <label htmlFor="sem">Semester</label>
      <input id="sem" name="sem" required type="text" />
      <label htmlFor="number">Phone Number </label>
      <input id="number" type="tel" name="number" required />
      </div>
      < div className="container2">
      <label htmlFor="rn">Roll Number</label>
      <input type="number" id="rn" name="rn"></input>
      <label htmlFor="branch">Branch</label>
      <input type="text" id="branch" name="branch"></input>
      <label htmlFor="email">Email id </label>
      <input id="email" type="email" name="email" required />
      </div>
      </div>
      <div className="container3">
      <button type="submit">Submit</button>
      </div>
     
    </form>
    </>
  );

  return (
    <div className="container">
      <Head>
        <title>User Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{ContactForm}</main>
      
      <style jsx global>
        {`
          html,
          body {
            font-size: 18px;
            background-color:  #F5F5F5;
            color: #27004e;
            padding: 1em;
            margin: 1em;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          .container {
            display: flex;
            flex-direction: row ;
            width: 80%;
            grid-row-gap: 1.2em;
          }
          .container1{
            float:left;
            padding:3rem;
            margin:2rem;
          }
          .container2{
            float:right;
            padding:3rem; 
            margin:2rem;
          }
          .container3{
           padding:0rem 3.5rem;
           margin-left:350px;
          }
          @media (max-width: 769px) {
            .container {
              width: 100%;
            }
          }
          label {
            font-size: 1.2em;
          }
          input{
            background: #D9D9D9;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
          input[type="text"],
          input[type="email"],
          input[type="password"],
          input[type="tel"],
          input[type="number"],
          textarea {
            font-size: 24px;
          }
          button {
            max-width: 400px;
            margin-top:-20px;
            color: #000000;
            border: none;
            padding: 15px 40px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            text-transform: uppercase;
            border-radius: 10px;
            background: #AD6EA1;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
          }
        `}
      </style>
    </div>
  );
};

export default ContactPage2;