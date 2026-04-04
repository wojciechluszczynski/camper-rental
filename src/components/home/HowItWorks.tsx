import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    icon: '🗓️',
    title: 'Wybierz termin',
    description: 'Przejrzyj dostępne kamery i wybierz termin, który Ci odpowiada. Kalendarz dostępności aktualizuje się na bieżąco.',
  },
  {
    number: '02',
    icon: '💳',
    title: 'Zarezerwuj i zapłać',
    description: 'Wypełnij formularz rezerwacji i opłać ją bezpiecznie online — BLIK, karta, Apple Pay lub Google Pay.',
  },
  {
    number: '03',
    icon: '🚐',
    title: 'Jedź!',
    description: 'Odbierz kamper w umówionym miejscu, otrzymasz pełne instrukcje obsługi. Czas na przygodę!',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Jak to działa?</h2>
          <p className={styles.subtitle}>Rezerwacja zajmuje mniej niż 5 minut</p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
