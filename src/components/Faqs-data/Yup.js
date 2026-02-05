import React, { useState } from 'react'
import './Faqs.css';
import { faqsData } from './Data'
import Fake from './Fake';

function Yup() {


  const [faqs, setFaqs] = useState(faqsData);

  return (

    <main className='container'>
      <section className='faqs'>
        <h1>FAQS</h1>

        {faqs.map((faq) => (
          <Fake key={faq.id} faq={faq}/>
        ))}
      </section>
    </main>

  )
}

export default Yup;