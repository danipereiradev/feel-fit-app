import { ReactNode } from 'react';

interface FormLayoutProps {
  children: ReactNode;
}

const FormContainer: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className=' flex rounded-xl flex-col transition-opacity ease-in-out delay-150 z-20 bg-white/50 px-8 pt-8 w-[350px] h-[600px] md:w-[500px] md:h-[450px] lg:h-[400px] lg:w-[550px] text-black text-lg'>
      {children}
    </div>
  );
};

export default FormContainer;