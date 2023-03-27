import { Form } from 'react-router-dom';

// librarys
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets
import illustration from '../assets/illustration.jpg';

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span className="accent">your money</span>
        </h1>
        <p>Personal bidgeting is the secret to financial freedom. Start your journey today.</p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name"
            aria-label="Your name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
        </Form>
        <button type="submit" className="btn btn--dark">
          <span>Create Account</span>
          <UserPlusIcon width={20} />
        </button>
      </div>
      <img src={illustration} alt="person with money" width={600} />
    </div>
  );
};

export default Intro;
