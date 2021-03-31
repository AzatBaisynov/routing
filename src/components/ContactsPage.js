import React, {useState} from 'react'

export const ContactPage = () => {
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, message)
    }

    return (
        <div className="contacts" onSubmit={handleSubmit}>
            <form className="contacts__card">
                <h3 className="contacts__title">Связаться с нашей компанией</h3>
                <div className="contacts__inputs">
                    <label htmlFor="email" className="contacts__lb">Ваш email</label>
                    <input placeholder="Your email" id="email" className="contacts__input" onChange={(e) => setEmail(e.target.value )} type="text"/>
                    <label htmlFor="message" className="contacts__lb">Сообщение</label>
                    <input id="message" className="contacts__input" onChange={(e) => setMessage(e.target.value)} type="text"/>
                    <button className="contacts__btn">Отправить</button>
                </div>
            </form>
        </div>
    )
}