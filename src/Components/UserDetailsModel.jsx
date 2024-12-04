import { useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import tw from "tailwind-styled-components";

const ModalWrapper = tw.div`h-full overflow-hidden p-10`;
const Title = tw.h1`text-3xl text-center`;
const Subtitle = tw.p`text-lg text-center pb-6`;
const Form = tw.form`max-w-md mx-auto pt-2 h-full`;
const FormGroup = tw.div`relative z-0 w-full mb-5 group`;
const Input = tw.input`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 focus:outline-none peer`;
const Label = tw.label`peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#ffad33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`;
const Button = tw.button`text-white w-full bg-[#fdaf38] hover:bg-[#fdaf38] focus:ring-4 focus:outline-none focus:ring-[#fdaf38] font-medium rounded-3xl text-sm px-5 py-2.5 text-center`;

function UserDetailsModal({ closeModal, AppointmentLoading, postAppointment, ClientId }) {
  const { id } = useParams();
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form["first_name"].value;
    const lastName = form["last_name"].value;
    const phone = form["phone"].value;
    const gender = form["gender"].value;
    const date = form["date"].value.split("T").join(" ");
    const budget = form["budget"].value;

    const payload = {
      clientId: String(ClientId),
      propId: id,
      name: `${firstName} ${lastName}`,
      phone,
      gender,
      visitDateTime: date,
      budget,
    };
    postAppointment(payload);
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <Modal setOpenModel={closeModal}>
      <ModalWrapper>
        <Title>Airoli Ghar</Title>
        <Subtitle>Appointment Form</Subtitle>
        <Form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <FormGroup>
              <Input type="text" name="first_name" id="first_name" placeholder=" " required />
              <Label htmlFor="first_name">First Name</Label>
            </FormGroup>
            <FormGroup>
              <Input type="text" name="last_name" id="last_name" placeholder=" " required />
              <Label htmlFor="last_name">Last Name</Label>
            </FormGroup>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <FormGroup>
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder=" "
                pattern="\d{10}"
                value={phone}
                onChange={handleInputChange}
                required
              />
              <Label htmlFor="phone">Enter Your Phone Number</Label>
            </FormGroup>
            <FormGroup>
              <Label>Gender</Label>
              <div className="flex gap-2 mt-4 items-center">
                <div>
                  <input type="radio" name="gender" id="male" value="1" className="hidden peer" required />
                  <label
                    htmlFor="male"
                    className="cursor-pointer p-1 px-2 text-sm text-gray-400 border-b border-gray-300 peer-checked:bg-[#feaf38] peer-checked:text-white peer-checked:rounded-md peer-checked:border-[#feaf38]"
                  >
                    Male
                  </label>
                </div>
                <div className="text-gray-400">/</div>
                <div>
                  <input type="radio" name="gender" id="female" value="2" className="hidden peer" required />
                  <label
                    htmlFor="female"
                    className="cursor-pointer p-1 px-2 text-sm text-gray-400 border-b border-gray-300 peer-checked:bg-[#feaf38] peer-checked:text-white peer-checked:rounded-md peer-checked:border-[#feaf38]"
                  >
                    Female
                  </label>
                </div>
              </div>
            </FormGroup>
          </div>
          <FormGroup>
            <Input
              type="datetime-local"
              name="date"
              id="date"
              min={getCurrentDateTime()}
              placeholder=" "
              required
            />
            <Label htmlFor="date">Select A Date For Your Visit</Label>
          </FormGroup>
          <FormGroup>
            <Input type="text" name="budget" id="budget" placeholder=" " required />
            <Label htmlFor="budget">Estimate Budget</Label>
          </FormGroup>
          <Button type="submit">
            {AppointmentLoading ? "Scheduling..." : "Schedule Appointment"}
          </Button>
        </Form>
      </ModalWrapper>
    </Modal>
  );
}

export default UserDetailsModal;
