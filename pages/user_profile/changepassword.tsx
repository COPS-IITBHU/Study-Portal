import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ContactPage = () => {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();


  
  const ContactForm = (
    <form
      className="container">
      <label htmlFor="pwd">Current Password</label>
      <input type="password" id="pwd" name="pwd"></input>
      <label htmlFor="npwd">New Password</label>
      <input type="password" id="npwd" name="npwd"></input>
      <label htmlFor="cnpwd">Confirm New Password</label>
      <input type="password" id="cnpwd" name="cnpwd"></input>
      <button type="submit">Submit</button>
    </form>
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
            flex-direction: column;
            width: 80%;
            grid-row-gap: 1.2em;
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
          input[type="password"],
          textarea {
            font-size: 24px;
          }
          button {
            max-width: 400px;
            margin: 11px auto;
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

export default ContactPage;