import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/dcbe1255-5ff9-41e4-88b9-1ede3f4dbdbd" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - Aaryaman.sharma001@gmail.com</p>

            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name="name"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="email"/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder="Message"></textarea>
            <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      
    </div>
  );
}

export default Contact;
