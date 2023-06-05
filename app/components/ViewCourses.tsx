import { Link } from '@remix-run/react'
import Button from './Button'
export default function ViewCourses() {
  return (
    <div className="container py-5">
      <div className="row col-12">
        <h1 className="fw-semibold mb-3">Java Microservices Developer</h1>
        <h2 className="fw-semibold mb-3">Bengaluru</h2>
        <h5>11-22-2022</h5>
        <h5>JO-2201-16004</h5>
        <p className="para">
          ivoyant is an emerging digital platform engineering and development
          services company headquartered in Atlanta. At ivoyant, we are helping
          our customers solve complex challenges, support their growth &
          transformation agenda, leveraging technology to make a difference.
        </p>
        <div>
          <h6 className="f18 fw-semibold">Responsibilities:</h6>
          <ul className="para">
            <li>
              Design, develop, test, deploy, maintain and improve software.
            </li>
            <li>
              Manage individual project priorities, deadlines and deliverables.
            </li>
          </ul>
        </div>
        <div>
          <h6 className="f18 fw-semibold">Qualifications</h6>
          <ul className="para">
            <li>3+ years of practical experience in software development.</li>
            <li>
              BS or Masters degree in Computer Science, similar technical field
              of study or equivalent practical experience.
            </li>
            <li>
              Software development experience in Java programming language
              (Java8+)
            </li>
            <li>
              Experience developing REST Microservices with Spring Boot and
              related technologies.
            </li>
            <li>
              Working proficiency and communication skills in verbal and written
              English.
            </li>
            <li>
              Working knowledge of Kafka, RabbitMQ, Cassandra, MongoDB
              preferred.
            </li>
            <li>
              Experience in API Design, Database design and
              troubleshooting/debugging
            </li>
            <li>
              Must have hands-on and should be able to debug Code and provide{' '}
            </li>
            <li>Experience with Devops, CI/CD a plus.</li>
            <li>Experience with Kubernetes, Docker a plus</li>
          </ul>
        </div>
        <div>
          <h6 className="f18 fw-semibold">Perks & Benifits</h6>
          <ul className="para">
            <li>Competitive Salary</li>
            <li>Room for growth</li>
            <li>Flexible schedule</li>
            <li>2 weeks PTO and general holidays</li>
            <li>Health, Dental, Vision, Life Insurance</li>
            <li>401k</li>
            <li>Bonus Programs</li>
          </ul>
        </div>
        <Link to="/courseDetail">
          <Button
            text="Apply Now"
            borderColor="black"
            color=""
            className="mb-3 py-1 fw-semibold para"
            width="134px"
            height="40px"
          />
        </Link>
      </div>
    </div>
  )
}
