import { ModifyFaqButton } from "../../components/Faq/ModifyFaqButton";
import Title from "../../components/layout/Title";
import { Faq } from "../../typing";

export default async function Faqs() {
  const faqs : Faq[] = await fetch('https://mockend.com/ElDucche/Amie-Dashboard/faqs').then(res => res.json())
    return (
      <div>
        <Title>F.A.Q</Title>
        <div className="overflow-x-auto mt-12 transition-all">
          <table>
            <thead>
              <tr className="h-12">
                <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all w-72'>Questions</th>
                <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all w-72'>Réponses</th>
                <th className='p-4 h-12 bg-base-100 border-b border-b-primary hover:bg-primary hover:text-base-100 transition-all w-32'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                faqs.map(faq => (
                  <tr className="group transition-all hover:bg-secondary" key={faq.question}>
                    <th className="p-4 font-light capitalize transition-all text-left">{faq.question}</th>
                    <th className="p-4 font-light capitalize transition-all">{faq.reponse}</th>
                    <th className="p-4 font-light capitalize transition-all"><ModifyFaqButton faq={faq} /></th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
}
  