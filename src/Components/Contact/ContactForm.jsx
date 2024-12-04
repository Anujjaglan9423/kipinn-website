import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";


const Container = tw.div`w-full max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-8 my-8`;
const ContactInfo = tw.div`space-y-8`;
const Title = tw.h2`text-4xl font-semibold text-gray-900 mb-4 font-jost`;
const Description = tw.p`text-gray-600 mb-8 font-maven`;
const InfoItem = tw.div`flex items-start space-x-4`;
const IconWrapper = tw.div`p-3 bg-blue-500 text-white rounded-lg`;
const InfoContent = tw.div`space-y-1`;
const InfoLabel = tw.h3`text-lg font-semibold text-blue-500 font-maven`;
const InfoText = tw.p`text-gray-600 font-maven`;
const FormContainer = tw.div`bg-white p-6 rounded-lg shadow-sm`;
const FormTitle = tw.h2`text-2xl font-semibold text-gray-900 font-maven`;
const FormGrid = tw.div`grid grid-cols-1 md:grid-cols-2 gap-4`;
const FormField = tw.div`space-y-1`;
const Label = tw.label`text-base font-medium text-gray-700 flex items-center font-maven`;
const Required = tw.span`text-red-500 ml-1 font-maven text-base`;
const Input = tw.input`w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`;
const TextArea = tw.textarea`w-full p-2 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent`;
const Button = tw.button`bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors mt-4 disabled:opacity-50`;

export default function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        telephone: "",
        website: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'telephone', 'message'];

        requiredFields.forEach(field => {
            if (!formData[field].trim()) {
                newErrors[field] = 'This field is required';
            }
        });

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (formData.telephone && !/^\+?[\d\s-]+$/.test(formData.telephone)) {
            newErrors.telephone = 'Please enter a valid phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', formData);
            // Reset form after successful submission
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                telephone: "",
                website: "",
                message: ""
            });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <><Container>
            <ContactInfo>
                <Title>Contact Us</Title>
                <Description>
                    We're here to help! Whether you have a question, need support, or just want to share feedback, feel free to reach out to us.
                </Description>

                <InfoItem>
                    <IconWrapper>
                        <HiLocationMarker className="w-6 h-6" />
                    </IconWrapper>
                    <InfoContent>
                        <InfoLabel>Location</InfoLabel>
                        <InfoText>
                            D217 Sec 3, opposite Airoli Station, Airoli,
                            <br />
                            Maharashtra 400708
                        </InfoText>
                    </InfoContent>
                </InfoItem>

                <InfoItem>
                    <IconWrapper>
                        <HiMail className="w-6 h-6" />
                    </IconWrapper>
                    <InfoContent>
                        <InfoLabel>Email</InfoLabel>
                        <InfoText>contact@bookmyghar.co.in</InfoText>
                    </InfoContent>
                </InfoItem>

                <InfoItem>
                    <IconWrapper>
                        <HiPhone className="w-6 h-6" />
                    </IconWrapper>
                    <InfoContent>
                        <InfoLabel>Phone</InfoLabel>
                        <InfoText>+91-90045 05514</InfoText>
                    </InfoContent>
                </InfoItem>
            </ContactInfo>

            <FormContainer>
                <FormTitle>YOUR DETAILS</FormTitle>
                <div className="h-px bg-gray-200 mt-3 mb-6" />
                <form onSubmit={handleSubmit}>
                    <FormGrid>
                        <FormField>
                            <Label>
                                First Name
                                <Required>*</Required>
                            </Label>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name here"
                                value={formData.firstName}
                                onChange={handleChange} />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </FormField>

                        <FormField>
                            <Label>
                                Last Name
                                <Required>*</Required>
                            </Label>
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name here"
                                value={formData.lastName}
                                onChange={handleChange} />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </FormField>

                        <FormField>
                            <Label>
                                Email Address
                                <Required>*</Required>
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Example: user@website.com"
                                value={formData.email}
                                onChange={handleChange} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </FormField>

                        <FormField>
                            <Label>
                                Subject
                                <Required>*</Required>
                            </Label>
                            <Input
                                type="text"
                                name="subject"
                                placeholder="How can we help you?"
                                value={formData.subject}
                                onChange={handleChange} />
                            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                        </FormField>

                        <FormField>
                            <Label>
                                Telephone
                                <Required>*</Required>
                            </Label>
                            <Input
                                type="tel"
                                name="telephone"
                                placeholder="+91 123 456 789"
                                value={formData.telephone}
                                onChange={handleChange} />
                            {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone}</p>}
                        </FormField>

                        <FormField>
                            <Label>Website</Label>
                            <Input
                                type="url"
                                name="website"
                                placeholder="https://example.com"
                                value={formData.website}
                                onChange={handleChange} />
                        </FormField>
                    </FormGrid>

                    <FormField className="mt-4">
                        <Label>
                            Message
                            <Required>*</Required>
                        </Label>
                        <TextArea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange} />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </FormField>

                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </FormContainer>


        </Container>
        </>
    );
}



// import { Formik, Form, Field } from 'formik'
// import * as Yup from 'yup'
// import tw from 'tailwind-styled-components'
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

// const Container = tw.div`w-full max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-8 my-8`;
// const ContactInfo = tw.div`space-y-8`;
// const Title = tw.h2`text-4xl font-semibold text-gray-900 mb-4 font-jost`;
// const Description = tw.p`text-gray-600 mb-8 font-maven`;
// const InfoItem = tw.div`flex items-start space-x-4`;
// const IconWrapper = tw.div`p-3 bg-blue-500 text-white rounded-lg`;
// const InfoContent = tw.div`space-y-1`;
// const InfoLabel = tw.h3`text-lg font-semibold text-blue-500 font-maven`;
// const InfoText = tw.p`text-gray-600 font-maven`;
// const FormContainer = tw.div`bg-white p-6 rounded-lg shadow-sm`;
// const FormTitle = tw.h2`text-2xl font-semibold text-gray-900 font-maven`;
// const FormGrid = tw.div`grid grid-cols-1 md:grid-cols-2 gap-4`;
// const FormField = tw.div`space-y-1`;
// const Label = tw.label`text-base font-medium text-gray-700 flex items-center font-maven`;
// const Required = tw.span`text-red-500 ml-1 font-maven text-base`;
// const StyledField = tw(Field)`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`
// const StyledTextArea = tw(Field)`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32`
// const Button = tw.button`bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50`
// const ErrorText = tw.span`text-red-500 text-sm`

// const validationSchema = Yup.object({
//     firstName: Yup.string().required('First name is required'),
//     lastName: Yup.string().required('Last name is required'),
//     email: Yup.string()
//         .matches(
//             /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
//             "Invalid email address format"
//         )
//         .required("Email is required"),
//     mobile: Yup.string()
//         .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
//         .required("Mobile Number is required"),
//     message: Yup.string().required('Message is required'),
// });


// export default function ContactForm({ postContact, contactLoading }) {
//     const initialValues = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         mobile: '',
//         message: '',
//     }

//     const handleSubmit = (values, { resetForm }) => {
//         console.log(values)
//         postContact(values)
//         resetForm();
//     }

//     return (
//         <Container>
//             <ContactInfo>
//                 <Title>Contact Us</Title>
//                 <Description>
//                     We're here to help! Whether you have a question, need support, or just want to share feedback,
//                     feel free to reach out to us.
//                 </Description>

//                 <InfoItem>
//                     <IconWrapper>
//                         <FaMapMarkerAlt className="w-5 h-5" />
//                     </IconWrapper>
//                     <InfoContent>
//                         <InfoLabel>Location</InfoLabel>
//                         <InfoText>D217 Sec 3, opposite Airoli Station, Airoli, Maharashtra 400708</InfoText>
//                     </InfoContent>
//                 </InfoItem>

//                 <InfoItem>
//                     <IconWrapper>
//                         <FaEnvelope className="w-5 h-5" />
//                     </IconWrapper>
//                     <InfoContent>
//                         <InfoLabel>Email</InfoLabel>
//                         <InfoText>contact@bookmyghar.co.in</InfoText>
//                     </InfoContent>
//                 </InfoItem>

//                 <InfoItem>
//                     <IconWrapper>
//                         <FaPhone className="w-5 h-5" />
//                     </IconWrapper>
//                     <InfoContent>
//                         <InfoLabel>Phone</InfoLabel>
//                         <InfoText>+91-90545 05514</InfoText>
//                     </InfoContent>
//                 </InfoItem>
//             </ContactInfo>

//             <FormContainer>
//                 <FormTitle>YOUR DETAILS</FormTitle>
//                 <div className="h-px bg-gray-200 mt-3 mb-6" />
//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                 >
//                     {({ errors, touched }) => (
//                         <Form className="space-y-6">
//                             <FormGrid>
//                                 <FormField>
//                                     <Label>
//                                         First Name
//                                         <Required>*</Required>
//                                     </Label>
//                                     <StyledField
//                                         name="firstName"
//                                         placeholder="Enter your first name here"
//                                         aria-label="First Name"
//                                     />
//                                     {errors.firstName && touched.firstName && (
//                                         <ErrorText>{errors.firstName}</ErrorText>
//                                     )}
//                                 </FormField>

//                                 <FormField>
//                                     <Label>
//                                         Last Name
//                                         <Required>*</Required>
//                                     </Label>
//                                     <StyledField
//                                         name="lastName"
//                                         placeholder="Enter your last name here"
//                                         aria-label="Last Name"
//                                     />
//                                     {errors.lastName && touched.lastName && (
//                                         <ErrorText>{errors.lastName}</ErrorText>
//                                     )}
//                                 </FormField>


//                                 <FormField>
//                                     <Label>
//                                         Mobile Number
//                                         <Required>*</Required>
//                                     </Label>
//                                     <StyledField
//                                         name="mobile"
//                                         placeholder="Enter your mobile number here"
//                                         aria-label="Mobile Number"
//                                     />
//                                     {errors.mobile && touched.mobile && (
//                                         <ErrorText>{errors.mobile}</ErrorText>
//                                     )}
//                                 </FormField >
//                                 <FormField>
//                                     <Label>
//                                         Email
//                                         <Required>*</Required>
//                                     </Label>
//                                     <StyledField
//                                         name="email"
//                                         type="email"
//                                         placeholder="Example: user@website.com"
//                                         aria-label="Email Address"
//                                     />
//                                     {errors.email && touched.email && (
//                                         <ErrorText>{errors.email}</ErrorText>
//                                     )}
//                                 </FormField>


//                             </FormGrid>



//                             <FormField className="mt-4">
//                                 <Label>
//                                     Message
//                                     <Required>*</Required>
//                                 </Label>
//                                 <StyledTextArea
//                                     as="textarea"
//                                     name="message"
//                                     placeholder="Your Message"
//                                     aria-label="Message"
//                                 />
//                                 {errors.message && touched.message && (
//                                     <ErrorText>{errors.message}</ErrorText>
//                                 )}
//                             </FormField>

//                             <Button type="submit" disabled={contactLoading}>
//                                 {contactLoading ? 'Sending...' : 'Send Message'}
//                             </Button>
//                         </Form>
//                     )}
//                 </Formik>
//             </FormContainer>
//         </Container>
//     )
// }

