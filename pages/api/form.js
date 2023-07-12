import sanityClient from '@sanity/client'
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}
const client = sanityClient(config)

export default async function createComment(req, res) {
  const { _id, name, email, comment } = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'form',
      name,
      email,
      subject,
      message,
    })
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({ message: `Couldn't submit form`, error })
  }
  console.log('Form Submitted')

  return res.status(200).json({ message: 'Form Submitted' })
}
