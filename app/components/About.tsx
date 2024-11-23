import { Link } from "@remix-run/react";

const About = () => {
  return (
    <section className="bg-white py-8">
      <div className="container py-8 px-6 mx-auto">
        <Link
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
          to="#"
        >
          About
        </Link>

        <p className="mt-8 mb-8">
          This template is inspired by the stunning nordic minimalist design -
          in particular:
          <br />
          <Link
            className="text-gray-800 underline hover:text-gray-900"
            to="http://savoy.nordicmade.com/"
            target="_blank"
            rel="noreferrer"
          >
            Savoy Theme
          </Link>{" "}
          created by{" "}
          <Link
            className="text-gray-800 underline hover:text-gray-900"
            to="https://nordicmade.com/"
          >
            https://nordicmade.com/
          </Link>{" "}
          and{" "}
          <Link
            className="text-gray-800 underline hover:text-gray-900"
            to="https://www.metricdesign.no/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.metricdesign.no/
          </Link>
        </p>

        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <Link to="#">random link</Link> adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra
          maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec
          ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam.
          In est ante in nibh mauris. Egestas congue quisque egestas diam in.
          Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor
          consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac
          habitasse platea dictumst quisque. In aliquam sem fringilla ut.
          Gravida rutrum quisque non tellus orci ac auctor augue mauris.
          Accumsan lacus vel facilisis volutpat est velit egestas dui id. At
          tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas
          fringilla. Vitae congue eu consequat ac.
        </p>
      </div>
    </section>
  );
};

export default About;
