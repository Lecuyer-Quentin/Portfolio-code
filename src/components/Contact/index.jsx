//! Contact form is not working yet, waiting for backend

// import { useState } from 'react'
// import { toast } from 'react-toastify'

const Contact = () => {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    // })
    // const canSend = [formData.name, formData.email, formData.subject, formData.message].every(Boolean)

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })
    // }

    // const resetForm = () => {
    //     setFormData({
    //         name: '',
    //         email: '',
    //         subject: '',
    //         message: ''
    //     })
    // }

    // const renderInput = (name, type, placeholder, value) => {
    //     return (
    //         <>
    //             {/* <label className='contact__form__label' htmlFor={name}>{name.toUpperCase()}</label> */}
    //             <input
    //                 className='contact__form__input'
    //                 name={name}
    //                 type={type}
    //                 placeholder={placeholder}
    //                 value={value}
    //                 onChange={handleChange}
    //                 required
    //             />
    //         </>
    //     )
    // }

    // const renderTextArea = (name, placeholder, value) => {
    //     return (
    //         <>
    //             {/* <label className='contact__form__label' htmlFor={name}>{name.toUpperCase()}</label> */}
    //             <textarea
    //                 className='contact__form__textarea'
    //                 name={name}
    //                 placeholder={placeholder}
    //                 value={value}
    //                 onChange={handleChange}
    //             />
    //         </>
    //     )
    // }

    // const renderContactForm = () => {
    //     return (
    //         <form className='contact__form' onSubmit={handleSubmit}>
    //             {renderInput('name', 'text', 'Name', formData.name)}
    //             {renderInput('email', 'email', 'Email', formData.email)}
    //             {renderInput('subject', 'text', 'Subject', formData.subject)}
    //             {renderTextArea('message', 'Message', formData.message)}
    //             <button type='submit'>Send</button>
    //         </form>
    //     )
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (canSend) {
    //         const { name, email, subject, message } = formData
    //         console.log({ name, email, subject, message })
    //         toast.success(`Merci ${name} pour votre message. Je vous répondrai dès que possible`)
    //         resetForm()
    //     } else {
    //         toast.error('Please fill all the fields')
    //     }
    // }


    const mailto = "mailto:quentin.lecuyer@mailfence.com?subject=Demande%20de%20projet%20de%20développement%20web&body=Bonjour%20,%0A%0AJe%20suis%20intéressé(e)%20par%20une%20collaboration%20sur%20un%20projet%20de%20développement%20web.%20Voici%20quelques%20informations%20initiales%20:%0A%0A-%20Nom%20:%20[Votre%20Nom]%0A-%20Entreprise%20:%20[Le%20nom%20de%20votre%20entreprise%20ou%20organisation]%0A-%20Site%20web%20:%20[Facultatif%20-%20Votre%20site%20web%20actuel]%0A-%20Description%20du%20projet%20:%20[Brève%20description%20du%20projet]%0A%0AMerci%20et%20j'attends%20votre%20retour%20avec%20impatience."
   

  return (
      <section id='contact' className='contact'>
          <h3>Une question, un project ??</h3> <br />
            <p>Vous pouvez me contacter par email, je vous répondrai dès que possible.</p>
           <button>
              <a href={mailto} target="_blank" rel="noreferrer">
                <p>Send me an email</p>
              </a>
            </button>
          
          {/* Wait for backend */}
          {/* {renderContactForm()} */}

      </section>
  )
}

export default Contact