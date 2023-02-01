'use client'


import { Faq } from '../../typing'

const updateResponse = () => {
    console.log('Réponse enregistrée')
}

export const FaqForm = ({faq}: {faq: Faq}) => {
  return (
            <form className='grid gap-2' id='faqForm'>
                <label className='capitalize text-sm font-thin'> {faq.question}</label>
                <textarea className='text-md p-2' name='response' rows={9} defaultValue={faq.reponse}></textarea> 
                {/* <label> {employee.mail}</label> */}
                <button className='btn btn-primary text-base-100' type='submit' onClick={() => updateResponse()}>Répondre</button>
            </form>
  )
}
