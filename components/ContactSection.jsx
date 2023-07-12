import { useFormik } from 'formik'
import React from 'react'
import c from '../styles/Contact.module.css'
import HeadTitle from './HeadTitle'
import { Email, Phone } from './svg'
import { formSchema } from '../schemas'
const ContactSection = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  const form = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = form

  return (
    <div className={c.contact_section}>
      <div className={c.main_container}>
        <div className={c.contact_container}>
          <div className={c.contact_form}>
            <div className={c.text_container}>
              <div className={c.contact_title}>
                {' '}
                <HeadTitle text={`Get`} />
                <HeadTitle text={` in `} />
                <HeadTitle text={`Touch`} />
              </div>
              <div className={c.contact_paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                asperiores placeat nihil ratione eum inventore! Ab velit
                dignissimos nisi eum reiciendis. Aspernatur dignissimos
                provident veniam ipsam hic deleniti in ut accusamus incidunt?
              </div>
            </div>
            <form className={c.main_form_container} onSubmit={handleSubmit}>
              <div className={c.form_name_email}>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  id='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  id='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={c.from_in_txt}>
                <input
                  type='text'
                  placeholder='Subject'
                  name='subject'
                  id='subject'
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <textarea
                  placeholder='Message...'
                  name='message'
                  id='message'
                  cols='30'
                  rows='10'
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                <input
                  className={c.contact_button}
                  type='submit'
                  value='Send'
                />
              </div>
            </form>
          </div>
        </div>
        <div className={c.map_container}>
          <div className={c.contact_card}>
            <div className={c.top}>
              <h3 className={c.name}>Sami Islam</h3>
              <h4 className={c.address}>Dhaka, Bangladesh</h4>
            </div>
            <div className={c.bottom}>
              <h4 className={c.phn}>
                <span>
                  <Phone />{' '}
                </span>{' '}
                : +880 1741466378
              </h4>
              <h4 className={c.email}>
                <span>
                  <Email />{' '}
                </span>{' '}
                : freelancersami16203@gmail.com
              </h4>
            </div>
          </div>
          <div className={c.mapImage}>
            <img src='/26.01.2023_00.05.01_REC.png' alt='' className={c.map} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
