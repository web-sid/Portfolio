import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col md:justify-center w-full h-full pt-24 md:pt-0 ">
        <div className="  pb-4 md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-sm md:text-xl mt-10  md:mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa
          quam, doloremque eius autem rerum quibusdam, blanditiis inventore
          earum, enim ex. Aliquam itaque quia sed eligendi deleniti laudantium,
          facere excepturi quos natus id, nemo aliquid mollitia error, illo quam
          sunt hic nam nihil delectus cumque voluptate? Tenetur iure officiis
          unde.
        </p>
        <br />
        <p className="text-sm  md:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi in nam
          expedita quod asperiores. Dolorum quae molestias maiores eos debitis
          est ab dolore nesciunt voluptatibus. Atque provident suscipit magnam
          enim quaerat voluptas ad, esse culpa voluptatum asperiores totam
          maiores aliquam iure aspernatur doloremque facere necessitatibus
          fugiat deleniti quo et. Deserunt.
        </p>
      </div>
    </div>
  );
};

export default About;
