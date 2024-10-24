import Image from 'next/image'
const Businesscomponent = ({ text }) => {
    return (
        <div className='flex flex-row p-3 w-full h-[55px] border-2 border-gray-200 rounded-xl bg-white'>
            <Image src="/images/business.png" alt='business' width={30} height={30} />
            <p className='ml-4 font-semibold '>{text}</p>
        </div>
    )
}

export default Businesscomponent