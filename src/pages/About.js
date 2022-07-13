import React from "react";
import selfGrowth from "../assets/img/self-growth.jpg";
import code from "../assets/img/code.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={redirector} className="back-button">
        <IoIosArrowBack />
      </button>
      <div className="about-container">
        <p>ABOUT ME</p>
        <p>
          Hello, I’m Rasool, a self-taught frontend developer based in
          Kermanshah, Iran.
        </p>
        <p>
          In 2021, with the advice and encouragement of two of my friends who
          are senior web developers, I decided to leave my previous field of
          work, content marketing and I started learning the basics of web
          developing.
        </p>
        <p>
          Having worked continuously for 6 years since my marriage, I never had
          a chance to reconsider my career path. But new ideas and goals came to
          my mind, and I started to explore different options. I was interested
          in the tech industry, and programmers often don't have a strong need
          for formal education. Access to free online resources made me feel
          that frontend development might be the answer.
        </p>
        <img
          loading="lazy"
          className="about-img"
          src={selfGrowth}
          alt="self-growth"
        ></img>
        <p>
          After about 5 months from the beginning of learning, I had learned
          Html and Css and could do the appearance and template of my exercises,
          which were usually from W3Schools and YouTube videos. After that, I
          started learning JavaScript and after 1 month, I realized that to
          speed up the learning process and understand the content more deeply,
          I should use a non-free and professional resource.<br></br>
          After researching and getting advice, I got to know
          <span>
            <a href="https://fronthooks.ir/"> Fronthooks Academy</a>
          </span>
          , which was a very important point for my progress in learning the
          basics of programming and JavaScript language.
        </p>
        <p>
          Being self-taught is hard, when I started the scariest thing was to
          face a problem, I struggled with, and couldn’t move further because of
          it. But during this year I always found a way to solve it, sometimes
          it took me days and numerous attempts. I enjoyed the challenge and
          landing on the right solution.
        </p>
        <p>
          I have a passion for web development. It gives me the possibility to
          challenge myself and use a mix of technologies and creativity. I like
          being able to see the result quickly and the endless learning process.
          <br></br>
          And after more than a year of stepping on this new and attractive
          path, I was able to learn a whole new and practical skill and use it
          in many practice projects. You can see some of my projects
          <span>
            <a href="https://github.com/Rasool-Karami1994">here</a>
          </span>
          .
        </p>
        <p>
          Here are the technologies I use:
          <ul>
            <li>- HTML, CSS (Sass)</li>
            <li>- JavaScript (ES6+)</li>
            <li>- React</li>
          </ul>
        </p>
        <p>
          I am now ready to cooperate and join a professional team so that I can
          use my skills to help them and also improve myself by learning new
          skills and experiences from them. Looking for a local or remote
          developer position. I'm more interested in working with React. To
          apply for employment, please contact me:
          <span>
            <a href="mailto:rasoolkarami2304@gmail.com?cc=email-cc@gmail.com&bcc=email-bcc@gmail.com&subject=Subject Using Mailto.co.uk&body=Email Using Body">
              rasoolkarami2304@gmail.com
            </a>
          </span>
        </p>

        <img
          loading="lazy"
          className="about-img"
          src={code}
          alt="code-img"
        ></img>
      </div>
    </>
  );
};

export default About;
