import * as Yup from 'yup'
export const formSchema = Yup.object({
  name: Yup.string().min(2).max(25).required('Please enter your name'),
  email: Yup.string().email().required('Please enter your email'),
  subject: Yup.string().email().required('Please enter your subject'),
  message:Yup.string().required('Please enter your message')
})