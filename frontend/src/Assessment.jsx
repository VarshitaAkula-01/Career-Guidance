
import { useState } from 'react'
import './Assessment.css'

function Assessment() {
  const [form, setForm] = useState({
    name: '',
    education: '',
    stream: '',
    interests: [],
    skills: [],
    favouriteSubject: '',
    goal: '',
  })

  const [recommendations, setRecommendations] = useState(null)

  const interestOptions = [
    'Technology',
    'Science and Research',
    'Business and Finance',
    'Creative Arts and Design',
    'Doctor & Healthcare',
    'Government Services',
  ]

  const skillOptions = [
    'Problem Solving',
    'Communication',
    'Programming',
    'Creativity',
    'Leadership',
    'Analytical Thinking',
  ]

  function handleChange(event) {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  function handleCheckbox(category, value) {
    setForm((previous) => ({
      ...previous,
      [category]: previous[category].includes(value)
        ? previous[category].filter((item) => item !== value)
        : [...previous[category], value],
    }))
  }

  function getCareerRecommendations() {
    const careers = []

    const hasInterest = (interest) =>
      form.interests.includes(interest)

    const hasSkill = (skill) =>
      form.skills.includes(skill)

    if (hasInterest('Technology')) {
      careers.push({
        title: 'Software Developer',
        description:
          'Build websites, applications, and software solutions.',
        skills: 'Java, JavaScript, DSA, Git',
      })
      careers.push({
        title: 'Cloud & IT Engineer',
        description:
          'Work with cloud platforms, IT systems, and deployment.',
        skills: 'Networking, Linux, Cloud fundamentals',
      })
    }

    if (hasInterest('Science and Research')) {
      careers.push({
        title: 'Research Analyst',
        description:
          'Study information, investigate problems, and communicate findings.',
        skills: 'Research methods, statistics, analytical thinking',
      })
      careers.push({
        title: 'Data Analyst',
        description:
          'Analyze data and turn it into useful insights.',
        skills: 'SQL, Excel, Python, data visualization',
      })
    }

    if (hasInterest('Business and Finance')) {
      careers.push({
        title: 'Business Analyst',
        description:
          'Understand business problems and help teams make decisions.',
        skills: 'Excel, SQL, communication, problem solving',
      })
      careers.push({
        title: 'Financial Analyst',
        description:
          'Analyze financial information, budgets, and business performance.',
        skills: 'Excel, accounting basics, financial analysis',
      })
    }

    if (hasInterest('Creative Arts and Design')) {
      careers.push({
        title: 'UI/UX Designer',
        description:
          'Design user-friendly digital products and experiences.',
        skills: 'Figma, wireframing, user research, prototyping',
      })
      careers.push({
        title: 'Digital Designer',
        description:
          'Create visual content and digital experiences.',
        skills: 'Visual design, design tools, creativity',
      })
    }

    if (hasInterest('Doctor & Healthcare')) {
      careers.push({
        title: 'Doctor',
        description:
          'Diagnose, treat, and help prevent illnesses. This requires the appropriate medical education and entrance qualifications.',
        skills: 'Biology, communication, clinical learning',
      })
      careers.push({
        title: 'Healthcare Professional',
        description:
          'Explore eligible paths such as nursing, pharmacy, physiotherapy, or allied health.',
        skills: 'Relevant subject knowledge, communication, patient care',
      })
    }

    if (hasInterest('Government Services')) {
      careers.push({
        title: 'Government Officer',
        description:
          'Explore government examinations and public-service roles that match your qualifications.',
        skills: 'General knowledge, reasoning, communication',
      })
    }

    if (hasSkill('Programming') && !hasInterest('Technology')) {
      careers.push({
        title: 'Junior Programmer',
        description:
          'Use programming skills to develop and maintain applications.',
        skills: 'Programming fundamentals, debugging, Git',
      })
    }

    if (
      hasSkill('Analytical Thinking') &&
      !careers.some((career) => career.title === 'Data Analyst')
    ) {
      careers.push({
        title: 'Data Analyst',
        description:
          'Find patterns in data and support evidence-based decisions.',
        skills: 'SQL, Excel, statistics, visualization',
      })
    }

    if (hasSkill('Creativity') && !hasInterest('Creative Arts and Design')) {
      careers.push({
        title: 'Creative Problem Solver',
        description:
          'Explore roles that combine innovative thinking with your subject knowledge.',
        skills: 'Creativity, communication, problem solving',
      })
    }

    if (careers.length === 0) {
      careers.push({
        title: 'Explore Your Strengths',
        description:
          'Start by exploring entry-level roles related to your education and favourite subject.',
        skills: 'Communication, problem solving, foundational skills',
      })
    }

    const goalMatches = {
      'High-paying job': ['Software Developer', 'Data Analyst'],
      Research: ['Research Analyst', 'Data Analyst'],
      'Government job': ['Government Officer'],
      Entrepreneurship: ['Business Analyst', 'Digital Designer'],
      'Creative career': ['UI/UX Designer', 'Digital Designer'],
      'Social impact': ['Healthcare Professional', 'Government Officer'],
    }

    const preferred = goalMatches[form.goal] || []

    return careers
      .map((career, index) => ({
        ...career,
        score:
          (preferred.includes(career.title) ? 3 : 0) +
          (hasSkill('Problem Solving') ? 1 : 0) +
          (hasSkill('Communication') ? 1 : 0) +
          (hasSkill('Analytical Thinking') &&
          career.title === 'Data Analyst' ? 2 : 0) +
          (hasSkill('Programming') &&
          ['Software Developer', 'Junior Programmer'].includes(career.title)
            ? 2
            : 0),
        originalIndex: index,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.interests.length || !form.skills.length) {
      alert('Please select at least one interest and one skill.')
      return
    }

    setRecommendations(getCareerRecommendations())
  }

  function startAgain() {
    setRecommendations(null)
    setForm({
      name: '',
      education: '',
      stream: '',
      interests: [],
      skills: [],
      favouriteSubject: '',
      goal: '',
    })
  }

  if (recommendations) {
    return (
      <main className="assessment-page">
        <header className="assessment-header">
          <a href="/" className="assessment-brand">
            <span className="brand-icon">C</span>
            CareerCompass
          </a>
          <button
            type="button"
            className="back-home"
            onClick={startAgain}
          >
            ← Retake Assessment
          </button>
        </header>

        <section className="assessment-container">
          <div className="assessment-heading">
            <span className="eyebrow">YOUR PERSONALIZED RESULTS</span>
            <h1>
              Your career journey, <span>{form.name}.</span>
            </h1>
            <p>
              These career ideas are based on your selected interests,
              skills, education, and goal. Explore them as starting points.
            </p>
          </div>

          <div className="recommendation-grid">
            {recommendations.map((career) => (
              <article
                className="recommendation-card"
                key={career.title}
              >
                <span className="eyebrow">CAREER MATCH</span>
                <h2>{career.title}</h2>
                <p>{career.description}</p>
                <h3>Skills to develop</h3>
                <p>{career.skills}</p>
              </article>
            ))}
          </div>

          <p className="form-note">
            These are rule-based suggestions, not a guaranteed job outcome.
            Check the eligibility and qualifications required for each path.
          </p>

          <button
            type="button"
            className="assessment-submit"
            onClick={startAgain}
          >
            Retake Assessment →
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="assessment-page">
      <header className="assessment-header">
        <a href="/" className="assessment-brand">
          <span className="brand-icon">C</span>
          CareerCompass
        </a>
        <a href="/" className="back-home">← Back to Home</a>
      </header>

      <section className="assessment-container">
        <div className="assessment-heading">
          <span className="eyebrow">YOUR CAREER JOURNEY STARTS HERE</span>
          <h1>Let's discover your <span>potential.</span></h1>
          <p>
            Tell us about yourself so we can help you explore suitable
            career pathways.
          </p>
        </div>

        <form className="assessment-form" onSubmit={handleSubmit}>
          <div className="form-section-title">
            <span>01</span>
            <div>
              <h2>About you</h2>
              <p>Start with your basic details.</p>
            </div>
          </div>

          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <div className="form-two-columns">
            <div>
              <label htmlFor="education">Education level</label>
              <select
                id="education"
                name="education"
                value={form.education}
                onChange={handleChange}
                required
              >
                <option value="">Select education</option>
                <option value="10th">10th Standard</option>
                <option value="Intermediate">Intermediate / 12th</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate / Degree</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>

            <div>
              <label htmlFor="stream">Your stream</label>
              <select
                id="stream"
                name="stream"
                value={form.stream}
                onChange={handleChange}
                required
              >
                <option value="">Select stream</option>
                <option value="MPC">MPC</option>
                <option value="BiPC">BiPC</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Humanities / Arts</option>
                <option value="Diploma">Polytechnic / Diploma</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-section-title">
            <span>02</span>
            <div>
              <h2>Your interests</h2>
              <p>Select all the areas you enjoy.</p>
            </div>
          </div>

          <div className="choice-grid">
            {interestOptions.map((interest) => (
              <label className="choice-card" key={interest}>
                <input
                  type="checkbox"
                  checked={form.interests.includes(interest)}
                  onChange={() => handleCheckbox('interests', interest)}
                />
                <span>{interest}</span>
              </label>
            ))}
          </div>

          <div className="form-section-title">
            <span>03</span>
            <div>
              <h2>Your skills</h2>
              <p>Select the skills you have or enjoy developing.</p>
            </div>
          </div>

          <div className="choice-grid">
            {skillOptions.map((skill) => (
              <label className="choice-card" key={skill}>
                <input
                  type="checkbox"
                  checked={form.skills.includes(skill)}
                  onChange={() => handleCheckbox('skills', skill)}
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>

          <label htmlFor="favouriteSubject">Favourite subject</label>
          <input
            id="favouriteSubject"
            name="favouriteSubject"
            value={form.favouriteSubject}
            onChange={handleChange}
            placeholder="e.g. Mathematics, Biology, Computer Science"
            required
          />

          <label htmlFor="goal">What is your main career goal?</label>
          <select
            id="goal"
            name="goal"
            value={form.goal}
            onChange={handleChange}
            required
          >
            <option value="">Choose your goal</option>
            <option value="High-paying job">A high-paying job</option>
            <option value="Research">Research and innovation</option>
            <option value="Government job">Government job</option>
            <option value="Entrepreneurship">Start my own business</option>
            <option value="Creative career">A creative career</option>
            <option value="Social impact">Help society</option>
          </select>

          <button type="submit" className="assessment-submit">
            Find My Career Path <span>→</span>
          </button>

          <p className="form-note">
            Your answers will help us build personalized career guidance.
          </p>
        </form>
      </section>
    </main>
  )
}

export default Assessment
