import styles from '../styles/landingPage.module.css'
import Logo from '../images/logo.svg'
import Field from '../images/field.png'
import Bliss from '../images/bliss.png'
import Focus from '../images/focused.png'
import Person from '../images/person.png'
import Group from '../images/group.png'
import Happy from '../images/happy.png'
import Journal from '../images/journal.png'
import { SiInstagram } from 'react-icons/si'
import { CiLinkedin, CiTwitter } from 'react-icons/ci'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'


function Card(props) {
    return (
        <div className={styles.card}>
            <h2>{props.heading}</h2>
            <p>{props.desc}</p>
            <img src={props.img} />
        </div>
    )
}

function Row(props) {
    return (
        <div className={styles.row}>
            <FaStar size={16} />
            <p>{props.text}</p>
        </div>
    )
}

function Item(props) {

    const activeStyle = {
        backgroundColor: "var(--light-green)",
        borderRadius: "16px",
        borderTop: "1px solid var(--green)"
    }

    return (
        <div style={props.active === true ? activeStyle : undefined} className={styles.item}>
            <div className={styles.question}>
                <p style={props.active === true ? { fontWeight: 600, fontSize: "1.25rem" } : undefined}>{props.question}</p>
                <button onClick={() => props.handleClick(props.id)}>
                    {
                        props.active === true ? <FaMinus /> : <FaPlus />
                    }
                </button>
            </div>
            {
                props.active === true ? <p>{props.answer}</p> : null
            }

        </div>
    )
}


function FooterCol(props) {
    const p = props.options.map(x => (<p key={x}>{x}</p>))

    return (
        <div className={styles.footerCol}>
            <h3>{props.heading}</h3>
            {p}
        </div>
    )
}

export default function LandingPage() {

    const [questions, setQuestions] = useState([
        {
            "id": 1,
            "active": true,
            "question": "What is Serenity?",
            "answer": "Serenity is your private, personalized mental health and wellness space at work. Serenity is not a performance tracker. It's to support your mental health, not monitor it."
        },
        {
            "id": 2,
            "active": false,
            "question": "Is my data confidential?",
            "answer": "Yes, all your data in Serenity is completely confidential. Your information is not shared with your employer or anyone else without your explicit consent."
        },
        {
            "id": 3,
            "active": false,
            "question": "How often should I use Serenity?",
            "answer": "You can use Serenity as often as you need. We recommend checking in at least once a week to maintain consistent mental wellness practices."
        },
        {
            "id": 4,
            "active": false,
            "question": "Can Serenity replace therapy?",
            "answer": "While Serenity provides mental health support, it's not a replacement for professional therapy. It's designed to complement your existing mental health care."
        },
        {
            "id": 5,
            "active": false,
            "question": "Who developed Serenity?",
            "answer": "Serenity was developed by a team of mental health professionals and workplace wellness experts to create a safe space for employee wellbeing."
        },
        {
            "id": 6,
            "active": false,
            "question": "What features does Serenity offer?",
            "answer": "Serenity offers guided meditations, mood tracking, stress management tools, and personalized wellness recommendations tailored to your needs."
        }
    ])

    const selectQ = (id) => {
        console.log(id)
        setQuestions(prev => prev.map(q => {
            if (q.id === id) {
                return { ...q, active: true }
            } else {
                return { ...q, active: false }
            }
        }))
    }

    const faqContent = questions.map(question => {
        return (
            <Item
                key={question.id}
                id={question.id}
                question={question.question}
                answer={question.answer}
                active={question.active}
                handleClick={selectQ}
            />
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.bg}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="Logo" />
                    </div>

                    <ul className={styles.menu}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>

                    <div className={styles.btns}>
                        <button className={styles.signInBtn}>Sign In</button>
                        <button className={styles.signUpBtn}>Sign Up</button>
                    </div>

                    <button className={styles.menuBtn}>
                        <MdMenu size={24} />
                    </button>
                </nav>

                <div className={styles.hero}>
                    <div className={styles.left}>
                        <h1>Harmonize your work and <span>well-being.</span></h1>
                        <p>Transform your work-life balance. Prioritize your 
                        mental health with resources and support.</p>
                        <button>Book an Appointment</button>
                    </div>
                    <div className={styles.right}>
                        <img src={Field} />
                    </div>

                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h2>Virtual Safe Room</h2>
                        <p>Serenity provides a peaceful, digital space where you can take mindful break, reset emotionally and breathe.</p>
                    </div>
                    <div className={styles.right}>
                        <img src={Bliss} />
                    </div>
                </div>

                <div className={styles.cards}>
                    <Card
                        heading="Interactive Role-Play Scenarios"
                        desc="Serenity helps you learn how others handle burnout, anxiety and stigma, and build empathy."
                        img={Focus}
                    />
                     <Card
                        heading="Daily Mood Check-ins"
                        desc="Serenity provides quick mood tracking that helps build emotional awareness over time."
                        img={Happy}
                    />
                         <Card
                        heading="Journal"
                        desc="Serenity helps you reflect, release and reconnect with yourself. The journal is designed to be confidential and visible only to you."
                        img={Journal}
                    />
                </div>
            </div>

            <div className={styles.offers}>
                <h2>What We Offer?</h2>
                <div>
                    <div className={styles.offer}>
                        <div className={styles.image}>
                            <img src={Person} />
                        </div>

                        <div className={styles.feature}>
                            <h3>For Individuals</h3>
                            {/* Row component */}
                            <div className={styles.features}>
                                <Row text="A calm and private space to manage your mental health." />
                                <Row text="Tools for daily reflection and emotional regulation." />
                                <Row text="Access to therapy and group support." />
                            </div>
                        </div>
                    </div>
                    <div className={styles.offer}>
                        <div className={styles.image}>
                            <img src={Group} />
                        </div>

                        <div className={styles.feature}>
                            <h3>For Companies</h3>
                            {/* Row component */}
                            <div className={styles.features}>
                                <Row text="Anonymized well-being reports." />
                                <Row text="Mental health leave tracking and program scheduling." />
                                <Row text="Tools to support all employees." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.faq}>
                <h2>Frequently asked questions</h2>
                <div className={styles.accordion}>
                    {faqContent}
                </div>
            </div>

            <div className={styles.cta}>
                <div>
                    <h2>Take a step toward a healthier workplace</h2>
                    <p>Discover how Serenity empowers individuals and teams through
                        meaningful support.</p>
                </div>

                <button>Start your journey</button>
            </div>

            <div className={styles.footer}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={Logo} />
                    </div>
                    <p>Your Mental Wellness Company</p>
                    <div className={styles.smIcons}>
                        <SiInstagram />
                        <CiLinkedin size={30} />
                        <CiTwitter size={30} />
                    </div>
                </div>

                <div className={styles.right}>
                    <FooterCol
                        heading="Company"
                        options={["Contact us", "About us", "Pricing"]}
                    />
                    <FooterCol
                        heading="Account"
                        options={["Privacy Policies", "Terms & condition", "Help center"]}
                    />
                    <FooterCol
                        heading="Contact"
                        options={["info@serenitywellness.org", "+234 8100005000"]}
                    />
                </div>
            </div>
        </div>
    )
}
