import React, { useState } from 'react'
import ContactButton from './ContactButton'
import ContactForm from './ContactForm';

interface IProps {
  enterpriseData: any;
}

const Contact = ({ enterpriseData }: IProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleToggle = () => {
    setOpen(open => !open);
  }

  return (
    <>
      <ContactButton handleToggle={handleToggle} open={open} />
      <ContactForm enterpriseName={enterpriseData.Nome} open={open} />
    </>
  )
}

export default Contact