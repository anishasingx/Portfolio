import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
    const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit =  async (data) => 
  {
    const userInfo={
      name: data.name,
      email:data.email,
      message:data.message
    }

    try{
       await axios.post("https://getform.io/f/bolzmrka", userInfo);
      toast.success("Message sent Succsessfully.....");
    } 
    catch(error)
    {
      console.log(error);
      toast.error(" Message failed to send...");
    }
  }

  return (
    <div name="Contact">
       <div className="display-6 fw-bold my-3 bg-info text-white p-2"> ☎️ Get in Touch</div>
       <div className="row">
        <div className="col-12 col-md-5 mb-3">
         {/* /* action="https://getform.io/f/bolzmrka" method="POST"*/ }
            <form  onSubmit={handleSubmit(onSubmit)}>
                <label className='form-label '>Name*</label><br />
                 <input type="text" className='form-control mb-2 myinput' name="name"  {...register("name", { required: true })}/><br />

                <label className='form-label'>Email*</label><br />
                <input type="email" name="email" className='form-control mb-2 myinput' {...register("email", { required: true })}/> <br />

                <label type="" name="" className='form-label'>Message*</label><br />
                <textarea name="message" className='form-control mb-2 myinput' rows={3} {...register("message", { required: true })}></textarea>

                <button className='btn btn-outline-primary mt-2 '>Send</button>
            </form>
         </div>
          <div className="col-12 col-md-7 py-3">
            <h3 className='mb-4'>Feel Free To Contact</h3>
              <p className="mb-4"> 
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your vision. Let’s connect!
              </p>

              <ul className='list-unstyled fs-5'>
                <li className='mb-4 d-flex align-items-center'>
                  <FaMapMarkedAlt className="text-primary fs-4 me-2" />
                  Patna, Bihar, India
                </li>

                <li className='mb-4 d-flex align-items-center'>
                  <FaPhoneAlt className="text-primary fs-4 me-2" />
                  +91 8102881984
                </li>

                <li className='mb-4 d-flex align-items-center'>
                  <FaEnvelope className="text-primary fs-4 me-2" />
                  anishasingh5666@gmail.com
                </li>

                <li className='mb-4 d-flex align-items-center'>
                  <FaGlobe className="text-primary fs-4 me-2" />
                  www.anishacv.com
                </li>
              </ul>

          </div>
        </div>
      </div>
  )
}

export default Contact