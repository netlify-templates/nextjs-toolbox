import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Name</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input id="email" className={styles['form-field']} type="email" name="email" required />

        <label htmlFor="feedback">What is your feedback?</label>
        <textarea id="feedback" className={styles['form-field']} wrap="soft" name="feedback" required></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
