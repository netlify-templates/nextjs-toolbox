import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        netlify
        netlify-honeypot
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
  
        <label for="name">Name</label>
        <input className={styles['form-field']} type="text" name="name" />

        <label for="name">Email</label>
        <input className={styles['form-field']} type="email" name="email" required />

        <label for="feedback">What is your feedback?</label>
        <textarea className={styles['form-field']} wrap="soft" name="feedback" required></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}