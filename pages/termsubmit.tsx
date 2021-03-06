import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import styles from '../scss/pages/Termsubmit.module.scss';
import Layout from 'lib/components/Layout';

const ADD_CONTACT = gql`
  mutation submitContactFormCF($input: SubmitContactFormCFInput!) {
    submitContactFormCF(input: $input) {
      successMessage
      errors
    }
  }
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState<string | undefined>();
  const [submitContactFormCF, { data, error, loading }] = useMutation(
    ADD_CONTACT,
  );

  const SubmitForm = async () => {
    // save the form
    const result = await submitContactFormCF({
      variables: {
        input: {
          name,
          email,
          phone,
        },
      },
    });
    console.log(result);
    if (result?.data?.submitContactFormCF?.errors) {
      setMessage(result?.data?.submitContactFormCF?.errors[0]);
      return;
    }

    setMessage(result?.data?.submitContactFormCF?.successMessage);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <>
      <Layout>
        <main className={`content content-index ${styles.contact}`}>
          <div className="wrap">
            <h1>Submit a Term</h1>
            <div className="message">{message}</div>
            <form action="" style={{ width: '300px' }}>
              <label htmlFor="name">Name</label>
              <input
                value={name}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phone">Dev Term</label>
              <input
                value={phone}
                type="text"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br></br>
              <button
                className="button"
                disabled={loading}
                onClick={SubmitForm}>
                Submit
              </button>
            </form>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
